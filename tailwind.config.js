module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        citrus: {
          sky: '#A3DEFF',
          bubble: '#B1E3FF',
          darkgreen: '#2F5525',
          lightgreen: '#69C063',
          brown: '#71461F',
          gold: '#EF9B1F',
          bluegray: '#514F66',
          gray: '#5F5F5F',
          white: '#FFFFFF',
          darksky: '#2C314F',
          darkbubble: '#373A5E',
        },
      },
    },
  },
  plugins: [],
};
