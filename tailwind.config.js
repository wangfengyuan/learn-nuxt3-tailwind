const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.vue',
    './pages/**/*.vue',
    './layouts/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '100%': '100%',
        '7%': '7%',
      },
      padding: {
        '6%': '0 6%',
      },
      colors: {
        "blue": {
          DEFAULT: "#1B234D",
          strong: "rgba(20,27,61,1)",
          dark: "#111733"
        },
        "light-white": "rgba(17,23,51,0.00)",
        "strong-yellow": "#FFD547",
        "light-gray": "#514008",
        "gold": "#FFE55B",
      },
      backgroundImage: {
        'slide-pre': "url('./assets/images/left.png')",
        'slide-next': "url('./assets/images/right.png')",
        'eye': "url('./assets/images/eyes.png')",
        'channel-corner': "url('./assets/images/channel-san-new.png')"
      },
      fontFamily: {
        dinm: ['dinm', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
