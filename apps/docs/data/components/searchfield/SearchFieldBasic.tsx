import { SearchField } from "@comfortdelgro/react-compass"

function BasicExample() {
  return (
    <div style={{gap: '1rem', display: 'flex'}}>
      <SearchField
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
      />
      <SearchField
        isDisabled
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
      />
    </div>
  )
}

export default BasicExample
