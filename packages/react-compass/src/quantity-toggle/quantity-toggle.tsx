import React, {InputHTMLAttributes} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  QuantityToggleVariantProps,
  StyledHelperText,
  StyledQuantityToggle,
} from './quantity-toggle.styles'

type InputHTMLAttributesProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
>
export interface NumberFormatOptions extends Intl.NumberFormatOptions {
  numberingSystem?: string
}
interface Props extends StyledComponentProps, InputHTMLAttributesProps {
  max?: number
  min?: number
  step?: number
  value?: number
  label?: string
  helperText?: string
  isErrored?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  placeholder?: string
  errorMessage?: string
  autoComplete?: string
  defaultValue?: number
  formatOptions?: {
    locale?: string
    options?: NumberFormatOptions
  }
  onChange?: (value: number) => void
}

export type QuantityToggleProps = Props & QuantityToggleVariantProps

const QuantityToggle = React.forwardRef<HTMLInputElement, QuantityToggleProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      value,
      step = 1,
      defaultValue,
      max = 999999999999999,
      min = -999999999999999,
      formatOptions = {},
      placeholder,
      onChange,
      label,
      isErrored = false,
      isDisabled = false,
      isRequired = false,
      ...rest
    } = props

    const format = React.useMemo(() => {
      return {
        locale: formatOptions?.locale ?? '',
        options: formatOptions?.options,
      }
    }, [formatOptions])
    const quantityToggleRef = useDOMRef<HTMLInputElement>(ref)

    //Main state
    const [trueValue, setTrueValue] = React.useState<number>(NaN)
    const [stringValue, setStringValue] = React.useState<string>('')
    const [isNumber, setIsNumber] = React.useState(false)

    //Callback
    const increase = () => {
      function add(v: number) {
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
      }
    }

    const decrease = () => {
      function subtract(v: number) {
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
      }
    }

    const formatDisplay = React.useMemo(() => {
      if (!isNaN(trueValue)) {
        if (isNumber) {
          return trueValue
        }
        if (format.options) {
          Intl.NumberFormat(format.locale, format.options).resolvedOptions()
          return Intl.NumberFormat(format.locale, format.options).format(
            trueValue,
          )
        }
        return trueValue
      }
      return ''
    }, [trueValue, format])

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsNumber(true)
      props.onFocus?.(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (isNaN(trueValue)) {
        setTrueValue(parseFloat(stringValue))
      }
      setIsNumber(false)
      props.onBlur?.(event)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        setStringValue(event.target.value)
      }
      setTrueValue(parseFloat(event.target.value))
    }

    React.useEffect(() => {
      if (!value && defaultValue) {
        setTrueValue(defaultValue)
        setStringValue(defaultValue.toString())
      }
      if (value != undefined) {
        setTrueValue(value)
        setStringValue(value.toString())
      }
    }, [value, defaultValue])

    React.useEffect(() => {
      if (!isNaN(+trueValue)) {
        onChange?.(+trueValue)
      }
    }, [trueValue])

    return (
      <StyledQuantityToggle
        css={css}
        isErrored={!!isErrored}
        isDisabled={!!isDisabled}
      >
        {label && (
          <label>
            {label}
            {isRequired && <span>*</span>}
          </label>
        )}
        <div role='group'>
          <button
            disabled={isDisabled}
            onClick={decrease}
            style={{borderRight: 'none', borderRadius: '4px 0 0 4px'}}
            type='button'
          >
            -
          </button>
          <input
            {...rest}
            value={formatDisplay}
            disabled={isDisabled}
            required={isRequired}
            ref={quantityToggleRef}
            placeholder={placeholder}
            type={isNumber ? 'number' : 'text'}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
          />
          <button
            disabled={isDisabled}
            onClick={increase}
            style={{
              borderLeft: 'none',
              borderRadius: '0 4px 4px 0',
            }}
            type='button'
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
