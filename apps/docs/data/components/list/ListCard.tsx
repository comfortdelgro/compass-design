import {Avatar, Badge, ListCard} from '@comfortdelgro/react-compass'
// import {ListCard as StaticListCard, Avatar as StaticAvatar} from '@comfortdelgro/static'

function ListCardExmaple() {
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
      <ListCard
        showActionButton
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px', border: '$blueShades120 1px solid'}}
      >
        <ListCard.Detail
          title='Detail 1'
          avatar={<Avatar label='A' />}
          description='Lorem Ipsum'
        />
        <ListCard.Detail
          title='Detail 1'
          avatar={<Avatar label='A' />}
          description='Lorem Ipsum'
        />
      </ListCard>
      <ListCard
        showActionButton
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px', border: '$blueShades120 1px solid'}}
      >
        <ListCard.Detail
          title='Detail 1'
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
        />
        <ListCard.Detail
          title='Detail 1'
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
        />
      </ListCard>

      {/* <StaticListCard
        showActionButton
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px', border: 'var(--cdg-color-blueShades120) 1px solid'}}
      >
        <StaticListCard.Detail
          title='Detail 1'
          avatar={<StaticAvatar label='A' />}
          description='Lorem Ipsum'
        />
        <StaticListCard.Detail
          title='Detail 1'
          avatar={<StaticAvatar label='A' />}
          description='Lorem Ipsum'
        />
      </StaticListCard>
      <StaticListCard
        showActionButton
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px', border: 'var(--cdg-color-blueShades120) 1px solid'}}
      >
        <StaticListCard.Detail
          title='Detail 1'
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
        />
        <StaticListCard.Detail
          title='Detail 1'
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
        />
      </StaticListCard> */}
    </div>
  )
}

export default ListCardExmaple
