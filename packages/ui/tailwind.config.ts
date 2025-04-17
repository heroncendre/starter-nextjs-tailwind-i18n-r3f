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
            }
        }
    },
    plugins: [
        require('tailwindcss-animate')
    ]
}
