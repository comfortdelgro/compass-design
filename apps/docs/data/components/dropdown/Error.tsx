import {Dropdown} from '@comfortdelgro/react-compass-old'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ErrorDropdown = () => {
  return (
    <>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
    </>
  )
}

export default ErrorDropdown
