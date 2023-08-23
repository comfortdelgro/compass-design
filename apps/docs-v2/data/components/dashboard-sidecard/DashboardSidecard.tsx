import {Avatar, Button, DashboardSidecard} from '@comfortdelgro/react-compass'

const Default: React.FC = () => {
  return (
    <DashboardSidecard>
      <DashboardSidecard.Header>My header</DashboardSidecard.Header>
      <DashboardSidecard.Content>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic
            quae, adipisci tempore minus beatae itaque tenetur.
          </div>
          <Avatar.Group display={3} size='sm'>
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a042581f4e29026704d'
              size='sm'
            />
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a0581f4e29d026704d'
              size='sm'
            />
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a042581f4e429026704d'
              size='sm'
            />
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a042581f4e42239026704d'
              size='sm'
            />
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a0425e81f4234e429026704d'
              size='sm'
            />
          </Avatar.Group>
        </div>
      </DashboardSidecard.Content>
      <DashboardSidecard.Content>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic
            quae, adipisci tempore minus beatae itaque tenetur.
          </div>
          <Avatar.Group display={3} size='sm'>
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a042581f4e29026704d'
              size='sm'
            />
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a0581f4e29d026704d'
              size='sm'
            />
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a042581f4e429026704d'
              size='sm'
            />
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a042581f4e42239026704d'
              size='sm'
            />
            <Avatar
              label='Albert Einstein'
              image='https://i.pravatar.cc/150?u=a0425e81f4234e429026704d'
              size='sm'
            />
          </Avatar.Group>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            className='c-hKssGC-hYGuEl-variant-primary'
            css={{width: '48%'}}
          >
            Action
          </Button>
          <Button variant='danger' css={{width: '48%'}}>
            Warning
          </Button>
        </div>
      </DashboardSidecard.Content>
    </DashboardSidecard>
  )
}

export default Default