/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#052d75',
          dark: '#074ca6',
          light: '#1e40af'
        },
        secondary: {
          DEFAULT: '#14B8A6',
          light: '#5EEAD4',
          dark: '#0F766E'
        },
        dark: '#0F172A',
        light: '#F1F5F9',
        slate: {
          750: '#334155',
          850: '#1e293b',
          950: '#020617'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particles': 'particles 20s linear infinite',
        'float-up': 'float-up 6s ease-in-out infinite',
        'float-down': 'float-down 8s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)'
          }
        },
        'float-up': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg)'
          },
          '33%': {
            transform: 'translateY(-30px) translateX(10px) rotate(5deg)'
          },
          '66%': {
            transform: 'translateY(-15px) translateX(-10px) rotate(-3deg)'
          }
        },
        'float-down': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateY(25px) translateX(15px) rotate(-5deg)'
          }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'particles': {
          '0%': {
            transform: 'translateY(100vh) translateX(0px) rotate(0deg)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-100vh) translateX(100px) rotate(360deg)',
            opacity: '0'
          }
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'glow': {
          '0%': {
            'box-shadow': '0 0 20px rgba(20, 184, 166, 0.5)'
          },
          '100%': {
            'box-shadow': '0 0 30px rgba(20, 184, 166, 0.8)'
          }
        },
        'shimmer': {
          '0%': {
            'background-position': '-200% center'
          },
          '100%': {
            'background-position': '200% center'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(20, 184, 166, 0.3)',
        'glow-lg': '0 0 40px rgba(20, 184, 166, 0.4)',
        'glow-xl': '0 0 60px rgba(20, 184, 166, 0.5)',
        'primary': '0 10px 25px rgba(5, 45, 117, 0.3)',
        'primary-lg': '0 20px 40px rgba(5, 45, 117, 0.4)',
        'secondary': '0 10px 25px rgba(20, 184, 166, 0.3)',
        'secondary-lg': '0 20px 40px rgba(20, 184, 166, 0.4)',
        'cyber': '0 0 30px rgba(20, 184, 166, 0.6), inset 0 0 30px rgba(5, 45, 117, 0.3)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'inner-glow': 'inset 0 0 20px rgba(20, 184, 166, 0.2)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': `
          linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
        `,
        'mesh': `
          radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(5, 45, 117, 0.2) 0%, transparent 50%)
        `,
        'shimmer': 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)',
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem'
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px'
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px'
      },
      transformOrigin: {
        'center-bottom': 'center bottom',
        'center-top': 'center top',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
        '105': '1.05'
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg'
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px'
      }
    }
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.perspective-500': {
          perspective: '500px',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-1500': {
          perspective: '1500px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0,0,0,0.2)',
        },
        '.text-shadow-xl': {
          'text-shadow': '0 6px 12px rgba(0,0,0,0.3)',
        },
        '.text-glow': {
          'text-shadow': '0 0 10px currentColor',
        },
        '.text-glow-lg': {
          'text-shadow': '0 0 20px currentColor, 0 0 30px currentColor',
        },
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          'background': 'rgba(0, 0, 0, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-strong': {
          'background': 'rgba(255, 255, 255, 0.15)',
          'backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.gradient-mask': {
          'mask': 'linear-gradient(180deg, black 0%, transparent 100%)',
          '-webkit-mask': 'linear-gradient(180deg, black 0%, transparent 100%)',
        },
        '.clip-path-polygon': {
          'clip-path': 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
        },
        '.filter-none': {
          filter: 'none',
        },
        '.writing-vertical': {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'mixed',
        }
      }

      addUtilities(newUtilities)
    },
    // Add custom component utilities
    function({ addComponents, theme }) {
      const components = {
        '.btn-primary': {
          backgroundColor: theme('colors.primary.DEFAULT'),
          color: theme('colors.white'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.semibold'),
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.primary.dark'),
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.primary-lg'),
          }
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.secondary.DEFAULT'),
          color: theme('colors.white'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.semibold'),
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.secondary.dark'),
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.secondary-lg'),
          }
        },
        '.card-glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: theme('borderRadius.2xl'),
          padding: theme('spacing.6'),
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme('boxShadow.glow-lg'),
          }
        }
      }

      addComponents(components)
    }
  ]
}