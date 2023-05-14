import React, {InputHTMLAttributes} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  QuantityToggleVariantProps,
  StyledHelperText,
  StyledQuantityToggle,
} from './quantity-toggle.styles'
import {AriaNumberFieldProps} from './utils/types'
import useNumberField from './utils/useNumberField'
import useNumberFieldState from './utils/useNumberFieldState'

<<<<<<< HEAD
type InputHTMLAttributesProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
>

interface Props extends StyledComponentProps, InputHTMLAttributesProps {
  label?: string
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  max?: number
  min?: number
  step?: number
  formatOptions?: {
    prefix?: string
    suffix?: string
    toFixed?: number
  }
  autoComplete?: string
=======
interface Props extends AriaNumberFieldProps, StyledComponentProps {
  helperText?: string
>>>>>>> origin
  isErrored?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  placeholder?: string
  errorMessage?: string
  disableScroll?: boolean
  onUpdate?: (
    value: string | number | readonly string[] | undefined,
    number: number,
  ) => void
}

export type QuantityToggleProps = Props & QuantityToggleVariantProps

const QuantityToggle = React.forwardRef<HTMLInputElement, QuantityToggleProps>(
  (props, ref) => {
    const {
      css = {},
<<<<<<< HEAD
      value,
      step = 1,
      max = 999999999999999,
      min = -999999999999999,
      formatOptions = {},
      placeholder,
      onChange,
      isErrored,
      isDisabled,
      ...rest
    } = props

    const format = React.useMemo(() => {
      return {
        prefix: formatOptions?.prefix ?? '',
        suffix: formatOptions?.suffix ?? '',
        toFixed: formatOptions?.toFixed,
      }
    }, [formatOptions])
    const quantityToggleRef = useDOMRef<HTMLInputElement>(ref)

    //Main state
    const [cursorPos, setCursorPos] = React.useState<number | null>(
      value?.toString().length ?? 1,
    )
    const [preValue, setPrevValue] = React.useState<Value>(value ?? 0)
    const [trueValue, setTrueValue] = React.useState<Value>(value ?? 0)
    const [prefix, setPrefix] = React.useState(formatOptions?.prefix ?? '')
    const [suffix, setSuffix] = React.useState(formatOptions?.suffix ?? '')

    //Callback
    const increase = () => {
      function add(v: Value) {
        if (v.toString().includes('.')) {
          const n = Number.parseFloat(v.toString()) + step
          v = Math.min(Number.parseFloat(n.toFixed(15)), max)
        } else {
          v = Math.min(Number(v) + step, max)
        }
        return v
      }

      if (!Number.isNaN(trueValue)) {
        setTrueValue((v) => add(v))
        setPrevValue((v) => add(v))
      }
    }

    const decrease = () => {
      function subtract(v: Value) {
        if (v.toString().includes('.')) {
          const n = Number.parseFloat(v.toString()) - step
          v = Math.max(Number.parseFloat(n.toFixed(15)), min)
        } else {
          v = Math.max(Number(v) - step, min)
        }
        return v
      }
      if (!Number.isNaN(trueValue)) {
        setTrueValue((v) => subtract(v))
        setPrevValue((v) => subtract(v))
      }
    }

    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      const target = e.target as HTMLInputElement
      const curPos = target.selectionStart ?? target.value.length
      if (e.key === 'ArrowLeft') setCursorPos(Math.max(curPos - 1, 0))
      if (e.key === 'ArrowRight')
        setCursorPos(Math.min(curPos + 1, target.value.length))
      if (e.key === 'ArrowUp') increase()
      if (e.key === 'ArrowDown') decrease()
      if (e.key === 'Backspace') {
        setTrueValue((v) => {
          if (v.toString().length === 1) {
            v = ''
          } else {
            v =
              `${trueValue}`.slice(0, Math.max(curPos - 1, 0)) +
              `${trueValue}`.slice(curPos)
          }
          return v
        })
        setCursorPos(curPos === 1 ? 1 : curPos - 1)
      }

      if (
        e.key === '-' &&
        !trueValue.toString().includes('-') &&
        (curPos === 0 || trueValue === 0)
      ) {
        setTrueValue((v) => (trueValue === 0 ? '-' : `-${v}`))
        setCursorPos(curPos + 1)
      }

      if (e.key === '.' && !trueValue.toString().includes('.')) {
        setTrueValue((v) => {
          return `${v.toString().slice(0, curPos)}.${v
            .toString()
            .slice(curPos)}`
        })
        setCursorPos(curPos + 1)
      }

      if (Number.isInteger(+e.key)) {
        setTrueValue((v) => {
          const n = `${v.toString().slice(0, curPos)}${e.key}${v
            .toString()
            .slice(curPos)}`
          if (Number(n) <= max && Number(n) >= min) v = !v ? e.key : n
          return v
        })
        setCursorPos(curPos + 1)
      }
    }

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (trueValue !== '') {
        setPrefix('')
        setSuffix('')
        setTrueValue(preValue)
      }
      props.onFocus?.(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (trueValue !== '') {
        setPrefix(format.prefix)
        setSuffix(format.suffix)
        if (format.toFixed) {
          setPrevValue(trueValue)
          setTrueValue((v) => Number(v).toFixed(format.toFixed))
        }
      }
      props.onBlur?.(event)
    }
=======
      isErrored = false,
      id = `cdg-element-${Math.random().toString(36).substring(2)}`,
      onUpdate,
      ...ariaSafeProps
    } = props

    const quantityToggleRef = useDOMRef<HTMLInputElement>(ref)

    const state = useNumberFieldState(ariaSafeProps)
    const {inputProps, incrementButtonProps, decrementButtonProps} =
      useNumberField(props, state, quantityToggleRef)
>>>>>>> origin

    React.useEffect(() => {
      onUpdate?.(state.inputValue, state.numberValue)
    }, [state.numberValue, state.inputValue])

    return (
      <StyledQuantityToggle
        css={css}
        isErrored={!!isErrored}
        isDisabled={!!inputProps.disabled}
      >
        {props.label && (
          <label htmlFor={id}>
            {props.label}
            {props.isRequired && <span>*</span>}
          </label>
        )}
<<<<<<< HEAD
        <div role='group'>
          <button
            disabled={isDisabled}
            onClick={decrease}
            style={{borderRight: 'none', borderRadius: '4px 0 0 4px'}}
          >
            -
          </button>
          <input
            {...rest}
            disabled={isDisabled}
            required={props.isRequired}
            type='text'
            value={trueValue !== '' ? `${prefix}${trueValue}${suffix}` : ''}
            onKeyDown={handleKeydown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            ref={quantityToggleRef}
          />
          <button
            disabled={isDisabled}
            onClick={increase}
            style={{
              borderLeft: 'none',
              borderRadius: '0 4px 4px 0',
            }}
          >
            +
          </button>
=======
        <div>
          <button {...decrementButtonProps}>-</button>
          <input {...inputProps} id={id} ref={quantityToggleRef} />
          <button {...incrementButtonProps}>+</button>
>>>>>>> origin
        </div>
        {isErrored && props.errorMessage && (
          <StyledHelperText error>{props.errorMessage}</StyledHelperText>
        )}
        {props.helperText && (
          <StyledHelperText>{props.helperText}</StyledHelperText>
        )}
      </StyledQuantityToggle>
    )
  },
)

export default QuantityToggle
