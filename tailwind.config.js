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
        sky: 'var(--sky)',
        bubble: 'var(--bubble)',
        trackoutline: 'var(--trackoutline)',
        textcolor: 'var(--textcolor)',
        button: 'var(--button)',
      },
      backgroundImage: {
        clouds: 'var(--clouds)',
        clouds2: 'var(--clouds2)',
        schedule: 'var(--schedule)',
      },
    },
  },
  plugins: [],
};
