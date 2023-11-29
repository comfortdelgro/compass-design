import {SearchField} from '@comfortdelgro/react-compass'

function RadioCustomStyling() {
  return (
    <div>
      <SearchField
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
        css={{border: '1px solid gray'}}
      />
    </div>
  )
}

export default RadioCustomStyling
