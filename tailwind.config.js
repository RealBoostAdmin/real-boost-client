module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif']
      },
      animation: {
        rotate: 'rotate 2s linear infinite',
        dash: 'dash 1.5s ease-in-out infinite'
      },
      keyframes: {
        rotate: {
          '100%': {
            transform: 'rotate(360deg)',
          }
        },
        dash: {
          '0%': {
            strokeDasharray: '1, 200',
            strokeDashoffset: '0',
          },
          '50%': {
            strokeDasharray: '89, 200',
            strokeDashoffset: '-35px',
          },
          '100%': {
            strokeDasharray: '89, 200',
            strokeDashoffset: '-124px',
          }
        }
      },
      colors: {
        gray: {
          '50': '#FAFAFA',
          '100': '#EDEDEE',
          '200': '#D0D0D3',
          '300': '#B2B2B7',
          '400': '#96959D',
          '500': '#797883',
          '600': '#5A5966',
          '700': '#3D3C4B',
          '800': '#211F30',
          '900': '#121023',
        },
        red: {
          '50': '#FFEBEB',
          '100': '#FFD7D7',
          '200': '#FFB0B0',
          '300': '#FF8888',
          '400': '#FF6161',
          '500': '#FF3939',
          '600': '#F22E2E',
          '700': '#E52323',
          '800': '#D61818',
          '900': '#C90C0C',
        }
      }
    },
  },
  plugins: [],
}
