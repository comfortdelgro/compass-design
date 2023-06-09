import React, {KeyboardEvent} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props extends StyledComponentProps {
  onEnter: (value: string) => void
  onFocus: () => void
  onBlur: () => void
}

const TagBoxInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    // StyledComponentProps
    // css = {},
    // children,
    onEnter = () => {
      // do nothing
    },
    onFocus = () => {
      // do nothing
    },
    onBlur = () => {
      // do nothing
    },
    ...delegated
  } = props

  const tagBoxInputRef = useDOMRef<HTMLInputElement>(ref)

  return (
    <input
      ref={tagBoxInputRef}
      type='text'
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value
        if (value !== '' && e.key === 'Enter') {
          onEnter(value)
          if (tagBoxInputRef.current) tagBoxInputRef.current.value = ''
        }
      }}
      {...delegated}
    />
  )
})

export default TagBoxInput
