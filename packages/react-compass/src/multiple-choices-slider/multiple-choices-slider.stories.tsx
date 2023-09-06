import {faCar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {PreviewCode} from '../pudo/pudo.stories'
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
            icon={<FontAwesomeIcon icon={faCar} />}
            label={'Clean & Tidy Vehicle'}
            index={1}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faCar} />}
            label={'Friendly Driver'}
            index={2}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faCar} />}
            label={'On Time'}
            index={3}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faCar} />}
            label={'Safe Driving'}
            index={4}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faCar} />}
            label={'Clean & Tidy Vehicle'}
            index={5}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faCar} />}
            label={'Friendly Driver'}
            index={6}
          />
          <MultipleChoicesSlider.Item
            icon={<FontAwesomeIcon icon={faCar} />}
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
