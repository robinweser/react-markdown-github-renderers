import React from 'react'

const style = {
  marginTop: 4,
  lineHeight: 1.5,
}

export default function ListItem({ children }) {
  return <li style={style}>{children}</li>
}
