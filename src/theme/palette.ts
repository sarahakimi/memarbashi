export const palette = {
// base
  base: {
    white: '#ffffff',
    black: '#000000',
  },
// grey ramp (from your screenshot)
  grey: {
    50: '#eaeaea',
    100: '#bfbfbf',
    200: '#a0a0a0',
    300: '#757575',
    400: '#5a5a5a',
    500: '#313131',
    600: '#2d2d2d',
    700: '#232323',
    800: '#1b1b1b',
    900: '#151515',
    950: '#0e0e0e', // convenience for inverse
  },
// blue ramp
  blue: {
    50: '#ecf5fe',
    100: '#c3e0fc',
    200: '#a5d1fb',
    300: '#7cbdf9',
    400: '#63b0f8',
    500: '#3c9cf6',
    600: '#378ee0',
    700: '#2b6faf',
    800: '#215887',
    900: '#194267',
  },

  // green ramp (approx from screenshot values)
  green: {
    50: '#e9f9ef',
    100: '#bae8cd',
    200: '#99d9b2',
    300: '#6bd893',
    400: '#4ed77e',
    500: '#22c55e',
    600: '#17b356',
    700: '#188c43',
    800: '#136c34',
    900: '#0e5327',
  },
// red ramp
  red: {
    50: '#fae7e9',
    100: '#f1b5b5',
    200: '#ea9191',
    300: '#e05f5f',
    400: '#da4040',
    500: '#df1010',
    600: '#be0f0f',
    700: '#940b0b',
    800: '#730909',
    900: '#580707',
  },
// yellow / orange / brown (from screenshots; tweak as needed)
  yellow: {50: '#fff7d0',
    100: '#fee8b0',
    200: '#fdd98c',
    300: '#fcca62',
    400: '#fbbd3a',
    500: '#f4b72a',
    600: '#e39f1e',
    700: '#b27a15',
    800: '#8a5e11',
    900: '#65450d',
  },

  orange: {
    50: '#fff9f0',
    100: '#fee8d0',
    200: '#fdd1a3',
    300: '#fccb6a',
    400: '#fbc086',
    500: '#fbb568',
    600: '#e4ad5f',
    700: '#b2874a',
    800: '#8a6939',
    900: '#69502c',
  },

  brown: {
    50: '#f5f5ef',
    100: '#ebe6ce',
    200: '#ded2b6',
    300: '#d3b58b',
    400: '#cbb181',
    500: '#beb561',
    600: '#ad9058',
    700: '#877045',
    800: '#695735',
    900: '#504229',
  },


// midnight (dark ramp)
  midnight: {
    50: '#e9eaeb',
    100: '#babdc0',
    200: '#999da2',
    300: '#6a7077',
    400: '#4d545d',
    500: '#212934',
    600: '#1e252f',
    700: '#171d25',
    800: '#12171d',
    900: '#0e1116',
  },


// secondary (rose-ish from screenshot)
  secondary: {
    50: '#ffe6ef',
    100: '#ffcfcf',
    200: '#ffb7b7',
    300: '#ff9686',
    400: '#ff8282',
    500: '#ff6363',
    600: '#e85a5a',
    700: '#b56446',
    800: '#8c3636',
    900: '#6b2a2a',
  },

  creame: {
    50: '#fef4f5',
    100: '#fcfaf8',
    200: '#faf1e8',
    300: '#f1f4f0',
    400: '#f6f2ed',
    500: '#f4efe9',
    600: '#ded9d4',
    700: '#acaead',
    800: '#b6b380',
    900: '#6b6462',
  },
  } as const;


export type Palette = typeof palette;
