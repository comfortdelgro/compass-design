import {RefObject, useRef} from 'react'
import styles from '../styles/slider.module.css'
import {SliderThumbBaseProps, SliderState} from '../utils/types'
import {useSliderThumb} from '../utils/useSliderThumb'

interface SliderThumbProps extends SliderThumbBaseProps {
  trackRef: RefObject<HTMLElement>
  inputRef?: RefObject<HTMLInputElement>
  state: SliderState
}

export function SliderThumb(props: SliderThumbProps) {
  let {inputRef} = props
  const backupRef = useRef<HTMLInputElement>()
  inputRef = inputRef || backupRef

  const {thumbProps, inputProps, isDragging} = useSliderThumb(
    {
      ...props,
      inputRef,
    },
    props.state,
  )

  const rootClasses = [
    styles.thumb,
    props.state.tooltip && `${styles.thumbShowToolip} cdg-slider-thumb-tooltips`,
    props.state.tooltip && isDragging && styles.thumbIsDragging,
    props.state.orientation === 'vertical' && styles.thumbVertical,
    props.state.isDisabled && styles.thumbIsDisabled,
    'cdg-slider-thumb',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      {...thumbProps}
      tabIndex={0}
      role='presentation'
      className={rootClasses}
      data-value={inputProps.value}
    >
      <input className={styles.thumbInput} ref={inputRef} {...inputProps} />
    </div>
  )
}
