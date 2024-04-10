/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                madang: {
                    50: '#f0fdf5',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efab',
                    400: '#4ade7e',
                    500: '#22c55b',
                    600: '#16a347',
                    700: '#15803a',
                    800: '#166532',
                    900: '#14532a',
                    950: '#052e13',
                },
            },
            borderWidth: {
                5: '5px',
            },
        },
    },
    plugins: [],
}
