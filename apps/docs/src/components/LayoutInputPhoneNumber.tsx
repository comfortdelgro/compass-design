import {Dropdown, TextField} from '@comfortdelgro/react-compass'
import React, {Key, useState} from 'react'
import layoutStyles from '../styles/layout_styles/_LayoutInputPhoneNumber.module.css'
import ADFlag from './flags/ad'
import AEFlag from './flags/ae'
import AFFlag from './flags/af'

export const LayoutInputPhoneNumber: React.FC = () => {
  const [inputValue, setInputValue] = useState('7685-9004-5999')
  const [flag, setFlag] = React.useState<Key>('afghanistan')
  const [flag1, setFlag1] = React.useState<Key>('afghanistan')
  const [flag2, setFlag2] = React.useState<Key>('afghanistan')
  const [isValid, setIsValid] = useState(true)
  const validateInput = (input: string | number) => {
    const pattern = /^\d{4}-\d{4}-\d{4}$/
    return typeof input === 'string' && pattern.test(input)
  }

  const handleInputChange = (value: string | number) => {
    setInputValue(String(value))
    setIsValid(validateInput(value))
  }

  const handlePrefix = (key: Key) => {
    if (key === 'afghanistan') {
      return <ADFlag />
    }
    if (key === 'albania') {
      return <AEFlag />
    }
    if (key === 'algeria') {
      return <AFFlag />
    }
    return null
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
            <Dropdown.Select
              isRequired
              placeholder='Choose a country'
              selectedKey={flag}
              onSelectionChange={(k: Key) => setFlag(k)}
              css={{
                background: 'white',
                alignItems: 'center',
              }}
              helperText='Format: Country name + area code'
              prefix={
                <div
                  style={{
                    marginRight: '0.7rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {handlePrefix(flag)}
                </div>
              }
            >
              <Dropdown.Item key='afghanistan'>Afghanistan (+93)</Dropdown.Item>
              <Dropdown.Item key='albania'>Albania (+355)</Dropdown.Item>
              <Dropdown.Item key='algeria'>Algeria (+213)</Dropdown.Item>
            </Dropdown.Select>
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
            <Dropdown.Select
              isRequired
              placeholder='Choose a country'
              selectedKey={flag1}
              onSelectionChange={(k: Key) => setFlag1(k)}
              css={{
                background: 'white',
                borderRadius: 4,
                border: '0.50px #EDEBE9 solid',
                alignItems: 'center',
              }}
              prefix={
                <div
                  style={{
                    marginRight: '0.7rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {handlePrefix(flag1)}
                </div>
              }
            >
              <Dropdown.Item key='afghanistan'>Afghanistan (+93)</Dropdown.Item>
              <Dropdown.Item key='albania'>Albania (+355)</Dropdown.Item>
              <Dropdown.Item key='algeria'>Algeria (+213)</Dropdown.Item>
            </Dropdown.Select>
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
            <Dropdown.Select
              isReadOnly
              isDisabled
              placeholder='Choose a country'
              selectedKey={flag2}
              onSelectionChange={(k: Key) => setFlag2(k)}
              css={{
                background: 'white',
                borderRadius: 4,
                border: '0.50px #EDEBE9 solid',
                alignItems: 'center',
              }}
              prefix={
                <div
                  style={{
                    marginRight: '0.7rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {handlePrefix(flag2)}
                </div>
              }
            >
              <Dropdown.Item key='afghanistan'>Afghanistan (+93)</Dropdown.Item>
              <Dropdown.Item key='albania'>Albania (+355)</Dropdown.Item>
              <Dropdown.Item key='algeria'>Algeria (+213)</Dropdown.Item>
            </Dropdown.Select>
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
