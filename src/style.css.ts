import { createTheme, style } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    primary: '',
    secondary: '',
    accent: '',
    background: ''
  },
  constant: {
    headerHeight: '40px',
    footerHeight: '40px'
  }
})

export const appStyle = style({
  height: 'calc(100% - 80px)',
  width: '100%'
})

export const headerStyle = style({
  height: vars.constant.headerHeight,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '1px solid gray'
})

export const footerStyle = style({
  height: vars.constant.footerHeight,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid gray'
})

export const flexCenter = style({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})