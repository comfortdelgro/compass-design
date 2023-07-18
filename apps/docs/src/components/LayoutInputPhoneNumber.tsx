import {Dropdown, TextField} from '@comfortdelgro/react-compass'
import React, {useState} from 'react'
import layoutStyles from '../styles/layout_styles/_LayoutInputPhoneNumber.module.css'

export const LayoutInputPhoneNumber: React.FC = () => {
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
    <div className={layoutStyles.cdgLayoutWrapper}>
      <div className={layoutStyles.cdgInputContentWrapper}>
        <div>
          <span>Mobile no. </span>
          <span>*</span>
        </div>
        <div className={layoutStyles.cdgInputContent}>
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
          <div className={layoutStyles.cdgInputPhoneNumber}>
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
      <div className={layoutStyles.cdgInputContentWrapper}>
        <div style={{width: 327}}>
          <span>Mobile no. </span>
          <span>*</span>
        </div>
        <div className={layoutStyles.cdgInputContent}>
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
          <div className={layoutStyles.cdgInputPhoneNumber}>
            <TextField placeholder='AAAA-AAAA-AAAA' />
          </div>
        </div>
      </div>
      <div className={layoutStyles.cdgInputContentWrapper}>
        <div style={{width: 327}}>
          <span>Mobile no. </span>
          <span>*</span>
        </div>
        <div className={layoutStyles.cdgInputContent}>
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
          <div className={layoutStyles.cdgInputPhoneNumber}>
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
