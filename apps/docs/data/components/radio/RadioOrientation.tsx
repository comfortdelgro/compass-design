import {Radio, Typography} from '@comfortdelgro/react-compass'

function RadioOrientation() {
  return (
    <div>
      <Typography.Header variant='header4'>Horizontal</Typography.Header>
      <Radio.Group orientation='horizontal'>
        <Radio
          label='test'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='1'
          tooltip='This is tooltip'
        />
        <Radio
          label='test2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='2'
        />
      </Radio.Group>
      <Typography.Header variant='header4'>Vertical</Typography.Header>
      <Radio.Group orientation='vertical'>
        <Radio
          label='test'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='1'
          tooltip='This is tooltip'
        />
        <Radio
          label='test2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='2'
        />
      </Radio.Group>
    </div>
  )
}

export default RadioOrientation
