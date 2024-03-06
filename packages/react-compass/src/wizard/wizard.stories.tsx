import type {Meta} from '@storybook/react'
import React from 'react'
import Wizard from './index'

export const Variants: React.FC = () => (
  <div>
    <h3>Default with items</h3>
    <Wizard
      items={['Value1', 'Value2', 'Value3', 'Value4']}
      currentStep={3}
      onStepClick={(n) => console.log(n)}
    />
    <h3>With customize items css</h3>
    <Wizard currentStep={5}>
      <Wizard.Item title='Value1'>
        <div
          style={{
            width: 20,
            height: 20,
            background: '#0142AF',
            borderRadius: '99999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#FFFFFF',
          }}
        >
          1
        </div>
      </Wizard.Item>
      <Wizard.Item title='Value2'>
        <div
          style={{
            width: 20,
            height: 20,
            background: '#99b3df',
            borderRadius: '99999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#0142AF',
          }}
        >
          <svg width='10' height='8' viewBox='0 0 10 8'>
            <path
              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </Wizard.Item>
      <Wizard.Item title='Value3'>
        <div
          style={{
            width: 20,
            height: 20,
            background: '#0142AF',
            borderRadius: '99999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.75rem',
          }}
        />
      </Wizard.Item>
      <Wizard.Item title='Value4'>
        <div
          style={{
            width: 20,
            height: 20,
            background: '#99b3df',
            borderRadius: '99999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#0142AF',
          }}
        >
          <svg width='10' height='8' viewBox='0 0 10 8'>
            <path
              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </Wizard.Item>
      <Wizard.Item title='Value5'>
        <div
          style={{
            width: 20,
            height: 20,
            background: '#0142AF',
            borderRadius: '99999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#fff',
          }}
        >
          <svg width='10' height='8' viewBox='0 0 10 8'>
            <path
              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </Wizard.Item>
      <Wizard.Item title='Value6'>
        <div
          style={{
            width: 20,
            height: 20,
            background: '#e6ecf7',
            borderRadius: '99999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#1d3a6b',
            fontWeight: 500,
          }}
        >
          6
        </div>
      </Wizard.Item>
    </Wizard>
    <h3>With error items</h3>
    <Wizard
      items={['Value1', 'Value2', 'Value3', 'Value4']}
      erroredSteps={[2]}
      currentStep={3}
      onStepClick={(n) => console.log(n)}
    />
  </div>
)

const meta = {
  title: 'Example/Wizard',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
