import {
  Column,
  Row,
  TextField,
  Typography,
} from '@comfortdelgro/react-compass-old'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

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

const Variants: React.FC = () => {
  const [value, setValue] = React.useState('')
  return (
    <Column>
      <Row>
        <TextField
          type='number'
          placeholder='Enter your name'
          isErrored
          helperText='my helper text'
          errorMessage='my error message'
          className='my-class'
          onKeyDown={(e) => console.log('onKeyDownTest', e)}
        />
      </Row>
      <Typography.Header variant='header3'>
        Controlled (min-max number input)
      </Typography.Header>
      <Row>
        <TextField
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

      <Typography.Header variant='header3'>With Header</Typography.Header>
      <Row>
        <TextField
          label={
            <>
              Name <FontAwesomeIcon icon={faBug} />
            </>
          }
          placeholder='Enter your name'
          isRequired
        />
      </Row>

      <Typography.Header variant='header3'>With Helper Text</Typography.Header>
      <Row>
        <TextField
          label='Name'
          placeholder='Enter your name'
          helperText='Helper Text'
        />
      </Row>

      <Typography.Header variant='header3'>Error</Typography.Header>
      <Row>
        <TextField
          isErrored
          label='Name'
          placeholder='Enter your name'
          helperText='This is helpers text'
          errorMessage='Errror'
        />
      </Row>

      <Typography.Header variant='header3'>With Icons</Typography.Header>
      <Row>
        <TextField
          label='Name'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
        />
        <TextField
          label='Name'
          rightIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
        />
        <TextField
          label='Name'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          rightIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
        />
      </Row>

      <Typography.Header variant='header3'>Disabled</Typography.Header>
      <Row>
        <TextField label='Name' placeholder='Enter your name' isDisabled />
        <TextField
          label='Name'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
          isDisabled
        />
        <TextField
          label='Name'
          rightIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
          isDisabled
        />
        <TextField
          label='Name'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          rightIcon={<FontAwesomeIcon icon={faBug} />}
          placeholder='Enter your name'
          isDisabled
        />
      </Row>
      <Typography.Header variant='header3'>Prefix</Typography.Header>
      <Row>
        <TextField
          label='Name'
          prefix={Select}
          placeholder='Enter your phone number'
        />
      </Row>
      <Typography.Header variant='header3'>Password</Typography.Header>
      <TextField
        css={{width: '16rem'}}
        label='Password'
        placeholder='Enter your password'
        helperText='Your password should contain at least 18 characters.'
        password={true}
      />
      <Typography.Header variant='header3'>Max length</Typography.Header>
      <TextField
        css={{width: '16rem'}}
        label='Password'
        placeholder='This has a max length of 10'
        helperText='Your input should be equal or less than 10 characters.'
        maxLength={10}
      />
      <Typography.Header variant='header3'>Min length</Typography.Header>
      <TextField
        css={{width: '16rem'}}
        label='Password'
        placeholder='This has a min length of 5'
        helperText='Your input should be equal or more than 5 characters.'
        minLength={5}
      />
    </Column>
  )
}

export default Variants
