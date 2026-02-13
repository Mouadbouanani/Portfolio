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
        // Palette A - Light Mode Moderne & Propre
        'light-primary': '#1A73E8',        // Bleu royal
        'light-secondary': '#FFFFFF',      // Blanc
        'light-accent': '#64B5F6',         // Bleu clair
        'light-text': '#212121',           // Gris anthracite
        'light-bg': '#F5F7FA',             // Background clair

        // Palette B - Pastel & Créatif
        'pastel-primary': '#A7C7E7',       // Bleu pastel
        'pastel-secondary': '#FFF5E4',     // Beige doux
        'pastel-accent': '#FFB5A7',        // Saumon clair
        'pastel-text': '#606060',          // Gris doux
        'pastel-bg': '#FAFAF8',            // Blanc cassé

        // Palette C - Dark Mode Premium (Or & Noir) - current theme
        'dark-primary': '#0D0D0D',         // Noir profond
        'dark-secondary': '#D4AF37',       // Or doux
        'dark-accent': '#F2E9C9',          // Or clair
        'dark-text': '#F8F8F2',            // Blanc cassé
        'dark-bg': '#121212',              // Noir texturé
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'gradient-xy': 'gradient-xy 8s ease infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 4s infinite',
        'spin-slow': 'spin 10s linear infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'particles': 'particles 25s linear infinite',
        'float-up': 'float-up 7s ease-in-out infinite',
        'float-down': 'float-down 9s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 25s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-vertical': 'marquee-vertical 25s linear infinite',
        'text-pulse': 'text-pulse 2s ease-in-out infinite alternate',
        'tilt-infinite': 'tilt-infinite 10s linear infinite',
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
            'box-shadow': '0 0 20px rgba(37, 99, 235, 0.5)'
          },
          '100%': {
            'box-shadow': '0 0 40px rgba(30, 110, 230, 0.8)'
          }
        },
        'shimmer': {
          '0%': {
            'background-position': '-200% center'
          },
          '100%': {
            'background-position': '200% center'
          }
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        'text-pulse': {
          '0%': {
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%'
          },
          '100%': {
            backgroundPosition: '100% 50%',
            backgroundSize: '200% 200%'
          }
        },
        'tilt-infinite': {
          '0%, 50%': { transform: 'rotate(1deg)' },
          '51%, 100%': { transform: 'rotate(-1deg)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      boxShadow: {
        'glow': '0 0 15px rgba(37, 99, 235, 0.4)',
        'glow-lg': '0 0 25px rgba(37, 99, 235, 0.5)',
        'glow-xl': '0 0 35px rgba(37, 99, 235, 0.6)',
        'primary': '0 10px 25px rgba(37, 99, 235, 0.3)',
        'primary-lg': '0 20px 40px rgba(37, 99, 235, 0.4)',
        'secondary': '0 10px 25px rgba(14, 165, 233, 0.3)',
        'secondary-lg': '0 20px 40px rgba(14, 165, 233, 0.4)',
        'accent': '0 10px 25px rgba(5, 150, 105, 0.3)',
        'accent-lg': '0 20px 40px rgba(5, 150, 105, 0.4)',
        'floating': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'floating-lg': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'inner-glow': 'inset 0 0 20px rgba(37, 99, 235, 0.2)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': `
          radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.05) 0%, transparent 50%)
        `,
        'grid-pattern': `
          linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
        `,
        'shimmer': 'linear-gradient(110deg, transparent 40%, rgba(37, 99, 235, 0.1) 50%, transparent 60%)',
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        'animated-gradient': 'linear-gradient(90deg, #2563eb, #0ea5e9, #059669, #2563eb)',
        'flow-gradient': 'linear-gradient(-45deg, #2563eb, #0ea5e9, #059669, #1e3a8a)'
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
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        '.glass-dark': {
          'background': 'rgba(10, 10, 10, 0.25)',
          'backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.2)',
        },
        '.glass-strong': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(24px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'box-shadow': '0 12px 48px rgba(0, 0, 0, 0.2)',
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
        },
        '.gradient-text': {
          'background': 'linear-gradient(45deg, #2563eb, #0ea5e9)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '200% 200%',
        },
        '.animated-gradient-border': {
          'border': '1px solid',
          'border-image': 'linear-gradient(45deg, #6366f1, #ec4899) 1',
        },
        '.floating': {
          'animation': 'float 6s ease-in-out infinite',
        },
        '.tilting': {
          'animation': 'tilt-infinite 10s linear infinite',
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
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.full'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: '0.5s',
          },
          '&:hover': {
            backgroundColor: theme('colors.primary.dark'),
            transform: 'translateY(-3px)',
            boxShadow: theme('boxShadow.primary-lg'),
            '&:before': {
              left: '100%',
            }
          },
          '&:active': {
            transform: 'translateY(-1px)',
          }
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.secondary.DEFAULT'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.full'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: '0.5s',
          },
          '&:hover': {
            backgroundColor: theme('colors.secondary.dark'),
            transform: 'translateY(-3px)',
            boxShadow: theme('boxShadow.secondary-lg'),
            '&:before': {
              left: '100%',
            }
          },
          '&:active': {
            transform: 'translateY(-1px)',
          }
        },
        '.btn-accent': {
          backgroundColor: theme('colors.accent.DEFAULT'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.full'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: '0.5s',
          },
          '&:hover': {
            backgroundColor: theme('colors.accent.dark'),
            transform: 'translateY(-3px)',
            boxShadow: theme('boxShadow.accent-lg'),
            '&:before': {
              left: '100%',
            }
          },
          '&:active': {
            transform: 'translateY(-1px)',
          }
        },
        '.card-glass': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.8'),
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent)',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme('boxShadow.floating-lg'),
            '&:before': {
              animation: 'gradient-x 3s ease infinite',
            }
          }
        }
      }

      addComponents(components)
    }
  ]
}