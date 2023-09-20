import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import WizardItem from './item'
import {pickChilds, TickIcon} from './utils'
import {
  StyledItem,
  StyledLine,
  StyledTitle,
  StyledWizard,
  WizardVariantProps,
} from './wizard.styles'
interface Props extends StyledComponentProps {
  items?: string[]
  currentStep?: number
  erroredSteps?: number[]
  children?: React.ReactNode
  onStepClick?: (index: number) => void
}

export type WizardProps = Props &
  WizardVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Wizard = React.forwardRef<HTMLDivElement, WizardProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    currentStep = 1,
    erroredSteps = [],
    children,
    items,
    onStepClick,
    ...delegated
  } = props

  const wizardRef = useDOMRef<HTMLDivElement>(ref)

  const collection = React.useMemo(
    () => pickChilds(children, WizardItem),
    [children],
  )

  const isControlled = !!children

  return (
    <StyledWizard
      css={{
        $$itemsLength: `${
          isControlled ? collection?.length : items?.length ?? 0
        }`,
        ...css,
      }}
      ref={wizardRef}
      {...delegated}
    >
      <div className='wizard-progress-wrapper'>
        {!isControlled &&
          items?.map((item: string, index: number) => (
            <div className='item-wrapper' key={item}>
              <StyledLine
                side='left'
                bordered={index === 0}
                active={currentStep > index + 1 || index + 1 === currentStep}
                error={!!erroredSteps.includes(index + 1)}
              />
              <StyledItem
                tabIndex={0}
                active={currentStep > index + 1 || index + 1 === currentStep}
                onKeyDown={(event) => {
                  const key = event.key
                  if (key === 'Enter' || key === ' ') {
                    onStepClick?.(index + 1)
                  }
                }}
                error={!!erroredSteps.includes(index + 1)}
                onClick={() => onStepClick?.(index + 1)}
                css={{cursor: onStepClick ? 'pointer' : ''}}
              >
                {currentStep > index + 1 ? <TickIcon /> : index + 1}
              </StyledItem>
              <StyledLine
                className='side-right'
                bordered={index === items.length - 1}
                active={currentStep > index + 1}
                error={!!erroredSteps.includes(index + 1)}
              />
            </div>
          ))}

        {isControlled &&
          collection?.map((item, index: number) => (
            <div className='item-wrapper' key={`${item.props.title}-${index}`}>
              <StyledLine
                side='left'
                bordered={index === 0}
                active={currentStep > index + 1 || index + 1 === currentStep}
                error={!!item.props.isErrored}
              />
              {item}
              <StyledLine
                className='side-right'
                bordered={index === collection.length - 1}
                active={currentStep > index + 1}
                error={!!item.props.isErrored}
              />
            </div>
          ))}
      </div>
      <div className='wizard-title-wrapper'>
        {!isControlled &&
          items?.map((item: string, index: number) => (
            <StyledTitle
              key={index}
              active={currentStep > index + 1 || index + 1 === currentStep}
            >
              {item}
            </StyledTitle>
          ))}
        {isControlled &&
          collection?.map((item, index: number) => (
            <StyledTitle
              key={index}
              active={currentStep > index + 1 || index + 1 === currentStep}
            >
              {item.props.title}
            </StyledTitle>
          ))}
      </div>
    </StyledWizard>
  )
})

export default Wizard as typeof Wizard & {
  Item: typeof WizardItem
}
