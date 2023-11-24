import {
  Checkbox,
  Tooltip,
  TooltipTrigger,
} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

function BasicExample() {
  const [isSelected, setIsSelected] = useState(false)
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
        <Checkbox
          isSelected={isSelected}
          onChange={() => setIsSelected(!isSelected)}
        >
          Use blue background
        </Checkbox>
      </div>
      <TooltipTrigger>
        <a href='#'>Hover me</a>
        <Tooltip
          title={<p style={{fontSize: '20px', margin: 0}}>Title</p>}
          dismissible
          css={isSelected ? {backgroundColor: '#0142AF'} : {}}
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
