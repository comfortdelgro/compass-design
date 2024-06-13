import {RefObject, useRef} from 'react'
import {classNames} from '../../utils/string'
import styles from '../styles/slider.module.css'
import {SliderState, SliderThumbBaseProps} from '../utils/types'
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

  const rootClasses = classNames(
    styles.thumb,
    props.state.tooltip &&
      `${styles.thumbShowToolip} cdg-slider-thumb-tooltips`,
    props.state.tooltip && isDragging && styles.thumbIsDragging,
    props.state.orientation === 'vertical' && styles.thumbVertical,
    props.state.isDisabled && styles.thumbIsDisabled,
    'cdg-slider-thumb',
  )

  return (
    <div
      {...thumbProps}
      tabIndex={0}
      role='presentation'
      className={rootClasses}
      data-value={inputProps.value}
    >
      <input
        {...inputProps}
        ref={inputRef}
        className={classNames(styles.thumbInput, 'cdg-slider-thumb-input')}
      />
    </div>
  )
}
