import {SearchField} from '@comfortdelgro/react-compass'

function H5Example() {
  return (
    <div style={{gap: '1rem', display: 'flex'}}>
      <SearchField
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
        h5
      />
      <SearchField
        isDisabled
        placeholder='Search'
        h5
        onSubmit={(text) => console.log(text)}
      />
    </div>
  )
}

export default H5Example
