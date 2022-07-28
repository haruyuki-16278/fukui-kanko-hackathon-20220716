import { style } from '@vanilla-extract/css'
import { vars } from '../../style.css'

export const mapPageStyle = style({
  height: '100%',
  width: '100%',
  backgroundColor: vars.color.surface
})

export const mapStyle = style({
  height: '100vw',
  width: '100%',
  borderBottom: `1px solid ${vars.color.border}`
})
