import {SearchField} from '@comfortdelgro/react-compass'

function H5Example() {
  return (
    <div style={{gap: '1rem', display: 'flex'}}>
      <SearchField
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
        isH5Variant
      />
      <SearchField
        isDisabled
        placeholder='Search'
        isH5Variant
        onSubmit={(text) => console.log(text)}
      />
    </div>
  )
}

export default H5Example
