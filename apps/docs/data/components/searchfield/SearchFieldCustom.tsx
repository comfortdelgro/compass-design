import {SearchField} from '@comfortdelgro/react-compass-old'

function SearchFieldCustom() {
  return (
    <SearchField
      placeholder='Search'
      onSubmit={(text) => console.log(text)}
      css={{border: '1px solid gray'}}
    />
  )
}

export default SearchFieldCustom
