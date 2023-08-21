import {Column, Divider, Typography} from '@comfortdelgro/react-compass'

const Align: React.FC = () => {
  return (
    <Column css={{background: 'var(--colors-background)', padding: '1.6rem'}}>
      <Divider textAlign='left'>
        <Typography.Label>Left</Typography.Label>
      </Divider>
      <Divider textAlign='center'>
        <Typography.Label>Center</Typography.Label>
      </Divider>
      <Divider textAlign='right'>
        <Typography.Label>Right</Typography.Label>
      </Divider>
    </Column>
  )
}

export default Align
