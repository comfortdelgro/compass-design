import {Column, Divider} from '@comfortdelgro/react-compass-old'
// import {Divider as StaticDivider} from '@comfortdelgro/static'

const Basic: React.FC = () => {
  return (
    <Column
      css={{
        alignItems: 'center',
        background: 'var(--colors-background)',
        padding: '1.6rem',
      }}
    >
      <Divider />
      <div style={{height: 200}}>
        <Divider orientation='vertical'></Divider>
      </div>

      {/* <StaticDivider />
      <div style={{height: 200}}>
        <StaticDivider orientation='vertical'></StaticDivider>
      </div> */}
    </Column>
  )
}

export default Basic
