import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import {Item} from './components/Item'
import {Line} from './components/Line'
import {Title} from './components/Title'
import WizardItem from './item'
import styles from './styles/wizard.module.css'
import {pickChilds} from './utils'

interface Props {
  css?: CSS
  items?: string[]
  currentStep?: number
  erroredSteps?: number[]
  children?: React.ReactNode
  onStepClick?: (index: number) => void
}

export type WizardProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Wizard = React.forwardRef<HTMLDivElement, WizardProps>((props, ref) => {
  const {
    css = {},
    children,
    items = [],
    currentStep = 1,
    erroredSteps = [],
    onStepClick,
    ...htmlProps
  } = props

  const wizardRef = useDOMRef<HTMLDivElement>(ref)

  const collection = React.useMemo(
    () => pickChilds(children, WizardItem),
    [children],
  )

  const isControlled = !!children
  const itemWidth = isControlled ? collection?.length : items?.length ?? 0
  const list = isControlled ? collection : items

  return (
    <CssInjection css={css}>
      <div
        ref={wizardRef}
        className={`${styles.wizard} cdg-wizard`}
        {...htmlProps}
      >
        <div className={`${styles.track} cdg-wizard-track`}>
          {list.map((item, index: number) => (
            <div
              key={`${isControlled ? item.props.title : item}-${index}`}
              className={`${styles.trackItem} cdg-wizard-track-item`}
              style={{width: `calc(100% / ${itemWidth})`}}
            >
              <Line
                side='left'
                bordered={index === 0}
                active={currentStep > index + 1 || index + 1 === currentStep}
                error={!!erroredSteps.includes(index + 1)}
              />
              {isControlled ? (
                item
              ) : (
                <Item
                  onKeyDown={(event) => {
                    const key = event.key
                    if (key === 'Enter' || key === ' ') {
                      onStepClick?.(index + 1)
                    }
                  }}
                  onClick={() => onStepClick?.(index + 1)}
                  error={!!erroredSteps.includes(index + 1)}
                  style={{cursor: onStepClick ? 'pointer' : ''}}
                  active={currentStep > index + 1 || index + 1 === currentStep}
                >
                  {currentStep > index + 1 ? (
                    <svg width='10' height='8' viewBox='0 0 10 8'>
                      <path
                        d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'
                        fill='currentColor'
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </Item>
              )}
              <Line
                side='right'
                bordered={index === collection.length - 1}
                active={currentStep > index + 1}
                error={!!erroredSteps.includes(index + 1)}
              />
            </div>
          ))}
        </div>
        <div className={`${styles.title}`}>
          {list.map((item, index: number) => (
            <Title
              key={index}
              style={{width: `calc(100% / ${itemWidth})`}}
              active={currentStep > index + 1 || index + 1 === currentStep}
            >
              {isControlled ? item.props.title : item}
            </Title>
          ))}
        </div>
      </div>
    </CssInjection>
  )
})

export default Wizard
