import React from 'react'
import PropTypes from 'prop-types'

function ButtonLink({ className, href, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

ButtonLink.prototypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ButtonLink
