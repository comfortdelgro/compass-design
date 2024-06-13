import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import type {Meta} from '@storybook/react'
import React from 'react'
import Avatar from '../avatar'
import AvatarGroup from '../avatar/avatar-group'
import List, {DragAndDropList, InteractiveList} from './index'
import ListCard from './list-card'
import ListCardDetail from './list-card-detail'
import ListImage from './list-image'

const imgSrc =
  'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

export const Variants: React.FC = () => {
  return (
    <>
      <div style={{width: 300}}>
        <h3>Interactive</h3>
        <List
          title='Title'
          description='Line 1'
          leftInfo={<ListImage src={imgSrc} alt='singapore' />}
          rightInfo={{
            text: 'Details',
            icon: <ArrowRight />,
          }}
        />
      </div>

      <div style={{width: 300}}>
        <h3>Item</h3>
        <List
          title='Title'
          variant='item'
          description='Line 1 adasdsadasdasdas'
          leftInfo={<Avatar label='A' />}
          rightInfo={{
            text: 'Details',
            icon: <ArrowRight />,
          }}
        />
      </div>

      <div style={{width: 300}}>
        <h3>Interactive Disabled</h3>
        <List
          isDisabled
          title='Title'
          description='Line 1'
          leftInfo={<ListImage src={imgSrc} alt='singapore' />}
          rightInfo={{
            text: 'Details',
            icon: <ArrowRight />,
          }}
        />
      </div>

      <div style={{width: 300}}>
        <h3>Item Disabled</h3>
        <List
          isDisabled
          title='Title'
          variant='item'
          description='Line 1 adasdsadasdasdas'
          leftInfo={<Avatar label='A' />}
          rightInfo={{
            text: 'Details',
            icon: <ArrowRight />,
          }}
        />
      </div>
    </>
  )
}

export const Size: React.FC = () => {
  return (
    <div style={{width: 300}}>
      <h3>SM</h3>
      <List
        size='sm'
        leftInfo={<ArrowRight />}
        title='Title'
        description='Lorem Ipsum'
        css={{maxWidth: '198px'}}
      />
      <List
        size='sm'
        isDisabled
        leftInfo={<ArrowRight />}
        title='Title'
        description='Lorem Ipsum'
        css={{maxWidth: '198px'}}
      />
    </div>
  )
}

export const ListCards: React.FC = () => {
  return (
    <div style={{width: 300}}>
      <h3>SM</h3>
      <ListCard
        showActionButton
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<ListImage src={imgSrc} alt='singapore' />}
        css={{width: '347px', backgroundColor: '$background'}}
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
        title='Lorem Ipsum'
        showActionButton
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<ListImage src={imgSrc} alt='singapore' />}
        css={{width: '347px', backgroundColor: '$background'}}
      >
        <ListCardDetail
          title='Detail 1'
          avatar={
            <AvatarGroup>
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
            </AvatarGroup>
          }
        />
        <ListCardDetail
          title='Detail 1'
          avatar={
            <AvatarGroup>
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
            </AvatarGroup>
          }
        />
      </ListCard>
    </div>
  )
}

const GroupLabel = (
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
)

export const InteractiveLists: React.FC = () => {
  return (
    <div style={{width: 300}}>
      <InteractiveList
        groupLabel={GroupLabel}
        avatar={
          <AvatarGroup>
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
          </AvatarGroup>
        }
        title='Title'
        description='Lorem ipsum dolor sit amet'
        css={{width: '315px', height: 'fit-content'}}
      />

      <InteractiveList
        showIcon
        variant='dropdown'
        avatar={<Avatar image={imgSrc} />}
        title='Profile Name'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      />
    </div>
  )
}

export const DragAndDrops: React.FC = () => {
  const [arr, setArr] = React.useState<React.Key[]>(['red', 'green', 'blue'])
  return (
    <div style={{width: 400}}>
      <DragAndDropList onReorderByKeys={(a) => setArr(a)}>
        {arr.map((a) => (
          <DragAndDropList.Item key={a}>
            <ListCard
              title={String(a)}
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              style={{background: 'white'}}
            />
          </DragAndDropList.Item>
        ))}
      </DragAndDropList>
    </div>
  )
}

const meta = {
  title: 'Example/List ',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
