import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {Meta} from '@storybook/react'
import React from 'react'
import Textfield from './index'

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '3rem',
}
const styleRow: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
}

const Select = (
  <input
    value={'+64'}
    onChange={() => {
      /* do nothing */
    }}
    style={{
      fontSize: '0.8em',
      lineHeight: '1em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      appearance: 'none',
      border: 'none',
      width: '3rem',
    }}
  />
)

export const Basic: React.FC = () => {
  const [value, setValue] = React.useState('')
  return (
    <div style={{...style}}>
      <div style={{...styleRow}}>
        <Textfield
          type='number'
          placeholder='Enter your name'
          isErrored
          helperText='my helper text'
          errorMessage='my error message'
          className='my-class'
          onKeyDown={(e) => console.log('onKeyDownTest', e)}
        />
      </div>
      <h3>Controlled (min-max number input)</h3>
      <div style={{...styleRow}}>
        <Textfield
          placeholder='Pick a number from 1 - 100'
          value={value}
          onChange={(value) => {
            const valueAsNumber = Number(value)
            if ((valueAsNumber >= 0 && valueAsNumber <= 100) || value === '') {
              setValue(value as string)
            }
            return
          }}
        />
      </div>

      <h3>With Label</h3>
      <div style={{...styleRow}}>
        <Textfield
          label={
            <>
              Name <FontAwesomeIcon icon={faBug} />
            </>
          }
          placeholder='Enter your name'
          isRequired
        />
      </div>

      <h3>With Helper Text</h3>
      <div style={{...styleRow}}>
        <Textfield
          label='Name'
          placeholder='Enter your name'
          helperText='Helper Text'
        />
      </div>

      <h3>Error</h3>
      <div style={{...styleRow}}>
        <Textfield
          isErrored
          label='Name'
          placeholder='Enter your name'
          helperText='This is helpers text'
          errorMessage='Errror'
        />
      </div>

      <h3>With Icons</h3>
      <div style={{...styleRow}}>
        <Textfield
          label='Name'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
        />
        <Textfield
          label='Name'
          rightIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
        />
        <Textfield
          label='Name'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          rightIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
        />
      </div>

      <h3>Disabled</h3>
      <div style={{...styleRow}}>
        <Textfield label='Name' placeholder='Enter your name' isDisabled />
        <Textfield
          label='Name'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
          isDisabled
        />
        <Textfield
          label='Name'
          rightIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
          isDisabled
        />
        <Textfield
          label='Name'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          rightIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
          isDisabled
        />
      </div>
      <h3>Prefix</h3>
      <div style={{...styleRow}}>
        <Textfield
          label='Name'
          prefix={Select}
          placeholder='Enter your phone number'
        />
      </div>
      <h3>Password</h3>
      <Textfield
        css={{width: '16rem'}}
        label='Password'
        placeholder='Enter your password'
        helperText='Your password should contain at least 18 characters.'
        password={true}
      />
      <h3>Max length</h3>
      <Textfield
        css={{width: '16rem'}}
        label='Password'
        placeholder='This has a max length of 10'
        helperText='Your input should be equal or less than 10 characters.'
        maxLength={10}
      />
      <h3>Min length</h3>
      <Textfield
        css={{width: '16rem'}}
        label='Password'
        placeholder='This has a min length of 5'
        helperText='Your input should be equal or more than 5 characters.'
        minLength={5}
      />
    </div>
  )
}

export const ForH5Variant = () => {
  return (
    <div style={{...style}}>
      <Textfield
        type='text'
        label='Name'
        placeholder='Enter your name'
        // isErrored
        helperText='my helper text'
        errorMessage='my error message'
        className='my-class'
        onKeyDown={(e) => console.log('onKeyDownTest', e)}
        h5
      />
    </div>
  )
}

const meta = {
  title: 'Example/Textfield ',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
