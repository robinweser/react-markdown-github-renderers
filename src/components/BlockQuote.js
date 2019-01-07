import React, { Fragment } from 'react'

const className = 'react-github-markdown-renderers_blockquote'
const css = `.${className}[style] & p{margin-bottom:0!important}`
const style = {
  borderLeft: '4px solid rgb(223, 226, 229)',
  padding: '0 16px',
  marginBottom: 16,
  color: 'rgb(106, 115, 125)',
}

export default function BlockQuote({ children }) {
  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <blockquote className={className} style={style}>
        {children}
      </blockquote>
    </Fragment>
  )
}
