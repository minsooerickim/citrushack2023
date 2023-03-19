const plugin = require("tailwindcss/plugin")
const MyClass = plugin( function ({addUtilities})  {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden", 
    }
  });
});

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        pattern: 'var(--pattern)',
      },
      fontFamily: {
        baloo_semi_bold: ["BalooPaaji2Bold"],
        baloo_regular: ["BalooPaaji2Reg"],
        baloo_medium: ["BalooPaaji2Medium"],
        baloo_bold: ["BalooPaaji2Bold"]
      },
      colors: {
        judge: 'var(--judge)',
        opposite: 'var(--opposite)',
        transparent: 'var(--transparent)',
        text: 'var(--text)',
        buttons: 'var(--buttons)',
        card: 'var(--card)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        third: 'var(--third)',
        card: 'var(--card)',
        overlay: 'var(--overlay)',
        highlight: {
          DEFAULT: 'var(--highlight)',
        },
        sub: {
          DEFAULT: 'var(--sub)',
          secondary: 'var(--sub-secondary)'
        },
        from: 'var(--from)',
        via: 'var(--via)',
        via2: 'var(--via2)',
        to: 'var(--to)',
        waveFrom: 'var(--wave-from)',
        waveVia: 'var(--wave-via)',
        waveTo: 'var(--wave-to)',
      },
    },
  },
  plugins: [MyClass],
}
