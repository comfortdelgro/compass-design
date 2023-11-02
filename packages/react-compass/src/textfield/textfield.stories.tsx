import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {StoryDecorator} from '@ladle/react'
import React from 'react'
import {Column, Row} from '../utils/components'
import Textfield from './index'

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

export const Variants: React.FC = () => {
  const [value, setValue] = React.useState('')
  return (
    <Column>
      <Row>
        <Textfield
          type='number'
          placeholder='Enter your name'
          isErrored
          helperText='my helper text'
          errorMessage='my error message'
          className='my-class'
          onKeyDown={(e) => console.log('onKeyDownTest', e)}
        />
      </Row>
      <h3>Controlled (min-max number input)</h3>
      <Row>
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
      </Row>

      <h3>With Label</h3>
      <Row>
        <Textfield
          label={
            <>
              Name <FontAwesomeIcon icon={faBug} />
            </>
          }
          placeholder='Enter your name'
          isRequired
        />
      </Row>

      <h3>With Helper Text</h3>
      <Row>
        <Textfield
          label='Name'
          placeholder='Enter your name'
          helperText='Helper Text'
        />
      </Row>

      <h3>Error</h3>
      <Row>
        <Textfield
          isErrored
          label='Name'
          placeholder='Enter your name'
          helperText='This is helpers text'
          errorMessage='Errror'
        />
      </Row>

      <h3>With Icons</h3>
      <Row>
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
      </Row>

      <h3>Disabled</h3>
      <Row>
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
      </Row>
      <h3>Prefix</h3>
      <Row>
        <Textfield
          label='Name'
          prefix={Select}
          placeholder='Enter your phone number'
        />
      </Row>
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
    </Column>
  )
}

export const ForH5Variant = () => {
  const [value, setValue] = React.useState('')
  return (
    <Column>
      <Row>
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
      </Row>
    </Column>
  )
}

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
