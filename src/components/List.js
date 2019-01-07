import React, { createElement, Fragment } from 'react'

const className = 'react-github-markdown-renderers_list'
const css = `.${className}[style] ul{margin-bottom: 0!important}`
const style = {
  paddingLeft: 24,
  marginBottom: 16,
}

export default function List({ ordered, children }) {
  const list = createElement(
    ordered ? 'ol' : 'ul',
    {
      style,
      className,
    },
    children
  )

  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {list}
    </Fragment>
  )
}
