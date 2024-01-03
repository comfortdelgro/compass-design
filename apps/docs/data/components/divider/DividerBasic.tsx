import {Column, Divider} from '@comfortdelgro/react-compass'

const Basic: React.FC = () => {
  return (
    <Column
      css={{
        alignItems: 'center',
        background: 'var(--cdg-color-background)',
        padding: '1.6rem',
      }}
    >
      <Divider />
      <div style={{height: 200}}>
        <Divider orientation='vertical'></Divider>
      </div>
    </Column>
  )
}

export default Basic
