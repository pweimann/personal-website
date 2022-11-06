import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'
import { colors } from '~/constants'

export const theme = createGlobalTheme(':root', {
  radius: {
    default: '4px'
  },
  transitions: {
    default: 'all 0.5s ease'
  },
  space: {
    xxs: '0.6rem',
    xs: '1.2rem',
    sm: '1.8rem',
    md: '2.4rem',
    lg: '3.6rem',
    xl: '4.8rem',
    xxl: '6.0rem'
  },
  fonts: {
    heading: 'Roboto, Helvetica, Arial, sans-serif',
    body: 'Roboto, Helvetica, Arial, sans-serif'
  },
  colors
})

globalStyle('*', {
  fontFamily: theme.fonts.body,
  fontSize: 'calc(10px + 0.15vw)',
  color: theme.colors.black,
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
})

globalStyle('p', {
  fontSize: '1.6rem',
  marginTop: theme.space.sm
  /** '@media': {
    [mediaQueries.tls]: {
      fontSize: '1.8rem'
    }
  } */
})

globalStyle('h1', {
  fontSize: 'calc(7rem + 1vw)'
})

globalStyle('h2', {
  fontSize: 'calc(3rem + 1vw)'
})
