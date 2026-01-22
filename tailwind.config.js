/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rbb: {
                    red: '#da291c',
                    blue: '#00468b',
                }
            }
        },
    },
    plugins: [],
}
