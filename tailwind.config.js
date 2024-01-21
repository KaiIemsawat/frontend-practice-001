/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "gray-20": "#faeff7",
                "gray-50": "#e9dfeb",
                "gray-100": "#ddcfde",
                "gray-500": "#5a0214",
                "primary-100": "#ffe3e9",
                "primary-300": "#ffa0aa",
                "primary-500": "#ff5853",
                "secondary-400": "#ed82cb",
                "secondary-500": "#ed4bc5",
            },
            backgroundImage: (theme) => ({
                "gradient-yellowred":
                    "linear-gradient(90deg, #ff7064 0%, #f2d028 100%)",
                "mobile-home": "url('./assets/HomePageGraphic.png')",
            }),
            fontFamily: {
                dmsans: ["DM Sans", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            content: {
                evolvetext: "url('./assets/EvolveText.png')",
                abstractwaves: "url('./assets/AbstractWaves.png')",
                sparkles: "url('./assets/Sparkles.png')",
                circles: "url('./assets/Circles.png')",
            },
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060",
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
