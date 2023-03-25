import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  QuantityToggleVariantProps,
  StyledHelperText,
  StyledQuantityToggle,
} from './quantity-toggle.styles'

interface Props extends StyledComponentProps {
  label?: string
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  max?: number
  min?: number
  step?: number
  formatOptions?: {
    prefix?: string
    subfix?: string
    toFixed?: number
  }
  autoComplete?: string
  isErrored?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  placeholder?: string
  helperText?: string
  errorMessage?: string
}

export type QuantityToggleProps = Props & QuantityToggleVariantProps

const QuantityToggle = React.forwardRef<HTMLInputElement, QuantityToggleProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      value,
      step = 1,
      max = 999999999999999,
      min = -999999999999999,
      placeholder,
      onChange,
      isErrored,
      isDisabled,
    } = props

    const quantityToggleRef = useDOMRef<HTMLInputElement>(ref)

    //Main state
    const formatOptions = {
      prefix: props.formatOptions?.prefix ?? '',
      subfix: props.formatOptions?.subfix ?? '',
      toFixed: props.formatOptions?.toFixed,
    }
    const [cursorPos, setCursorPos] = React.useState<number | null>(0)
    const [preValue, setPrevValue] = React.useState<number | string>(value ?? 0)
    const [trueValue, setTrueValue] = React.useState<number | string>(
      value ?? 0,
    )
    const [prefix, setPrefix] = React.useState<string>(
      props.formatOptions?.prefix ?? '',
    )
    const [subfix, setSubfix] = React.useState<string>(
      props.formatOptions?.subfix ?? '',
    )

    //Callback
    const increase = () => {
      setTrueValue((v) => {
        v = Math.min(+v + step, max)
        return v
      })
      setPrevValue((v) => {
        v = Math.min(+v + step, max)
        return v
      })
    }

    const decrease = () => {
      setTrueValue((v) => {
        v = Math.max(+v - step, min)
        return v
      })
      setPrevValue((v) => {
        v = Math.max(+v - step, min)
        return v
      })
    }

    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const target = e.target as HTMLInputElement
      const curPos = target.selectionStart ?? target.value.length
      if (e.key === 'ArrowUp') increase()
      if (e.key === 'ArrowDown') decrease()
      if (e.key === 'Backspace')
        setTrueValue((v) => {
          v = `${v}`.slice(0, -1)
          return v
        })
      if (e.key === '.' && !trueValue.toString().includes('.') && curPos) {
        setTrueValue(
          (v) =>
            `${v.toString().slice(0, curPos)}${e.key}${v
              .toString()
              .slice(curPos)}`,
        )
      }
      if (Number.isInteger(+e.key)) {
        setTrueValue((v) => {
          const n = `${v.toString().slice(0, curPos)}${e.key}${v
            .toString()
            .slice(curPos)}`
          if (Number(n) >= max || Number(n) <= min) return v
          v = !v ? e.key : n
          return v
        })
        setCursorPos(curPos + 1)
      }
    }

    const handleFocus = () => {
      if (trueValue !== '') {
        setPrefix('')
        setSubfix('')
        setTrueValue(preValue)
      }
    }

    const handleBlur = () => {
      if (trueValue !== '') {
        setPrefix(formatOptions.prefix)
        setSubfix(formatOptions.subfix)
        setTrueValue((v) => {
          setPrevValue(v)
          return Number(v).toFixed(formatOptions.toFixed)
        })
      }
    }

    React.useEffect(() => {
      onChange?.(Number(preValue))
    }, [preValue])

    React.useEffect(() => {
      quantityToggleRef.current?.setSelectionRange(cursorPos, cursorPos)
    }, [trueValue])

    return (
      <StyledQuantityToggle
        css={css}
        isErrored={!!isErrored}
        isDisabled={!!isDisabled}
      >
        {props.label && (
          <label>
            {props.label}
            {props.isRequired && <span>*</span>}
          </label>
        )}
        <div role='group'>
          <button
            onClick={decrease}
            style={{borderRight: 'none', borderRadius: '4px 0 0 4px'}}
          >
            -
          </button>
          <input
            disabled={isDisabled}
            type='text'
            value={
              trueValue !== '' ? `${prefix}${trueValue}${subfix}` : undefined
            }
            onKeyDown={handleKeydown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            ref={quantityToggleRef}
          />
          <button
            onClick={increase}
            style={{
              borderLeft: 'none',
              borderRadius: '0 4px 4px 0',
            }}
          >
            +
          </button>
        </div>
        {isErrored && props.errorMessage && (
          <StyledHelperText error>{props.errorMessage}</StyledHelperText>
        )}
        {props.helperText ? (
          <StyledHelperText>{props.helperText}</StyledHelperText>
        ) : null}
      </StyledQuantityToggle>
    )
  },
)

export default QuantityToggle
