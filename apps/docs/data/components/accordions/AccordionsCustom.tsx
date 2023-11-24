import {Accordion} from '@comfortdelgro/react-compass-old'

function CustomizedColors() {
  return (
    <Accordion
      defaultExpand={true}
      css={{background: 'Wheat', color: 'SaddleBrown'}}
    >
      <Accordion.Title
        css={{
          background: 'burlywood',
          textAlign: 'center',
          color: 'currentColor',
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
        officiis Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quasi, officiis
      </Accordion.Title>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, officiis
    </Accordion>
  )
}

export default CustomizedColors
