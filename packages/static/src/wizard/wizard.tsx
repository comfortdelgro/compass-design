import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import WizardItem from './item'
import styles from './styles/wizard.module.css'
import {pickChilds, TickIcon} from './utils'

interface Props {
  css?: unknown
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
                  {currentStep > index + 1 ? <TickIcon /> : index + 1}
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

const Line = ({side, bordered, active, error}) => (
  <div
    className={[
      styles.line,
      active && styles.lineIsActive,
      bordered && side === 'left' && styles.lineSideLeftBordered,
      bordered && side === 'right' && styles.lineSideRightBordered,
      active && error && styles.lineIsActiveIsErrored,
      'cdg-wizard-line',
    ]
      .filter(Boolean)
      .join(' ')}
  />
)

const Item = ({active, error, onKeyDown, onClick, style, children}) => (
  <div
    tabIndex={0}
    className={[
      styles.item,
      active && styles.itemIsActive,
      active && error && styles.itemIsActiveIsErrored,
      'cdg-wizard-item',
    ]
      .filter(Boolean)
      .join(' ')}
    onKeyDown={onKeyDown}
    onClick={onClick}
    style={style}
  >
    {children}
  </div>
)

const Title = ({active, style, children}) => (
  <div
    style={style}
    className={[
      styles.titleItem,
      active && styles.titleItemIsActive,
      'cdg-wizard-title-item',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
)

export default Wizard as typeof Wizard & {
  Item: typeof WizardItem
}
