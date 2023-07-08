import Portal from '@mui/material/Portal'
import {AdContext} from 'components/common/AdManager'
import PropTypes from 'prop-types'
import * as React from 'react'

export default function AdGuest({classSelector = '.description', ...props}) {
  const ad = React.useContext(AdContext)

  if (!ad.element) {
    return null
  }

  return (
    <Portal
      container={() => {
        const element = document.querySelector(classSelector)

        if (ad.element === element) {
          element.classList.add('ad')
        } else {
          element.classList.remove('ad')
        }

        return ad.element
      }}
    >
      {props.children}
    </Portal>
  )
}

AdGuest.propTypes = {
  children: PropTypes.node,
  classSelector: PropTypes.string,
}
