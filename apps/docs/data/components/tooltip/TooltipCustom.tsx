import {Tooltip, TooltipTrigger} from '@comfortdelgro/react-compass'

function BasicExample() {
  return (
    <TooltipTrigger>
      <a href='#'>Hover me</a>
      <Tooltip
        title={<p style={{fontSize: '20px', margin: 0}}>Title</p>}
        dismissible
      >
        <p style={{margin: '16px 0'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          blanditiis laborum commodi mollitia officiis minus ipsum totam fuga
          odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto
          deleniti. Quia, modi
        </p>
      </Tooltip>
    </TooltipTrigger>
  )
}

export default BasicExample
