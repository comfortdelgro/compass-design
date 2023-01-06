import {Column} from '../utils/components'
import File from './index'

export const States: React.FC = () => (
  <Column>
    <h4>Close</h4>
    <div style={{width: '100%'}}>
      <File.State fileName='Filename.png' icon='close' />
    </div>
    <h4>Error</h4>
    <div style={{width: '100%'}}>
      <File.State fileName='Filename.png' icon='error' />
    </div>
    <h4>Success</h4>
    <div style={{width: '100%'}}>
      <File.State fileName='Filename.png' icon='success' />
    </div>
    <h4>Download</h4>
    <div style={{width: '100%'}}>
      <File.State fileName='Filename.png' icon='download' />
    </div>
    <h4>Loading</h4>
    <div style={{width: '100%'}}>
      <File.State fileName='Filename.png' icon='loading' />
    </div>
  </Column>
)

export const Previews: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <File.Preview
        fileName='Filename.png'
        imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
      />
    </div>
  </Column>
)
