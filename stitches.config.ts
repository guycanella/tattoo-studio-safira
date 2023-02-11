import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      yellowLogo: '#A86B01',
      blackBg: '#2E2E2E',
    },
  },
  media: {
    xs: '(min-width: 320px)',
    sm: '(min-width: 375px)',
    md: '(min-width: 425px)',
    tb: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1366px)',
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: number) => ({ marginTop: value, marginBottom: value }),
    paddinX: (value: number) => ({ paddingLeft: value, paddingRight: value }),
    paddinY: (value: number) => ({ paddingTop: value, paddingBottom: value }),
  },
})