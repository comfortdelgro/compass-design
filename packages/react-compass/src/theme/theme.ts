import type {StitchesTheme} from '../utils/stitches.types'

const defineTheme = <T extends StitchesTheme>(theme: T) => theme

const spacings = {
  '0_5': '0.125rem', // 2px
  1: '0.25rem', // 4px
  '1_5': '0.375rem', // 6px
  2: '0.5rem', // 8px
  '2_5': '0.625rem', // 10px
  3: '0.75rem', // 12px
  '3_25': '0.8125rem', //13px
  '3_5': '0.875rem', // 14px
  4: '1rem', // 16px
  '4_25': '1.0625rem', //17px
  '4_5': '1.125rem', //18px
  5: '1.25rem', // 20px
  '5_25': '1.3125rem', //21px
  '5_5': '1.375rem', //22px
  6: '1.5rem', // 24px
  '6_5': '1.625rem', //26px
  7: '1.75rem', // 28px
  '7_5': '1.875rem', //30px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  '9_25': '2.3125rem', //37px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  '12_5': '3.125rem', // 50px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  18: '4.5rem', // 72px
  20: '5rem', // 80px
  22: '5.5rem', // 88px
  21: '5.25rem', //84px
  24: '6rem', // 96px
  '24_5': '6.125rem', //98px
  26: '6.5rem', // 104px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  39: '9.75rem', //156
  '39_25': '9.8125rem', //157px
  40: '10rem', // 160px
  44: '11rem', // 176px
  46: '11.5rem', //184
  48: '12rem', // 192px
  50: '12.5rem', // 200px
  52: '13rem', // 208px
  56: '14rem', // 224px
  57: '14.25rem', // 228px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 288px
  75: '18.75rem', //300px
  80: '20rem', // 320px
  '81_75': '20.4375rem', //327px
  88: '22rem', //352px
  96: '24rem', // 384px
  '103_25': '25.8125rem', //413px
  '108_25': '27.0625rem', // 433px
  110: '27.5rem', //440px
  120: '30rem', //480px
  '131_5': '32.875rem', // 526px
  160: '40rem', //640 rem
  '110_5': '27.625rem', //442px
  125: '31.25rem', //500px
  '127_25': '31.8125rem', //509px
  128: '32rem', // 512px
  138: '34.5rem', //552px
  181: '45.25rem', //724px
  200: '50rem', //800px
  206: '51.5rem', //824px
  269: '67.25rem', //1076px
  328: '82rem', // 1312px
} as const

export default defineTheme({
  fonts: {
    sans: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: {
    display1: '3.5rem',
    display2: '3rem',
    display3: '2.5rem',

    header0: '2.5rem',
    header1: '2rem',
    header2: '1.75rem',
    header3: '1.5rem',
    header4: '1.25rem',
    header5: '1rem',

    body1: '1.25rem',
    body2: '1rem',
    body3: '0.875rem',

    label1: '0.875rem',
    label2: '0.75rem',
    label3: '0.625rem',
  },
  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  colors: {
    // Primary

    cdgBlue: '$cdgBlue100',
    typeHeading: '$gray100',
    background: '#FFFFFF',
    black: '#323130',

    primaryText: '$gray100',
    secondaryText: '$gray80',
    disabledText: '$gray70',
    whiteText: '#FFFFFF',

    divider: '$gray30',
    border: '#8A8886',
    activeBorder: '$gray100',

    // Secondary

    infoBg: '#E3F3FF',
    info: '#0078D4',

    dangerBg: '#EFD9DB',
    danger: '#A4262C',

    successBg: '#D1E8CF',
    success: '#107C10',

    severeWarningBg: '#F0CBBE',
    severeWarning: '#D83B01',

    warningBg: '#F1E6C0',
    warning: '#835C00',

    // Shades and Tints

    cdgBlue10: '#E6ECF7',
    cdgBlue20: '#CCD9EF',
    cdgBlue40: '#99B3DF',
    cdgBlue60: '#678ECF',
    cdgBlue80: '#3468BF',
    cdgBlue100: '#0142AF',
    cdgBlue120: '#012158',
    cdgBlue140: '#001232',

    overlayLight: 'rgba(255, 255, 255, 0.4)',
    overlayDark: 'rgba(0, 0, 0, 0.4)',

    gray10: '#FAF9F8',
    gray20: '#F3F2F1',
    gray30: '#EDEBE9',
    gray40: '#E1DFDD',
    gray50: '#D2D0CE',
    gray60: '#C8C6C4',
    gray70: '#A19F9D',
    gray80: '#605E5C',
    gray90: '#3A3B39',
    gray100: '#323130',
    gray110: '#201F1E',

    primaryBg: '#F5F5F6',
    secondaryBg: '#F0F0F0',
    darkerBg: '#EAEBEB',
  },
  borderWidths: {
    light: '1px',
    medium: '2px',
    thick: '3px',
  },
  radii: {
    md: '4px',
    lg: '8px',
    xl: '16px',
    full: '9999px',
  },
  space: spacings,
  sizes: spacings,
  transitions: {
    default: 'all 250ms ease',
    button:
      'background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s',
  },
} as const)
