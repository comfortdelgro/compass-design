import {Icon, Toast, useColors} from '@comfortdelgro/react-compass-old'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
interface Props {
  component: React.ReactNode
  name: string
}

const IconBox: React.FC<Props> = ({name, component}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const theme = useColors()
  const formatedName = React.useMemo(
    () =>
      name
        .replace(/\.?([A-Z])/g, function (x, y) {
          return '-' + y.toLowerCase()
        })
        .replace(/^-/, ''),
    [name],
  )
  return (
    <div
      className='scale'
      style={{
        width: '6rem',
        padding: '0.5rem',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        fontWeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'copy',
        flexShrink: 0,
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        color: theme.primaryText,
      }}
      onClick={() => {
        navigator && navigator.clipboard.writeText(formatedName)
        setIsOpen(true)
      }}
    >
      <div>{component}</div>
      <div
        style={{
          wordBreak: 'break-all',
          textAlign: 'center',
        }}
      >
        {name}
      </div>
      {isOpen && (
        <Toast
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          autoClose={2000}
          portalTo={document.body}
          color='informative'
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <Toast.Title>Copied Successfully</Toast.Title>
          <Toast.CloseIcon>
            <Icon icon={faXmark} />
          </Toast.CloseIcon>
          <Toast.Message>Copied to clipboard: {formatedName}</Toast.Message>
        </Toast>
      )}
    </div>
  )
}

export default IconBox
