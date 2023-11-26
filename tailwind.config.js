/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/index.html",
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e1f22',
        secondary: '#0ED2CE',
        blu: '#1876f0',
        general: '#b000ff',
        dark: '#1e1f22',
        light: '#FFFFFF'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "85%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2.5s steps(50) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
