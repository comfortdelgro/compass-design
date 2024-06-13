import React, {CSSProperties} from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  title?: React.ReactNode
  css?: CSS
  className?: string
  description: string
  style?: CSSProperties
}

const FormLayoutExplaination = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {title, css = {}, className, description, ...htmlProps} = props

    const formExplainationRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={formExplainationRef}>
        <div
          {...htmlProps}
          ref={formExplainationRef}
          className={classNames(
            styles.formExplaination,
            className,
            'cdg-layout-form-explaination',
          )}
        >
          <div className='cdg-layout-form-explaination-title'>{title}</div>
          <div className='cdg-layout-form-explaination-description'>
            {description}
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default FormLayoutExplaination
