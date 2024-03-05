import {Meta} from '@storybook/react'
import React, {useState} from 'react'
import SearchField from '../searchfield'
import AutoComplete from './index'

export const FullFeatured: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const onSearchHandler = async (value: string): Promise<void> => {
    try {
      // Simulating API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 100)) // Delay of 100ms (adjust as needed)

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
        'Leopard',
        'Polar Bear',
        'Lemur',
        'Jaguar',
        'Chimpanzee',
      ]
      const filteredAnimals = Animals.filter((animal) =>
        animal.toLowerCase().includes(value.toLowerCase()),
      )
      setSearchResults([...filteredAnimals])
      console.log('API call successful:', filteredAnimals)
    } catch (error) {
      console.error('Error during API call:', error)
    }
  }

  const onLoadMoreHandler = async (): Promise<void> => {
    if (isLoadingMore) return // Prevent multiple simultaneous requests
    try {
      setIsLoadingMore(true)
      // Simulating API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 500)) // Delay of 500ms (adjust as needed)

      // Simulating API response with additional data
      const moreAnimals = [
        'Raccoon',
        'Ostrich',
        'Flamingo',
        'Pangolin',
        'Llama',
        'Meerkat',
        'Koala',
        'Chameleon',
        'Sloth',
        'Armadillo',
        'Puma',
        'Jaguar',
        'Gazelle',
        'Mongoose',
        'Platypus',
        'Peacock',
        'Tapir',
        'Hedgehog',
        'Kangaroo',
        'Otter',
      ]

      setSearchResults((prevResults) => [...prevResults, ...moreAnimals])
      setIsLoadingMore(false)
      console.log('Load more successful:', moreAnimals)
    } catch (error) {
      setIsLoadingMore(false)
      console.error('Error during Load more:', error)
    }
  }

  const onSelectHandler = (value: string): void => {
    setInputValue(value)
    // You can do anything you want with the selected value here
    console.log('Selected value:', value)
  }

  return (
    <div style={{width: '100%', height: '80vh', padding: '1rem'}}>
      <h3>Full-featured Example: Auto Complete</h3>
      <AutoComplete
        searchedValue={inputValue}
        debounce={800}
        onSearch={(value) => onSearchHandler(value)}
        options={searchResults}
        onSelect={(value) => onSelectHandler(value)}
        notFoundContent='No data found'
        onLoadMore={() => onLoadMoreHandler()}
        isLoadingMore={isLoadingMore}
      >
        {/* You can put your own input element here instead of using our SearchField component */}
        <SearchField
          placeholder='Search'
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value)
          }
          onClear={() => setInputValue('')}  
          value={inputValue}
        />
      </AutoComplete>
    </div>
  )
}

const meta = {
  title: 'Example/AutoComplete',
  component: FullFeatured,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FullFeatured>

export default meta
