import {Group} from '../avatar/avatar.stories'
import Button from '../button'
import SearchField from '../searchfield'
import {Column} from '../utils/components'
import DashboardSidecard from './index'

export const Default: React.FC = () => {
  const Card = (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '100%',
        height: '11rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{fontWeight: '500', fontSize: '1.2em'}}>Title</div>
      <div
        style={{
          fontSize: '0.8em',
          textAlign: 'justify',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic quae,
        adipisci tempore minus beatae itaque tenetur.
      </div>
      <Group />
    </div>
  )
  return (
    <Column>
      <h3>Default</h3>
      <DashboardSidecard>
        <DashboardSidecard.Header>My header</DashboardSidecard.Header>
        <DashboardSidecard.Content>
          {Card}
          {Card}
          <SearchField css={{width: '100%'}} />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button css={{width: '48%'}}>Action</Button>
            <Button variant='danger' css={{width: '48%'}}>
              Warning
            </Button>
          </div>
        </DashboardSidecard.Content>
      </DashboardSidecard>
    </Column>
  )
}
