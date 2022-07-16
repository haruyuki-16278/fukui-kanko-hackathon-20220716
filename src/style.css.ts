import { createTheme, style } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#28478a',
    secondary: '#0090c9',
    accent: '#376167',
    background: '#ffffff'
  },
  constant: {
    headerHeight: '40px',
    footerHeight: '40px'
  }
})

export const appStyle = style({
  height: 'calc(100% - 80px)',
  width: '100%',
  background: vars.color.background
})

export const headerStyle = style({
  height: vars.constant.headerHeight,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '1px solid gray'
})

export const headerItem = style({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.primary,
  fontWeight: 'bold',
  fontSize: '32px'
})

export const footerStyle = style({
  height: vars.constant.footerHeight,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid gray'
})

export const footerItem = style({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black !important',
  fontWeight: 'bold',
  textDecoration: 'none'
})

export const flexCenter = style({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
