import {Dropdown, Layout, NinePartAlignment} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export const LayoutAlignment = () => {
  const [alignment, setAlignment] = useState<NinePartAlignment>('start-start')

  const handleSelectAlignment = (key: any) => {
    setAlignment(key as NinePartAlignment)
  }

  return (
    <>
      <div>
        <div style={{width: '300px', marginBottom: '20px'}}>
          <Dropdown.Select
            label='Select alignment'
            placeholder='Select alignment'
            onSelectionChange={handleSelectAlignment}
          >
            <Dropdown.Item key='start-start'>start-start</Dropdown.Item>
            <Dropdown.Item key='center-start'>center-start</Dropdown.Item>
            <Dropdown.Item key='end-start'>end-start</Dropdown.Item>
            <Dropdown.Item key='start-center'>start-center</Dropdown.Item>
            <Dropdown.Item key='center-center'>center-center</Dropdown.Item>
            <Dropdown.Item key='end-center'>end-center</Dropdown.Item>
            <Dropdown.Item key='start-end'>start-end</Dropdown.Item>
            <Dropdown.Item key='center-end'>center-end</Dropdown.Item>
            <Dropdown.Item key='end-end'>end-end</Dropdown.Item>
          </Dropdown.Select>
        </div>
        <Layout
          direction='row'
          align={alignment}
          className='sample-layout'
          css={{height: '100px'}}
        >
          Sample content
        </Layout>
      </div>
    </>
  )
}
