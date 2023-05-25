/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'skippo_purple': '#6245F3',
                'skippo_purple_lighter': '#917EF0',
                'skippo_purple_darker': '#4026C0'
            },
            fontSize: {
                sm: '12px',
                base: '16px',
                xl: '20px',
                '2xl': '24px',
                '3xl': '28px',
                '4xl': '32px'
            },
            screens: {
                lg: '900px'
            }
        },
    },
    plugins: []
};