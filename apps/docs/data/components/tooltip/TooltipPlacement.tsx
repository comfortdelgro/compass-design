import {
  Dropdown,
  Placement,
  Tooltip,
  TooltipTrigger,
} from '@comfortdelgro/react-compass'
import React from 'react'

function BasicExample() {
  const [currentPlacement, setCurrentPlacement] =
    React.useState<Placement>('bottom')
  return (
    <>
      <div
        className='sample-options'
        style={{
          marginBottom: '30px',
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-start',
        }}
      >
        <Dropdown.Select
          label='Select placement'
          placeholder='Select tooltip placement'
          value={currentPlacement}
          onValueChange={(value: string | number) =>
            setCurrentPlacement(value.toString() as Placement)
          }
          css={{width: '180px'}}
        >
          <Dropdown.Item value='bottom'>Bottom</Dropdown.Item>
          <Dropdown.Item value='bottom-end'>Bottom End</Dropdown.Item>
          <Dropdown.Item value='bottom-start'>Bottom Start</Dropdown.Item>
          <Dropdown.Item value='left'>Left</Dropdown.Item>
          <Dropdown.Item value='left-end'>Left End</Dropdown.Item>
          <Dropdown.Item value='left-start'>Left Start</Dropdown.Item>
          <Dropdown.Item value='right'>Right</Dropdown.Item>
          <Dropdown.Item value='right-end'>Right End</Dropdown.Item>
          <Dropdown.Item value='right-start'>Right Start</Dropdown.Item>
          <Dropdown.Item value='top'>Top</Dropdown.Item>
          <Dropdown.Item value='top-end'>Top End</Dropdown.Item>
          <Dropdown.Item value='top-start'>Top Start</Dropdown.Item>
        </Dropdown.Select>
      </div>
      <TooltipTrigger placement={currentPlacement}>
        <a href='#'>Hover me</a>
        <Tooltip
          title={<p style={{fontSize: '20px', margin: 0}}>Title</p>}
          dismissible
          css={{backgroundColor: 'black'}}
        >
          <p style={{margin: '16px 0'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            blanditiis laborum commodi mollitia officiis minus ipsum totam fuga
            odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto
            deleniti. Quia, modi
          </p>
        </Tooltip>
      </TooltipTrigger>
    </>
  )
}

export default BasicExample
