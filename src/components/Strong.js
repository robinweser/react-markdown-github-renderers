import React from 'react'

const style = {
  fontWeight: 600,
}

export default function Strong({ children }) {
  return <strong style={style}>{children}</strong>
}
