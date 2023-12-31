/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#598c26",
                    50: "#f0f9f1",
                    100: "#d1e4c5",
                    200: "#b2cf99",
                    300: "#91ba6c",
                    400: "#71a53f",
                    500: "#598c26",
                    600: "#46711e",
                    700: "#345819",
                    800: "#243e14",
                    900: "#172e0f",
                },
                secondary: {
                    DEFAULT: "#4C3B28",
                    50: "#FDF7F3",
                    100: "#F8E8DF",
                    200: "#F2D9CA",
                    300: "#ECCAB5",
                    400: "#E7BB9F",
                    500: "#CC9D86",
                    600: "#A2826C",
                    700: "#7E6852",
                    800: "#5A4D38",
                    900: "#3F3A26",
                },
                tertiary: {
                    DEFAULT: "#FCB131",
                    50: "#fdf5e0",
                    100: "#fce6ae",
                    200: "#fbe87d",
                    300: "#fbe94d",
                    400: "#f9dd1b",
                    500: "#e0c400",
                    600: "#b5a000",
                    700: "#8b7c00",
                    800: "#605800",
                    900: "#433f00",
                },
                warning: {
                    DEFAULT: "#FF8C00",
                    50: "#fff5e0",
                    100: "#ffebc2",
                    200: "#ffe09c",
                    300: "#ffd576",
                    400: "#ffca4f",
                    500: "#ffc029",
                    600: "#e5a100",
                    700: "#b97e00",
                    800: "#8d5b00",
                    900: "#724800",
                },
                info: {
                    DEFAULT: "#0074D9",
                    50: "#edf5ff",
                    100: "#c5deff",
                    200: "#9cc6ff",
                    300: "#72adff",
                    400: "#4995ff",
                    500: "#247cff",
                    600: "#0065e3",
                    700: "#0050b8",
                    800: "#003d8c",
                    900: "#002d6d",
                },
                danger: {
                    DEFAULT: "#FF4136",
                    50: "#fde8e6",
                    100: "#f9c1be",
                    200: "#f69595",
                    300: "#f36e6e",
                    400: "#f04847",
                    500: "#ee251d",
                    600: "#d11b16",
                    700: "#a11413",
                    800: "#750e0f",
                    900: "#5a0b0c",
                },
                success: {
                    DEFAULT: "#2ECC40",
                    50: "#e7f7ea",
                    100: "#b2e3b5",
                    200: "#7fcea0",
                    300: "#4ca98b",
                    400: "#1b9377",
                    500: "#007e60",
                    600: "#00624b",
                    700: "#005037",
                    800: "#003822",
                    900: "#002813",
                },
            },
        },
    },
    plugins: [],
}

