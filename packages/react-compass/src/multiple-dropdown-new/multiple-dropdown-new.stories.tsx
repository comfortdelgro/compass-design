import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Key} from 'react'
import {Column} from '../utils'
import MultipleDropdown from './'

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<Key[]>([])
  const [value2, setValue2] = React.useState<Key[]>([1])
  const [isChecked, setIsChecked] = React.useState(true)
  const [sectionSelected, setSectionSelected] = React.useState<
    React.ReactNode[]
  >([])

  React.useEffect(() => {
    if (isChecked && sectionSelected.includes('Group 1')) {
      setValue(['red panda', 'cat', 'dog', 'aardvark', 'kangaroo', 'snake'])
    }
    if (!isChecked) {
      setValue([])
    }
  }, [isChecked])

  return (
    <Column>
      <Column>
        <h3>Controlled</h3>
        <MultipleDropdown
          label='Favorite Animal'
          disabledKeys={['cat']}
          placeholder='Choose an animal'
          selectedKeys={value}
          defaultSelectedKeys={['dog']}
          erroredKeys={['red panda']}
          isRequired
          onSelectionChange={(k: Key[]) => setValue(k)}
          onBlur={() => console.log('blur')}
          onFocus={() => console.log('focus')}
          css={{width: '50%'}}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>UnControlled</h3>
        <MultipleDropdown
          label='Favorite Animal'
          disabledKeys={['snake']}
          defaultSelectedKeys={['snake']}
          placeholder='Choose an animal'
        >
          <MultipleDropdown.Item value='red panda ' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Errored</h3>
        <MultipleDropdown
          label='Favorite Animal'
          disabledKeys={['snake']}
          placeholder='Choose an animal'
          isErrored
          errorMessage='Error Message'
          helperText='Helper Message'
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>displayedValue: String</h3>
        <MultipleDropdown
          label='Favorite Animal'
          displayedValue='string'
          defaultSelectedKeys={['snake', 'cat', 'snake']}
          placeholder='Choosesss an animal sadfsa sadfasdfsd asfdsfasdf asdfdsfsddf asdfsdf asdfsdf grfgasd asfasdfasdf á  '
          css={{width: '200px'}}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>
          Custom display value (only effective when using with displayedValue
          string)
        </h3>
        <MultipleDropdown
          label='Favorite Animal'
          displayedValue='string'
          customDisplayValue={`${value2.length} animals selected`}
          placeholder='Choosesss an animal sadfsa sadfasdfsd asfdsfasdf asdfdsfsddf asdfsdf asdfsdf grfgasd asfasdfasdf á  '
          css={{width: '290px'}}
          selectedKeys={value2}
          onSelectionChange={(k: Key[]) => setValue2(k)}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Checkmark types</h3>
        <MultipleDropdown
          label='Favorite Animal'
          displayedValue='string'
          defaultSelectedKeys={['snake', 'cat', 'snake']}
          placeholder='Choosesss an animal sadfsa sadfasdfsd asfdsfasdf asdfdsfsddf asdfsdf asdfsdf grfgasd asfasdfasdf á  '
          css={{width: '200px'}}
        >
          <MultipleDropdown.Item
            value='red panda'
            key='red panda'
            checkmark='tick'
          >
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat' checkmark='tick'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog' checkmark='tick'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item
            value='aardvark'
            key='aardvark'
            checkmark='tick'
          >
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item
            value='kangaroo'
            key='kangaroo'
            checkmark='tick'
          >
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake' checkmark='tick'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Loading</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          isLoading
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>With Header</h3>
        <MultipleDropdown
          disabledKeys={['snake']}
          label='Favorite Animal'
          placeholder='Choose an animal'
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
              >
                Clear
              </button>
            </div>
          </MultipleDropdown.Header>
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>With Icon</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          icon={<FontAwesomeIcon icon={faBug} />}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Number of rows</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          numberOfRows={4}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>With Section</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
        >
          <MultipleDropdown.Item value='fly' key='fly'>
            Fly
          </MultipleDropdown.Item>
          <MultipleDropdown.Section title='Group 1'>
            <MultipleDropdown.Item value='red panda' key='red panda'>
              Red Panda
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='cat' key='cat'>
              Cat
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='dog' key='dog'>
              Dog
            </MultipleDropdown.Item>
          </MultipleDropdown.Section>
          <MultipleDropdown.Section title='Group 2'>
            <MultipleDropdown.Item value='aardvark' key='aardvark'>
              Aardvark
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
              Kangaroo
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='snake' key='snake'>
              Snake
            </MultipleDropdown.Item>
          </MultipleDropdown.Section>
        </MultipleDropdown>
        <h3>Handle Section Click</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          selectedKeys={value}
          defaultSelectedKeys={['dog']}
          isRequired
          onSelectionChange={(k: Key[]) => setValue(k)}
          css={{width: '80%'}}
        >
          <MultipleDropdown.Section
            title='Group 1'
            isClickable
            checkmark='tick'
            isChecked={isChecked}
            onClick={(title: React.ReactNode) => {
              setIsChecked(!isChecked)
              const newSectionSelected = [...sectionSelected]
              newSectionSelected.push(title)
              setSectionSelected(newSectionSelected)
            }}
          >
            <MultipleDropdown.Item
              value='red panda'
              key='red panda'
              checkmark='tick'
            >
              Red Panda
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='cat' key='cat' checkmark='tick'>
              Cat
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='dog' key='dog' checkmark='tick'>
              Dog
            </MultipleDropdown.Item>
            <MultipleDropdown.Item
              value='aardvark'
              key='aardvark'
              checkmark='tick'
            >
              Aardvark
            </MultipleDropdown.Item>
            <MultipleDropdown.Item
              value='kangaroo'
              key='kangaroo'
              checkmark='tick'
            >
              Kangaroo
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='snake' key='snake' checkmark='tick'>
              Snake
            </MultipleDropdown.Item>
          </MultipleDropdown.Section>
        </MultipleDropdown>
        <h3>Disabled</h3>
        <MultipleDropdown
          label='Favorite Animal'
          disabledKeys={['cat']}
          placeholder='Choose an animal'
          selectedKeys={value}
          defaultSelectedKeys={['cat']}
          isRequired
          onSelectionChange={(k: Key[]) => setValue(k)}
          isDisabled
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Variant: select</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          defaultSelectedKeys={['cat']}
          variant='select'
          displayedValue='string'
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Errored keys</h3>
        <MultipleDropdown
          label='Favorite Animal'
          defaultSelectedKeys={['red panda', 'cat']}
          erroredKeys={['red panda']}
          isErrored
          errorMessage='Red panda is not available'
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <div style={{height: '20rem'}} />
      </Column>
    </Column>
  )
}
