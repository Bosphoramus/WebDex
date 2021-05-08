module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'lg-invert':
          '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'dark'],
    }
  },
  plugins: [],
}
