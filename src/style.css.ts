import { createTheme, style } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    azuki: '#96514d',
    sakura: '#fef4f4'
  }
})

export const defaultStyle = style({
  backgroundColor: vars.color.sakura,
  color: vars.color.azuki
})