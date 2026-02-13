/**
 * Portfolio Interactive Features
 * Handles scroll-based animations, particle backgrounds, loading animations,
 * form validation, and animated download buttons for a modern portfolio experience.
 */

// Check if DOM is ready before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializePortfolioFeatures();
});

function initializePortfolioFeatures() {
    // Load animations and interactions in order of importance
    initLoadingAnimation();
    initParticleBackground();
    initScrollAnimations();
    initFormValidation();
    initAnimatedDownloadButton();
}

/**
 * Custom Loading Animation
 */
function initLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'portfolio-loader';
    loader.innerHTML = `
        <div class="loader-container">
            <div class="loader-circle">
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
            </div>
            <p class="loader-text">Loading Portfolio...</p>
        </div>
    `;
    
    // Add loader styles
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        #portfolio-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0D1117 0%, #1a1f29 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.8s ease-out;
        }
        
        .loader-container {
            text-align: center;
        }
        
        .loader-circle {
            position: relative;
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
        }
        
        .loader-dot {
            position: absolute;
            width: 20px;
            height: 20px;
            background: #00C2FF;
            border-radius: 50%;
            animation: loader-pulse 1.5s infinite ease-in-out;
        }
        
        .loader-dot:nth-child(1) {
            top: 0;
            left: 0;
            animation-delay: 0s;
        }
        
        .loader-dot:nth-child(2) {
            top: 0;
            right: 0;
            animation-delay: 0.5s;
        }
        
        .loader-dot:nth-child(3) {
            bottom: 0;
            left: 0;
            animation-delay: 1s;
        }
        
        @keyframes loader-pulse {
            0%, 100% { transform: scale(0.8); opacity: 0.7; }
            50% { transform: scale(1.2); opacity: 1; }
        }
        
        .loader-text {
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            letter-spacing: 1px;
            margin: 0;
        }
    `;
    
    document.head.appendChild(loaderStyle);
    document.body.appendChild(loader);
    
    // Remove loader after page content is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
                loaderStyle.remove();
            }, 800);
        }, 500);
    });
}

/**
 * Particle Background Animation
 */
function initParticleBackground() {
    // Create canvas for particle background
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 100;
    
    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 194, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        
        // Draw connections between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 194, 255, ${0.2 * (1 - distance/100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

/**
 * Scroll-Based Animations using basic JavaScript (alternative to GSAP)
 */
function initScrollAnimations() {
    // Animation options
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Animation effects
    const animateElement = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animation || 'fadeInUp';
                
                // Add animation classes based on type
                element.classList.add('animated', animationType);
                
                // Remove observer after animation triggers
                observer.unobserve(element);
            }
        });
    };
    
    // Create intersection observer
    const observer = new IntersectionObserver(animateElement, options);
    
    // Find all elements with data-animation attribute
    const animatedElements = document.querySelectorAll('[data-animation]');
    
    animatedElements.forEach(el => {
        // Add initial classes
        el.classList.add('animation-init');
        
        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            .animation-init {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            
            .animated {
                opacity: 1;
                transform: translateY(0);
            }
            
            .fadeInUp {
                animation: fadeInUp 0.8s ease-out forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .fadeInLeft {
                animation: fadeInLeft 0.8s ease-out forwards;
            }
            
            @keyframes fadeInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .fadeInRight {
                animation: fadeInRight 0.8s ease-out forwards;
            }
            
            @keyframes fadeInRight {
                from {
                    opacity: 0;
                    transform: translateX(30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .zoomIn {
                animation: zoomIn 0.8s ease-out forwards;
            }
            
            @keyframes zoomIn {
                from {
                    opacity: 0;
                    transform: scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        
        if (!document.querySelector('#scroll-animation-styles')) {
            style.id = 'scroll-animation-styles';
            document.head.appendChild(style);
        }
        
        // Observe the element
        observer.observe(el);
    });
}

/**
 * Dynamic Form Validation
 */
function initFormValidation() {
    const contactForm = document.querySelector('form');
    if (!contactForm) return;
    
    // Add validation styles
    const validationStyles = document.createElement('style');
    validationStyles.textContent = `
        .form-field {
            margin-bottom: 20px;
            position: relative;
        }
        
        .form-input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #374151;
            border-radius: 8px;
            background: #1f2937;
            color: white;
            font-size: 16px;
            transition: border-color 0.3s, box-shadow 0.3s;
        }
        
        .form-input:focus {
            outline: none;
            border-color: #00C2FF;
            box-shadow: 0 0 0 3px rgba(0, 194, 255, 0.2);
        }
        
        .form-input.error {
            border-color: #ef4444;
        }
        
        .form-input.valid {
            border-color: #10b981;
        }
        
        .error-message {
            color: #ef4444;
            font-size: 14px;
            margin-top: 5px;
            display: block;
        }
        
        .success-message {
            color: #10b981;
            font-size: 14px;
            margin-top: 5px;
            display: block;
        }
        
        .submit-btn {
            background: linear-gradient(135deg, #00C2FF 0%, #0066ff 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 194, 255, 0.3);
        }
        
        .submit-btn:active {
            transform: translateY(0);
        }
        
        .submit-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
    `;
    
    document.head.appendChild(validationStyles);
    
    // Validation rules
    const validators = {
        name: (value) => {
            if (!value.trim()) return 'Name is required';
            if (value.trim().length < 2) return 'Name must be at least 2 characters';
            return null;
        },
        email: (value) => {
            if (!value.trim()) return 'Email is required';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email address';
            return null;
        },
        message: (value) => {
            if (!value.trim()) return 'Message is required';
            if (value.trim().length < 10) return 'Message must be at least 10 characters';
            return null;
        }
    };
    
    // Real-time validation
    contactForm.addEventListener('input', (e) => {
        const field = e.target.closest('.form-input');
        if (!field) return;
        
        const validator = validators[field.name];
        if (!validator) return;
        
        const error = validator(field.value);
        const errorElement = field.parentNode.querySelector('.error-message');
        
        if (error) {
            field.classList.remove('valid');
            field.classList.add('error');
            if (!errorElement) {
                const newErrorElement = document.createElement('div');
                newErrorElement.className = 'error-message';
                newErrorElement.textContent = error;
                field.parentNode.appendChild(newErrorElement);
            } else {
                errorElement.textContent = error;
            }
        } else {
            field.classList.remove('error');
            field.classList.add('valid');
            if (errorElement) {
                errorElement.remove();
            }
        }
    });
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const formData = new FormData(contactForm);
        
        // Validate all fields
        Object.keys(validators).forEach(fieldName => {
            const field = contactForm.querySelector(`[name="${fieldName}"]`);
            if (field) {
                const error = validators[fieldName](field.value);
                if (error) {
                    isValid = false;
                    field.classList.remove('valid');
                    field.classList.add('error');
                    
                    let errorElement = field.parentNode.querySelector('.error-message');
                    if (!errorElement) {
                        errorElement = document.createElement('div');
                        errorElement.className = 'error-message';
                        field.parentNode.appendChild(errorElement);
                    }
                    errorElement.textContent = error;
                } else {
                    field.classList.remove('error');
                    field.classList.add('valid');
                    
                    const errorElement = field.parentNode.querySelector('.error-message');
                    if (errorElement && !errorElement.textContent.includes('valid')) {
                        errorElement.remove();
                    }
                }
            }
        });
        
        if (isValid) {
            // Form is valid, submit it
            submitForm(formData);
        }
    });
    
    // Mock form submission
    function submitForm(formData) {
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Message Sent!';
            
            // Reset after success message
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                contactForm.reset();
                
                // Remove validation classes
                contactForm.querySelectorAll('.form-input').forEach(input => {
                    input.classList.remove('error', 'valid');
                });
                
                // Remove error messages
                contactForm.querySelectorAll('.error-message').forEach(msg => msg.remove());
            }, 2000);
        }, 1500);
    }
}

/**
 * Animated Download Button
 */
function initAnimatedDownloadButton() {
    // Look for download buttons and add animation behavior
    const downloadButtons = document.querySelectorAll('.download-btn, [data-download]');
    
    downloadButtons.forEach(btn => {
        // Add button styles if not already present
        if (!document.querySelector('#download-btn-styles')) {
            const buttonStyles = document.createElement('style');
            buttonStyles.id = 'download-btn-styles';
            buttonStyles.textContent = `
                .download-btn, [data-download] {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(135deg, #00C2FF 0%, #0066ff 100%);
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    min-width: 160px;
                }
                
                .download-btn:hover, [data-download]:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0, 194, 255, 0.3);
                }
                
                .download-btn:active, [data-download]:active {
                    transform: translateY(0);
                }
                
                .download-btn .progress, [data-download] .progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.5);
                    width: 0%;
                    transition: width 0.3s ease;
                }
                
                .download-btn.downloading .progress, [data-download].downloading .progress {
                    width: 100%;
                }
                
                .download-btn.downloading, [data-download].downloading {
                    pointer-events: none;
                }
                
                .download-icon {
                    transition: transform 0.3s ease;
                }
                
                .download-btn:hover .download-icon, [data-download]:hover .download-icon {
                    transform: translateY(2px);
                }
            `;
            
            document.head.appendChild(buttonStyles);
        }
        
        // Add progress element if not present
        if (!btn.querySelector('.progress')) {
            const progress = document.createElement('div');
            progress.className = 'progress';
            btn.appendChild(progress);
        }
        
        // Add download animation
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add downloading class
            btn.classList.add('downloading');
            
            // Simulate download process
            setTimeout(() => {
                // Create a temporary link to "download" a file
                const link = document.createElement('a');
                link.href = '#'; // In a real app, this would be the actual file URL
                link.download = 'portfolio-resume.pdf';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Reset button after download
                setTimeout(() => {
                    btn.classList.remove('downloading');
                    
                    // Show success state briefly
                    const originalContent = btn.innerHTML;
                    btn.innerHTML = 'Downloaded!';
                    
                    setTimeout(() => {
                        btn.innerHTML = originalContent;
                        
                        // Add progress element back if needed
                        if (!btn.querySelector('.progress')) {
                            const progress = document.createElement('div');
                            progress.className = 'progress';
                            btn.appendChild(progress);
                        }
                    }, 1500);
                }, 300);
            }, 1000);
        });
    });
}

// Export functions for use in modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initLoadingAnimation,
        initParticleBackground,
        initScrollAnimations,
        initFormValidation,
        initAnimatedDownloadButton
    };
}