/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "serif"],},
      colors: {
        basewhite: '#FFFFFF',
        baseblack: '#000000',
        primary: '#009933',
        primary10: '#CCEBD6',
        primary20: '#AADDBB',
        primary30: '#80CC99',
        primary40: '#55BB77',
        primary50: '#2AAA55',
        primary60: '#00802A',
        primaryy70: '#006622',
        primary80: '#004C19',
        primary90: '#003311',
        primary100: '#001F0A',
        secondary: '#33CC66',
        secondary10: '#D6F5E0',
        secondary20: '#BBEECC',
        secondary30: '#99E5B2',
        secondary40: '#77DD99',
        secondary50: '#55D480',
        secondary60: '#2AAA55',
        secondary70: '#228844',
        secondary80: '#196633',
        secondary90: '#114422',
        secondary100: '#0A2914',
        tertiary: '#003333',
        tertiary10: '#CCD6D6',
        tertiary20: '#AABBBB',
        tertiary30: '#809999',
        tertiary40: '#557777',
        tertiary50: '#2A5555',
        tertiary60: '#002A2A',
        tertiary70: '#002222',
        tertiary80: '#001919',
        tertiary90: '#001111',
        tertiary100: '#000A0A',
        success10: '#F2FCF5',
        success20: '#CCF2D5',
        success30: '#98E4AB',
        success40: '#72DA8C',
        sucess50: '#4BD06D',
        success60: '#34C759',
        sucess70: '#2EAE4E',
        sucess80: '#217C38',
        success90: '#144B21',
        success100: '#07190B',
        error10: '#FFF3F2',
        error20:'#FFCECB',
        error30: '#FF9D98',
        error40: '#FF7871',
        error50: '#FF544A',
        error60: '#FF3B30',
        error70: '#FF170A',
        error80: '#BD0A00',
        error90: '#720600',
        error200: '#260200',
        neutral10: '#F9F9F9',
        neutral20: '#F4F4F4',
        neutral30: '#E9E9E9',
        neutral40: '#D9D9D9',
        neutral50: '#C1C1C1',
        neutral60: '#A0A0A0',
        neutral70: '#898989',
        neutral80: '#666666',
        neutral90: '#434343',
        neutral100: '#1C1C1C',
        green50: '#F7FDF9',
        green100: '#F7FDF9',
        green200: '#33CC66',
        green300: '#009933',
        green400: '#024B27',
        green500: '#003333',
        text50: '#BFBFD4',
        text100: '#242424',
        text200: '#1A1A1A',
        bddark: '#CECEDE',
        bdlight: '#EDEDF2',
      }
    },
  },
  plugins: [],
}