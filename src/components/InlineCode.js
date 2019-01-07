import React from 'react'

const style = {
  backgroundColor: 'rgb(240, 242, 244)',
  padding: '4px 6px',
  fontFamily: 'Dank Mono, Hack, Fira Code, monospace',
  textRendering: 'optimizeLegibility',
}

export default function InlineCode({ children }) {
  return <code style={style}>{children}</code>
}
