import type {Meta} from '@storybook/react'
import React from 'react'
import SearchField from '../../searchfield'

export const Basic: React.FC = () => {
  return (
    <div>
      <SearchField
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
        value={'Initial value'}
        css={{
          '*': {margin: 0, padding: 0},
          button: {
            backgroundColor: 'Orange',
            '&:hover': {
              backgroundColor: 'green',
            },
          },
          '& .cdg-search-field-input': {
            backgroundColor: 'OrangeRed',
          },
          '&::after': {
            content: `''`,
            display: 'block',
            backgroundImage:
              'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
            position: 'absolute',
            top: '0',
            right: '0',
            width: '50px',
            height: '50px',
            borderRadius: '9999px',
            zIndex: -1,
          },
          '@media (min-width: 320px)': {
            width: '100px',
          },
          '@media (min-width: 768px)': {
            width: '200px',
          },
          '@media (min-width: 1024px)': {
            width: '300px',
          },
        }}
      />
    </div>
  )
}

const meta = {
  title: 'Example/CSS',
  component: Basic,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
