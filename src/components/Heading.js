import React, { createElement } from 'react'

const style = level => ({
  marginTop: 8,
  marginBottom: 16,
  lineHeight: 1.25,
  paddingBottom: 2,
  fontWeight: 500,
  borderBottom: level < 3 ? '1px solid rgb(240, 240, 240)' : 0,
})

export default function Heading({ level, children }) {
  return createElement(
    'h' + level,
    {
      style: style(level),
    },
    children
  )
}
