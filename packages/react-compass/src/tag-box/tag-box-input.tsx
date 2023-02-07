import React, {KeyboardEvent} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props extends StyledComponentProps {
  onEnter: (value: string) => void
}

const TagBoxInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const tagBoxInputRef = useDOMRef<HTMLInputElement>(ref)
  return (
    <input
      ref={tagBoxInputRef}
      type='text'
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLTextAreaElement).value
        if (value !== '' && e.key === 'Enter') {
          props.onEnter(value)
          if (tagBoxInputRef.current) tagBoxInputRef.current.value = ''
        }
      }}
    />
  )
})

export default TagBoxInput
