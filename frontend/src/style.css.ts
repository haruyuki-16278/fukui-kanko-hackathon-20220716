import { createTheme, style } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#28478a',
    secondary: '#0090c9',
    accent: '#376167',
    surface: '#ffffff',
    background: '#dfdfdf',
    border: '#b0c4de',
    disabled: '#bfbfbf'
  },
  constant: {
    headerHeight: '44px',
    footerHeight: '44px',
    pageHeight: 'calc(100% - 88px)'
  }
})

export const appStyle = style({
  height: vars.constant.pageHeight,
  width: '100%',
  background: vars.color.background
})

export const headerStyle = style({
  height: vars.constant.headerHeight,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${vars.color.border}`
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
  borderTop: `1px solid ${vars.color.border}`
})

export const footerItem = style({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black !important',
  fontSize: '10px',
  textDecoration: 'none'
})

export const footerIcon = style({
  height: 24,
  width: 24
})

export const flexCenter = style({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const activeStyle = style({
  color: vars.color.primary,
  fill: vars.color.primary,
  fontWeight: 'bold'
})

export const disabledStyle = style({
  color: vars.color.disabled,
  fill: vars.color.disabled,
  fontWeight: 'normal'
})
