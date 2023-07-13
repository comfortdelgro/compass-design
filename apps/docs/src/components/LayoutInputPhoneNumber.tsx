import {Dropdown, TextField} from '@comfortdelgro/react-compass'
import React, {useState} from 'react'

interface Props {}

export const LayoutInputPhoneNumber: React.FC<Props> = ({}) => {
  const [inputValue, setInputValue] = useState('7685-9004-5999')
  const [isValid, setIsValid] = useState(true)
  const validateInput = (input: string | number) => {
    const pattern = /^\d{4}-\d{4}-\d{4}$/
    return typeof input === 'string' && pattern.test(input)
  }

  const handleInputChange = (value: string | number) => {
    setInputValue(String(value))
    setIsValid(validateInput(value))
  }
  return (
    <div
      style={{
        width: '100%',
        height: '450px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 4,
          display: 'inline-flex',
        }}
      >
        <div>
          <span>Mobile no. </span>
          <span>*</span>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            display: 'inline-flex',
          }}
        >
          <div
            className='cdg-input-country-code'
            style={{
              width: 248,
            }}
          >
            <Dropdown.Flag
              placeholder='Choose a country'
              selectedKey='702'
              css={{
                background: 'white',
                alignItems: 'center',
              }}
              helperText='Format: Country name + area code'
            />
          </div>
          <div
            className='cdg-input-phone-number'
            style={{
              flex: '1 1 0',
              background: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <TextField
              css={{
                color: '#323130',
              }}
              value={inputValue}
              placeholder='AAAA-AAAA-AAAA'
              isErrored={!isValid}
              onChange={(e) => handleInputChange(e)}
              helperText='Format: (4 numbers) | AAAA-BBBB-CCCC'
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 4,
          display: 'inline-flex',
          paddingTop: '10%',
        }}
      >
        <div style={{width: 327}}>
          <span>Mobile no. </span>
          <span>*</span>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            display: 'inline-flex',
          }}
        >
          <div
            className='cdg-input-country-code'
            style={{
              width: 248,
            }}
          >
            <Dropdown.Flag
              placeholder='Choose a country'
              flagKeyType='country-code'
              css={{
                background: 'white',
                borderRadius: 4,
                border: '0.50px #EDEBE9 solid',
                alignItems: 'center',
              }}
            />
          </div>
          <div
            className='cdg-input-phone-number'
            style={{
              flex: '1 1 0',
              height: 44,
              background: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <TextField placeholder='AAAA-AAAA-AAAA' />
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 4,
          display: 'inline-flex',
          paddingTop: '10%',
        }}
      >
        <div style={{width: 327}}>
          <span>Mobile no. </span>
          <span>*</span>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            display: 'inline-flex',
          }}
        >
          <div
            className='cdg-input-country-code'
            style={{
              width: 248,
            }}
          >
            <Dropdown.Flag
              isReadOnly
              isDisabled
              //   defaultSelectedKey='702'
              selectedKey='702'
              placeholder='Choose a country'
              flagKeyType='country-code'
              css={{
                background: 'white',
                borderRadius: 4,
                border: '0.50px #EDEBE9 solid',
                alignItems: 'center',
              }}
            />
          </div>
          <div
            className='cdg-input-phone-number'
            style={{
              flex: '1 1 0',
              height: 44,
              background: '#F3F2F1',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <TextField
              value='7685-9004-5000'
              placeholder='AAAA-AAAA-AAAA'
              isDisabled
            />
          </div>
        </div>
      </div>
    </div>
  )
}
