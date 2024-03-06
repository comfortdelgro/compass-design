import {
  AutoComplete,
  Column,
  SearchField,
} from '@comfortdelgro/react-compass'
import React from 'react'

const FullFeatured: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<string[]>([])

  const onSearchHandler = async (value: string): Promise<void> => {
    try {
      // Simulating API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 100)) // Delay of 1 second (adjust as needed)

      // Simulating API response
      const Animals = [
        'Lion',
        'Giraffe',
        'Elephant',
        'Penguin',
        'Dolphin',
        'Koala',
        'Cheetah',
        'Kangaroo',
        'Octopus',
        'Gorilla',
        'Tiger',
        'Zebra',
        'Hippopotamus',
        'Panda',
        'Snake',
      ]
      const filteredAnimals = Animals.filter((animal) =>
        animal.toLowerCase().includes(value.toLowerCase()),
      )
      setSearchResults([...filteredAnimals])
      console.log('API call successful: ', filteredAnimals)
    } catch (error) {
      console.error('Error during API call:', error)
    }
  }

  const onSelectHandler = (value: string): void => {
    setInputValue(value)
    // You can do anything you want with the selected value here
    console.log('Selected value: ', value)
  }

  return (
    <Column>
      <AutoComplete
        searchedValue={inputValue} // This is the value that will be passed to the onSearch callback with a debounce (delay)
        debounce={300} // Fire onSearch after 300ms of user inactivity
        onSearch={(value) => onSearchHandler(value)} // This is where you would make your API call
        options={searchResults} // This is the list of options that will be displayed in the dropdown
        onSelect={(value) => onSelectHandler(value)} // This is the callback that will be called when user selects an option from the dropdown
        notFoundContent='No data found' // This is the message that will be displayed when no options are found
      >
        {/* You can put our own input element here instead of using our SearchField component */}
        <SearchField
          placeholder='Search'
          onChange={(newValue) => setInputValue(newValue)}
          value={inputValue}
          css={{width: '10rem'}}
        />
      </AutoComplete>
    </Column>
  )
}

export default FullFeatured
