import React, {KeyboardEvent} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledItem} from './tag-box.styles'

interface Props {
  isDisabled: boolean
  isError: boolean
  icon: React.ReactNode
  value: string
  id: string | number
  wrapperRef: React.RefObject<HTMLDivElement>
  onRemove: ((index: string | number) => void) | undefined
  onEdit: ((index: string | number, value: string) => void) | undefined
}

const TagBoxItem = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    isDisabled = false,
    isError,
    icon,
    value,
    id,
    wrapperRef,
    onRemove,
    onEdit,
    ...delegated
  } = props
  const [editable, setEditable] = React.useState(false)
  const [inputValue, setInputValue] = React.useState(value)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const tagItemRef = useDOMRef<HTMLDivElement>(ref)

  const onValueClick = () => {
    if (!isDisabled) {
      setEditable(true)
      setTimeout(() => {
        inputRef?.current?.focus()
      })
    }
  }

  const caculateWidth = (string: string, callback: (w: number) => void) => {
    const fakeEle = document.createElement('div')
    fakeEle.style.position = 'absolute'
    fakeEle.style.top = '0'
    fakeEle.style.left = '-9999px'
    fakeEle.style.overflow = 'hidden'
    fakeEle.style.visibility = 'hidden'
    fakeEle.style.whiteSpace = 'nowrap'
    fakeEle.style.height = '0'
    fakeEle.style.width = 'fit-content'
    fakeEle.style.fontSize = '12px'
    fakeEle.style.fontWeight = '600'
    fakeEle.style.maxWidth = `${wrapperRef.current!.clientWidth - 62}px`
    fakeEle.innerHTML = string.replace(/\s/g, '&' + 'nbsp;')
    document.body.appendChild(fakeEle)
    callback(fakeEle.clientWidth)
    fakeEle.remove()
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const string = e.target.value
    setInputValue(string)
    if (string !== '') {
      caculateWidth(string, (w: number) => {
        e.target.focus()
        e.target.style.width = `${w + 4}px`
      })
    } else {
      e.target.style.width = `4px`
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    if (value !== '' && e.key === 'Enter') {
      onEdit?.(id, value)

      inputRef?.current?.blur()
    }
    if (e.key == 'Escape' || e.keyCode == 27) {
      onBlur()
    }
  }

  React.useEffect(() => {
    const string = value
    if (string !== '') {
      caculateWidth(string, (w: number) => {
        if (inputRef.current) {
          inputRef.current.focus()
          inputRef.current.style.width = `${w + 4}px`
          inputRef.current.style.maxWidth = `${
            wrapperRef.current!.clientWidth - 62
          }px`
        }
      })
    }
  }, [value])

  const onBlur = () => {
    setInputValue(value)
    setEditable(false)
    caculateWidth(value, (w: number) => {
      if (inputRef.current) inputRef.current.style.width = `${w + 4}px`
    })
  }

  return (
    <StyledItem
      isDisabled={isDisabled}
      isError={isError}
      ref={tagItemRef}
      {...delegated}
    >
      {icon}
      <input
        ref={inputRef}
        value={inputValue}
        onKeyDown={onKeyDown}
        onClick={onValueClick}
        onChange={onInputChange}
        onBlur={onBlur}
        style={{display: editable ? 'block' : 'none'}}
      />
      <span
        onClick={onValueClick}
        style={{
          display: !editable ? 'block' : 'none',
          cursor: isDisabled ? 'not-allowed' : 'text',
        }}
      >
        {value}
      </span>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        <Xmark onClick={() => onRemove?.(id)} isDisabled={isDisabled} />
      </span>
    </StyledItem>
  )
})

const Xmark = ({...rest}) => (
  <svg {...rest} width='12' height='12' viewBox='0 0 12 12' fill='none'>
    <path
      d='M10.9408 9.45858C11.3509 9.8687 11.3509 10.5331 10.9408 10.9432C10.7373 11.1483 10.4683 11.25 10.1993 11.25C9.93022 11.25 9.66183 11.1475 9.4571 10.9424L5.99959 7.4867L2.54241 10.9416C2.33734 11.1483 2.06863 11.25 1.79992 11.25C1.5312 11.25 1.26282 11.1483 1.05759 10.9416C0.647469 10.5315 0.647469 9.86706 1.05759 9.45694L4.51576 5.99877L1.05759 2.54224C0.647469 2.13212 0.647469 1.46772 1.05759 1.05759C1.46772 0.647469 2.13212 0.647469 2.54224 1.05759L5.99959 4.5174L9.45776 1.05923C9.86788 0.64911 10.5323 0.64911 10.9424 1.05923C11.3525 1.46936 11.3525 2.13376 10.9424 2.54388L7.48424 6.00205L10.9408 9.45858Z'
      fill='#201F1E'
    />
  </svg>
)

export default TagBoxItem
