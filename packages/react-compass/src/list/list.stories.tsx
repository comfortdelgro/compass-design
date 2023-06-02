import {faAddressBook, faClone} from '@fortawesome/free-regular-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {StoryDecorator} from '@ladle/react'
import React, {Key} from 'react'
import Avatar from '../avatar'
import AvatarGroup from '../avatar/avatar-group'
import Badge from '../badge'
import {Column} from '../utils/components'
import {DragAndDropList} from './index'
import InteractiveList from './interactive-list'
import List from './list'
import ListCard from './list-card'
import ListCardDetail from './list-card-detail'
import ListImage from './list-image'

const imgSrc =
  'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const wrapperStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '24px 12px',
  marginBottom: '12px',
}

export const Variants: React.FC = () => {
  return (
    <Column>
      <div style={wrapperStyle}>
        <Column>
          <List
            title='Title'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
            rightInfo={{text: 'Details'}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
          />
        </Column>

        <Column>
          <List
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
            rightInfo={{text: 'Details'}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
          />
        </Column>

        <Column>
          <List
            title='Title'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
            rightInfo={{text: 'Details'}}
          />
          <List
            title='Title'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
          />
        </Column>

        <Column>
          <List
            title='Title'
            description='Line 1'
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            title='Title'
            description='Line 1'
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            title='Title'
            description='Line 1'
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            title='Title'
            description='Line 1'
            rightInfo={{text: 'Details'}}
          />
          <List title='Title' description='Line 1' />
        </Column>

        <Column>
          <List
            isDisabled
            title='Title'
            description='Line 1'
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            isDisabled
            title='Title'
            description='Line 1'
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            isDisabled
            title='Title'
            description='Line 1'
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            isDisabled
            title='Title'
            description='Line 1'
            rightInfo={{text: 'Details'}}
          />
          <List isDisabled title='Title' description='Line 1' />
        </Column>

        <Column>
          <List
            size='sm'
            leftInfo={<FontAwesomeIcon icon={faClone} />}
            title='Title'
            description='Lorem Ipsum'
            css={{maxWidth: '198px'}}
          />
          <List
            size='sm'
            isDisabled
            leftInfo={<FontAwesomeIcon icon={faClone} />}
            title='Title'
            description='Lorem Ipsum'
            css={{maxWidth: '198px'}}
          />
        </Column>
      </div>
      <div style={wrapperStyle}>
        <Column>
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
            rightInfo={{text: 'Details'}}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<Avatar label='A' />}
          />
        </Column>

        <Column>
          <List
            variant='item'
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            variant='item'
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            variant='item'
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            variant='item'
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
            rightInfo={{text: 'Details'}}
          />
          <List
            variant='item'
            title='Title'
            description='Line 1'
            leftInfo={<ListImage src={imgSrc} alt='singapore' />}
          />
        </Column>

        <Column>
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
            rightInfo={{text: 'Details'}}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            leftInfo={<FontAwesomeIcon icon={faAddressBook} />}
          />
        </Column>

        <Column>
          <List
            title='Title'
            variant='item'
            description='Line 1'
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            title='Title'
            variant='item'
            description='Line 1'
            rightInfo={{text: 'Details'}}
          />
          <List title='Title' variant='item' description='Line 1' />
        </Column>

        <Column>
          <List
            isDisabled
            variant='item'
            title='Title'
            description='Line 1'
            rightInfo={{
              text: 'Details',
              icon: <FontAwesomeIcon icon={faChevronRight} />,
            }}
          />
          <List
            isDisabled
            variant='item'
            title='Title'
            description='Line 1'
            rightInfo={{icon: <FontAwesomeIcon icon={faChevronRight} />}}
          />
          <List
            isDisabled
            variant='item'
            title='Title'
            description='Line 1'
            rightInfo={{icon: <Badge color='danger' label='+99' />}}
          />
          <List
            isDisabled
            variant='item'
            title='Title'
            description='Line 1'
            rightInfo={{text: 'Details'}}
          />
          <List variant='item' isDisabled title='Title' description='Line 1' />
        </Column>
      </div>
    </Column>
  )
}

export const ListCards: React.FC = () => {
  return (
    <Column>
      <h3>Without details</h3>
      <ListCard
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
      />
      <ListCard
        title='Lorem Ipsum'
        showActionButton
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
      />
      <ListCard
        title='Lorem Ipsum'
        isDisabled
        showActionButton
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
      />
      <h3>With details (Avatar)</h3>
      <ListCard
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
      >
        <ListCardDetail
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
        css={{width: '347px'}}
      >
        <ListCardDetail
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
        css={{width: '347px'}}
      >
        <ListCardDetail
          title='Detail 1'
          avatar={<Avatar label='A' />}
          description='Lorem Ipsum'
        />
        <ListCardDetail
          title='Detail 1'
          avatar={<Avatar label='A' />}
          description='Lorem Ipsum'
        />
      </ListCard>
      <ListCard
        isDisabled
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
      >
        <ListCardDetail
          title='Detail 1'
          avatar={<Avatar label='A' />}
          description='Lorem Ipsum'
        />
      </ListCard>
      <h3>With details (Avatar Group)</h3>
      <ListCard
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
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
      </ListCard>
      <ListCard
        title='Lorem Ipsum'
        showActionButton
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
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
      <ListCard
        showActionButton
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
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
          avatar={<Avatar label='A' />}
          description='Lorem Ipsum'
        />
      </ListCard>
      <ListCard
        isDisabled
        showActionButton
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
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
    </Column>
  )
}

export const InteractiveLists: React.FC = () => {
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

  return (
    <Column>
      <div style={wrapperStyle}>
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
          groupLabel={GroupLabel}
          title='Title'
          description='Lorem ipsum dolor sit amet'
          css={{width: '315px', height: 'fit-content'}}
        />
        <InteractiveList
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
          css={{width: '315px', height: 'fit-content'}}
        />
        <InteractiveList
          groupLabel={GroupLabel}
          title='Title'
          css={{width: '315px', height: 'fit-content'}}
        />
        <InteractiveList
          title='Title'
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
          css={{width: '315px', height: 'fit-content'}}
        />
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
          description='Lorem ipsum dolor sit amet'
          css={{width: '315px', height: 'fit-content'}}
        />
        <InteractiveList
          groupLabel={GroupLabel}
          description='Lorem ipsum dolor sit amet'
          css={{width: '315px', height: 'fit-content'}}
        />
        <InteractiveList
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
          description='Lorem ipsum dolor sit amet'
          css={{width: '315px', height: 'fit-content'}}
        />
      </div>
      <div style={wrapperStyle}>
        <InteractiveList
          variant='dropdown'
          avatar={<Avatar image={imgSrc} />}
          title='Profile Name'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          css={{width: '315px', height: 'fit-content'}}
        />
        <InteractiveList
          variant='dropdown'
          title='Profile Name'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          css={{width: '315px', height: 'fit-content'}}
        />
        <InteractiveList
          showIcon
          variant='dropdown'
          avatar={<Avatar image={imgSrc} />}
          title='Profile Name'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          css={{width: '315px', height: 'fit-content'}}
        />
        <InteractiveList
          showIcon
          variant='dropdown'
          title='Profile Name'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          css={{width: '315px', height: 'fit-content'}}
        />
      </div>
    </Column>
  )
}

export const DragAndDrop: React.FC = () => {
  const [arr, setArr] = React.useState<Key[]>(['red', 'green', 'blue'])
  return (
    <DragAndDropList onReorderByKeys={(a) => setArr(a)}>
      {arr.map((a) => (
        <DragAndDropList.Item key={a}>
          <div>{a}</div>
        </DragAndDropList.Item>
      ))}
    </DragAndDropList>
  )
}

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
