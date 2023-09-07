import Radio from '@comfortdelgro/react-compass/radio'

function RadioOrientation() {
  return (
    <div>
      <h3>Horizontal</h3>
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
      <h3>Vertical</h3>
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
