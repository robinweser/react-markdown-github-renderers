import React from 'react'

const style = {
  marginBottom: 16,
  lineHeight: 1.5,
}

export default function Paragraph({ children }) {
  return <p style={style}>{children}</p>
}
