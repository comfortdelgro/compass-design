import {Tooltip, TooltipTrigger} from '@comfortdelgro/react-compass'

function TitleExample() {
  return (
    <TooltipTrigger>
      <a href='#'>Hover me</a>
      <Tooltip
        title={<p style={{fontSize: '20px', margin: 0}}>Title</p>}
        dismissible
      >
        <p style={{marginTop: 0}}>Tooltip</p>
      </Tooltip>
    </TooltipTrigger>
  )
}

export default TitleExample
