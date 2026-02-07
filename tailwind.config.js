import { Surface } from 'recharts';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#2563eb",
                secondary: "#475569",
                background: "#f8fafc",
                surface: "#ffffff",
            }
        },
    },
    plugins: [],
}