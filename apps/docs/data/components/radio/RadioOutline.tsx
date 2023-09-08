import {Radio} from '@comfortdelgro/react-compass'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function RadioBasic() {
  return (
    <div>
      <Radio.Group>
        <Radio
          variant='outlined'
          label={
            <>
              test <FontAwesomeIcon icon={faBug} />
            </>
          }
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='1'
          tooltip='This is tooltip'
          id='item1'
        />
        <Radio
          variant='outlined'
          label='test2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='2'
        />
        <Radio
          variant='outlined'
          label='test3'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='3'
          isDisabled
        />
      </Radio.Group>
    </div>
  )
}

export default RadioBasic
