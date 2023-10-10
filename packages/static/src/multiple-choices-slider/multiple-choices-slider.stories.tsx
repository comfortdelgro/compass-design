import {
  faAddressCard,
  faAmbulance,
  faAnchor,
  faAngleUp,
  faAsterisk,
  faBank,
  faBookOpen,
  faCar,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import {useState} from 'react'
import MultipleChoicesSlider from './index'

export const Default = () => {
  const [selectedKeys, setSelectedKeys] = useState<number[]>([])

  const handleChange = (e: number[]) => {
    setSelectedKeys(e)
  }

  return (
    <div style={{padding: '1rem'}}>
      <div style={{width: '374px', marginBottom: '20px'}}>
        <MultipleChoicesSlider onChange={handleChange}>
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faCar} />}
            label={'Safe Driving'}
            index={0}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faAmbulance} />}
            label={'Clean & Tidy Vehicle'}
            index={1}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faAddressCard} />}
            label={'Friendly Driver'}
            index={2}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faAnchor} />}
            label={'On Time'}
            index={3}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faAsterisk} />}
            label={'Safe Driving'}
            index={4}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faAngleUp} />}
            label={'Clean & Tidy Vehicle'}
            index={5}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faBank} />}
            label={'Friendly Driver'}
            index={6}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faBookOpen} />}
            label={'On Time'}
            index={7}
          />
        </MultipleChoicesSlider>
      </div>

      <pre
        style={{
          width: '374px',
          padding: 'var(--space-2)',
          margin: 0,
          minHeight: 'var(--sizes-5)',
          borderRadius: 'var(--radii-lg)',

          backgroundColor: 'var(--colors-secondaryBg)',
          fontSize: 'var(--fontSizes-label1)',
          whiteSpace: 'pre-wrap',
          overflowWrap: 'anywhere',
        }}
      >
        Selected keys:
        {JSON.stringify(selectedKeys)}
      </pre>
    </div>
  )
}

const meta = {
  title: 'Example/Multiple choices slider',
  component: Default,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
