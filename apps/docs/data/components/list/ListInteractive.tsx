import {Avatar, InteractiveList} from '@comfortdelgro/react-compass-old'
// import {Avatar as StaticAvatar, InteractiveList as StaticInteractiveList} from '@comfortdelgro/static'

function ListInteractive() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
      }}
    >
      <InteractiveList
        groupLabel={
          <div
            style={{
              width: '84px',
              height: '58px',
              backgroundColor: '#009EDA',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
              color: 'white',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            XXX
          </div>
        }
        avatar={
          <Avatar.Group>
            <Avatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <Avatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <Avatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <Avatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <Avatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <Avatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
          </Avatar.Group>
        }
        title='Title'
        description='Lorem ipsum dolor sit amet'
        css={{width: '315px', height: 'fit-content'}}
      />
      <InteractiveList
        showIcon
        variant='dropdown'
        avatar={
          <Avatar
            image={
              'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
          />
        }
        title='Profile Name'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        css={{width: '315px', height: 'fit-content'}}
      />

      {/* <StaticInteractiveList
        groupLabel={
          <div
            style={{
              width: '84px',
              height: '58px',
              backgroundColor: '#009EDA',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
              color: 'white',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            XXX
          </div>
        }
        avatar={
          <StaticAvatar.Group>
            <StaticAvatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <StaticAvatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <StaticAvatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <StaticAvatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <StaticAvatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
            <StaticAvatar
              image={
                'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
            />
          </StaticAvatar.Group>
        }
        title='Title'
        description='Lorem ipsum dolor sit amet'
        css={{width: '315px', height: 'fit-content'}}
      />
      <StaticInteractiveList
        showIcon
        variant='dropdown'
        avatar={
          <StaticAvatar
            image={
              'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
          />
        }
        title='Profile Name'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        css={{width: '315px', height: 'fit-content'}}
      /> */}
    </div>
  )
}

export default ListInteractive
