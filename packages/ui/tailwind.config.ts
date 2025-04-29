export const config = {
    content: [],
    theme: {
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



