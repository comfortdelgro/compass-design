import React, {KeyboardEvent} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/tag-box.module.css'

interface Props {
  wrapperRef: React.RefObject<HTMLDivElement>
  onEnter: (value: string) => void
}

const TagBoxInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    wrapperRef,
    onEnter = () => {
      // do nothing
    },
    ...htmlProps
  } = props

  const tagBoxInputRef = useDOMRef<HTMLInputElement>(ref)

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (wrapperRef.current) {
      const string = e.target.value
      if (string !== '') {
        const fakeEle = document.createElement('div')
        fakeEle.style.position = 'absolute'
        fakeEle.style.top = '0'
        fakeEle.style.left = '-9999px'
        fakeEle.style.overflow = 'hidden'
        fakeEle.style.visibility = 'hidden'
        fakeEle.style.whiteSpace = 'nowrap'
        fakeEle.style.fontSize = '0.875rem'
        fakeEle.style.fontWeight = '400'
        fakeEle.style.lineHeight = '1.15'
        fakeEle.style.height = '0'
        fakeEle.style.width = 'fit-content'
        fakeEle.style.maxWidth = `${wrapperRef.current.clientWidth - 62}px`
        fakeEle.innerHTML = string.replace(/\s/g, '&' + 'nbsp;')
        document.body.appendChild(fakeEle)
        e.target.focus()
        e.target.style.width = `${fakeEle.clientWidth + 4}px`
        fakeEle.remove()
      } else {
        e.target.style.width = `4px`
      }
    }
  }

  return (
    <input
      {...htmlProps}
      type='text'
      ref={tagBoxInputRef}
      className={`${styles.bodyContentInput} cdg-tag-box-input`}
      onChange={onInputChange}
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value
        if (value !== '' && e.key === 'Enter') {
          onEnter(value)
          if (tagBoxInputRef.current) {
            tagBoxInputRef.current.value = ''
            tagBoxInputRef.current.style.width = `4px`
          }
        }
      }}
    />
  )
})

export default TagBoxInput
