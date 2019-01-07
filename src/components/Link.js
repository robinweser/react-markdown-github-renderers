import React, { Fragment } from 'react'

const className = 'react-github-markdown-renderers_a'
const css = `.${className}[style]:hover{text-decoration:underline!important}`
const style = {
  color: '#0366d6',
  textDecoration: 'none',
}

export default function Link({ href, children }) {
  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a href={href} className={className} style={style}>
        {children}
      </a>
    </Fragment>
  )
}
