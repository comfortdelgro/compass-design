import {
  Avatar,
  Box,
  Button,
  Calendar,
  Column,
  Dialog,
  Dropdown,
  List,
  MonthYearPicker,
  Radio,
  Textarea,
  Typography,
} from '@comfortdelgro/react-compass'
import Image from 'next/image'
import React from 'react'
import {getStaticPath} from 'utils'

const DialogMobile: React.FC = () => {
  const contents: any = {
    confirmation: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.',
    textArea: (
      <Textarea
        placeholder='e.g. ‘I’m standing near parking bay 2’'
        css={{
          textarea: {
            height: '129px',
          },
        }}
        resizable={false}
      />
    ),
    list: (
      <>
        <List
          title='Title'
          variant='item'
          description='Line 1'
          leftInfo={<Avatar label='A' />}
        />
        <List
          variant='item'
          title='Title'
          description='Line 1'
          leftInfo={<Avatar label='A' />}
        />
      </>
    ),
    calendar: (
      <Calendar
        css={{
          width: '100%',
          table: {
            width: '100%',
          },
          '.calendar-header-left-side button': {
            backgroundColor: 'transparent',
            color: '$cdgBlue100',
            '&.calendar-header-middle': {
              color: '$grayShades100',
            },
          },
        }}
      />
    ),
    avatar: (
      <Box
        css={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        <Avatar
          label='Albert Einstein'
          image='https://i.pravatar.cc/150?u=a0425e81423429026704d'
          size='lg'
          css={{opacity: '0.8', '&:hover': {opacity: '0.5', cursor: 'pointer'}}}
        />
        <Typography.Header>Avatar name</Typography.Header>
        <Typography.Body>Avatar description</Typography.Body>
      </Box>
    ),
    radios: (
      <Radio.Group orientation='vertical'>
        <Radio
          variant='h5'
          label='test'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='1'
          tooltip='This is tooltip'
        />
        <Radio
          variant='h5'
          label='test2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='2'
        />
      </Radio.Group>
    ),
    image: (
      <Image
        src={getStaticPath('/static/images/banner.png')}
        alt='banner'
        sizes='100%'
        width={300}
        height={200}
      />
    ),
    monthYearPicker: (
      <MonthYearPicker
        month={4}
        year={2020}
        css={{'&.wheel__slides .wheel__slide': {width: '80%'}}}
      />
    ),
  }
  const [defaultOpen, setDefaultOpen] = React.useState(false)
  const [type, setType] = React.useState<string>('text')
  return (
    <Column>
      <Dropdown.Select
        isRequired
        label='Dialog content type'
        placeholder='Choose an type'
        value={type}
        onValueChange={(k: string | number) => setType(k.toString())}
      >
        <Dropdown.Item value='confirmation'>Confirmation</Dropdown.Item>
        <Dropdown.Item value='text'>Text</Dropdown.Item>
        <Dropdown.Item value='textArea'>Text Area</Dropdown.Item>
        <Dropdown.Item value='list'>List</Dropdown.Item>
        <Dropdown.Item value='calendar'>Calendar</Dropdown.Item>
        <Dropdown.Item value='avatar'>Avatar</Dropdown.Item>
        <Dropdown.Item value='image'>Image</Dropdown.Item>
        <Dropdown.Item value='monthYearPicker'>Month-Year Picker</Dropdown.Item>
        <Dropdown.Item value='radios'>Radio</Dropdown.Item>
      </Dropdown.Select>
      <Button
        css={{width: '7.8rem'}}
        onPress={() => setDefaultOpen(true)}
        variant='secondary'
      >
        Open Dialog
      </Button>
      <Dialog.Trigger
        isOpen={defaultOpen}
        handleClose={() => setDefaultOpen(false)}
      >
        <Dialog
          css={{
            '&.cdg-dialog-container': {
              width: '343px',
              borderRadius: '$xl',
            },
            '.cdg-dialog-content': {
              gap: '8px',
            },
          }}
        >
          <Dialog.Title
            css={{
              textAlign: 'center',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            Dialog
          </Dialog.Title>
          <Dialog.Description
            css={{
              textAlign: 'center',
            }}
          >
            {contents[type]}
          </Dialog.Description>
          <Dialog.Actions
            css={{
              flexDirection: 'column',
            }}
          >
            <Button
              css={{width: '100%', padding: '12px 24px', borderRadius: '$lg'}}
              onPress={() => setDefaultOpen(false)}
            >
              Do it
            </Button>
            <Button
              css={{width: '100%', padding: '12px 24px', borderRadius: '$lg'}}
              onPress={() => setDefaultOpen(false)}
              variant='secondary'
            >
              Cancel
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    </Column>
  )
}

export default DialogMobile
