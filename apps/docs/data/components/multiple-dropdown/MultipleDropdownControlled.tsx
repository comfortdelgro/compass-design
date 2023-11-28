import {MultipleDropdown} from '@comfortdelgro/react-compass'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Key} from 'react'

function MultipleDropdownControlled() {
  const [value, setValue] = React.useState<Key[]>(['cat'])
  return (
    <div>
      <MultipleDropdown
        label='Favorite Animal'
        disabledValues={['cat']}
        placeholder='Choose an animal'
        values={value}
        erroredValues={['panda']}
        isRequired
        onValuesChange={(k: Key[]) => setValue(k)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
        css={{width: '50%'}}
      >
        <MultipleDropdown.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px 16px',
              borderBottom: '2px solid #EDEBE9',
            }}
          >
            <span
              style={{
                color: '#323130',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: 0,
                margin: 0,
              }}
            >
              Filter
            </span>
            <button
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#A4262C',
                border: 0,
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
              onClick={() => setValue([])}
            >
              Clear
            </button>
          </div>
        </MultipleDropdown.Header>
        <MultipleDropdown.Item value='panda' textValue='Panda'>
          <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
    </div>
  )
}

export default MultipleDropdownControlled
