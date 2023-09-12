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
import React from 'react'
import {styled} from '../theme'
import MultipleChoicesSlider from './index'
export const Default: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<number[]>([])
  const handleChange = (e: number[]) => {
    setSelectedKeys(e)
  }
  return (
    <>
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
      <PreviewCode css={{width: '374px'}}>
        Selected keys:
        {JSON.stringify(selectedKeys)}
      </PreviewCode>
    </>
  )
}

const PreviewCode = styled('pre', {
  padding: '$2',
  margin: '0',

  width: '100%',
  minHeight: '$5',
  borderRadius: '$lg',

  backgroundColor: '$secondaryBg',
  fontSize: '$label1',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'anywhere',
})
