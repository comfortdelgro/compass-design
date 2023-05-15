import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledContent,
  StyledItem,
  StyledLine,
  StyledWizard,
  WizardVariantProps,
} from './wizard.styles'

interface Props extends StyledComponentProps {
  items: string[]
  currentStep?: number
}

export type WizardProps = Props & WizardVariantProps

const Wizard = React.forwardRef<HTMLDivElement, WizardProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    currentStep = 1,
    items,
  } = props

  const wizardRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledWizard
      css={{$$itemsLength: `${items.length}`, ...css}}
      ref={wizardRef}
    >
      <div className='wizard-progress-wrapper'>
        {items.map((item: string, index: number) => (
          <div className='item-wrapper' key={item}>
            <StyledLine
              side='left'
              bordered={index === 0}
              active={currentStep > index + 1 || index + 1 === currentStep}
            />
            <StyledItem
              active={currentStep > index + 1 || index + 1 === currentStep}
            >
              {currentStep > index + 1 ? <TickIcon /> : index + 1}
            </StyledItem>
            <StyledLine
              className='side-right'
              bordered={index === items.length - 1}
              active={currentStep > index + 1}
            />
          </div>
        ))}
      </div>
      <div className='wizard-content-wrapper'>
        {items.map((item: string, index: number) => (
          <StyledContent
            key={index}
            active={currentStep > index + 1 || index + 1 === currentStep}
          >
            {item}
          </StyledContent>
        ))}
      </div>
    </StyledWizard>
  )
})

const TickIcon = () => (
  <svg width='10' height='8' viewBox='0 0 10 8'>
    <path
      d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'
      fill='currentColor'
    />
  </svg>
)

export default Wizard
