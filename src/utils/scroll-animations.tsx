/**
 * Scroll Animation Hook using Framer Motion and Intersection Observer
 * Provides smooth scroll-based animations for portfolio sections
 */

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
    const controls = useAnimation();
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                } else {
                    controls.start('hidden');
                }
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [controls, threshold]);

    return { controls, ref: elementRef };
};

// Reusable animated components
export const AnimatedSection = ({ children, className = '', animationType = 'fadeInUp' }: {
  children: React.ReactNode;
  className?: string;
  animationType?: string;
}) => {
    const { controls, ref } = useScrollAnimation();

    // Animation variants
    const variants = {
        hidden: {
            opacity: 0,
            y: 30,
            x: 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    // Special variants for different animation types
    const animationVariants = {
        fadeInUp: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
        },
        fadeInDown: {
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
        },
        fadeInLeft: {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
        },
        fadeInRight: {
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
        },
        zoomIn: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
        }
    };

    const selectedVariants = animationVariants[animationType as keyof typeof animationVariants] || variants;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={selectedVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const AnimatedItem = ({ children, delay = 0 }: {
  children: React.ReactNode;
  delay?: number;
}) => {
    const { controls, ref } = useScrollAnimation();

    // Animation variants with delay capability
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay,
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};