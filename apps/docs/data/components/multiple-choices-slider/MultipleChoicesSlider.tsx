import Clubhouse from '@comfortdelgro/compass-icons/react/colorful/clubhouse'
import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
import Google from '@comfortdelgro/compass-icons/react/colorful/google'
import Linkedin from '@comfortdelgro/compass-icons/react/colorful/linkedin'
import Pinterest from '@comfortdelgro/compass-icons/react/colorful/pinterest'
import Twitter from '@comfortdelgro/compass-icons/react/colorful/twitter'
import {MultipleChoicesSlider} from '@comfortdelgro/react-compass-old'
import IconBox from 'data/foundation/iconography/components/IconBox'
import React from 'react'

function BasicExample() {
  const [selectedKeys, setSelectedKeys] = React.useState<number[]>([])
  const handleChange = (e: number[]) => {
    setSelectedKeys(e)
  }
  return (
    <MultipleChoicesSlider onChange={handleChange}>
      <MultipleChoicesSlider.Item
        icon={
          <IconBox component={<Compass width={40} height={40} />} name='' />
        }
        label={'Compass'}
        index={0}
      />
      <MultipleChoicesSlider.Item
        icon={
          <IconBox component={<Clubhouse width={40} height={40} />} name='' />
        }
        label={'Clubhouse'}
        index={1}
      />
      <MultipleChoicesSlider.Item
        icon={<IconBox component={<Google width={40} height={40} />} name='' />}
        label={'Google'}
        index={2}
      />
      <MultipleChoicesSlider.Item
        icon={
          <IconBox component={<Linkedin width={40} height={40} />} name='' />
        }
        label={'Linkedin'}
        index={3}
      />
      <MultipleChoicesSlider.Item
        icon={
          <IconBox component={<Twitter width={40} height={40} />} name='' />
        }
        label={'Twitter'}
        index={4}
      />
      <MultipleChoicesSlider.Item
        icon={
          <IconBox component={<Pinterest width={40} height={40} />} name='' />
        }
        label={'Pinterest'}
        index={5}
      />
    </MultipleChoicesSlider>
  )
}

export default BasicExample
