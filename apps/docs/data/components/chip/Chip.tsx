import {Chip, Column, Typography} from '@comfortdelgro/react-compass'

const Default: React.FC = () => {
  return (
    <Column>
      <Typography.Label>Basic Chip</Typography.Label>
      <Chip>Basic Chip</Chip>
      <Typography.Label>Close button</Typography.Label>
      <Chip
        hasCloseButton
        onCloseClick={() => {
          console.log('Close button click')
        }}
      >
        Close button
      </Chip>
      <Typography.Label>Errored Chip</Typography.Label>
      <Chip hasCloseButton isErrored>
        Errored Chip
      </Chip>
      <Typography.Label>Large content</Typography.Label>
      <Chip
        hasCloseButton
        onCloseClick={() => {
          console.log('Close button click')
        }}
        onClick={() => console.log('clicked...')}
        css={{width: '350px'}}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum.
      </Chip>
    </Column>
  )
}

export default Default
