import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import * as THREE from 'three'; // Add this import for types
import { useTheme } from '../contexts/ThemeContext';

interface ComputerModelProps {
    isMobile: boolean;
}

const ComputerModel: React.FC<ComputerModelProps> = ({ isMobile }) => {
    const { currentTheme } = useTheme();
    const computer = useGLTF('./gaming_desktop_pc.glb');
    const meshRef = useRef<THREE.Group>(null); // Now THREE is recognized

    useFrame((_state, delta) => { // Remove unused 'state'
        if (isMobile && meshRef.current) {
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <mesh ref={meshRef}>
            <hemisphereLight intensity={0.15} groundColor={currentTheme.primaryColor} />
            <pointLight intensity={1} />
            <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.85}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

// Rest of ComputersCanvas remains the same
const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1024px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }, []);

    return (
        <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }}>
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <ComputerModel isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;