import {Column, Divider, Typography} from '@comfortdelgro/react-compass'
// import {Divider as StaticDivider} from '@comfortdelgro/static'

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

      {/* <StaticDivider textAlign='left'>
        <Typography.Label>Left</Typography.Label>
      </StaticDivider>
      <StaticDivider textAlign='center'>
        <Typography.Label>Center</Typography.Label>
      </StaticDivider>
      <StaticDivider textAlign='right'>
        <Typography.Label>Right</Typography.Label>
      </StaticDivider> */}
    </Column>
  )
}

export default Align
