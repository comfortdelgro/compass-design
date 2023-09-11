import React from 'react'
import { Column } from '../utils/components'
import Chip from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Basic Chip</h3>
      <Chip>Basic Chip</Chip>
      <h3>Close button</h3>
      <Chip
        hasCloseButton
        onCloseClick={() => {
          console.log('Close button click')
        }}
        onClick={() => console.log('clicked...')}
      >
        Close button
      </Chip>
      <h3>Errored Chip</h3>
      <Chip hasCloseButton isErrored>
        Errored Chip
      </Chip>
      <h3>Large content</h3>
      <Chip
        hasCloseButton
        onCloseClick={() => {
          console.log('Close button click')
        }}
        onClick={() => console.log('clicked...')}
        style={{ maxWidth: '350px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.
      </Chip>
    </Column>
  )
}
