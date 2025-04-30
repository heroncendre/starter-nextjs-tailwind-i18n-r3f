export const config = {
    content: [],
    theme: {
        screens: {
            sm: '640px',   // ≥ 640px
            md: '768px',   // ≥ 768px
            lg: '1024px',  // ≥ 1024px
            xl: '1280px',  // ≥ 1280px
            '2xl': '1536px' // ≥ 1536px
        },
        extend: {
            colors: {
                primary: '#1d4ed8',
                secondary: '#9333ea'
            },
            borderRadius: {
                DEFAULT: '0.5rem',
                full: '9999px'
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)' },
                    '100%': { transform: 'scale(1)' },
                }
            }
        }
    },
    plugins: [
        require('tailwindcss-animate')
    ]
}



