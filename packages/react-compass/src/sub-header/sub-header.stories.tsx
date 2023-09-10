import {StoryDecorator} from '@ladle/react'
import React from 'react'
import Button from '../button'
import {Column, Row} from '../utils'
import SubHeader from './index'

export const Default: React.FC = () => {
  return (
    <>
      <Column css={{marginBottom: '$8'}}>
        <h3>Default</h3>
        <SubHeader>
          <SubHeader.Header>
            <SubHeader.Title>Title</SubHeader.Title>
          </SubHeader.Header>
          <SubHeader.Description>Description.</SubHeader.Description>
        </SubHeader>

        <h3>With actions</h3>
        <SubHeader
          variant='h5'
          css={{
            '@mobile': {
              flexDirection: 'column',
              alignItems: 'unset',
            },
          }}
        >
          <Column css={{flex: 1}}>
            <SubHeader.Header>
              <SubHeader.Title>Title</SubHeader.Title>
            </SubHeader.Header>
            <SubHeader.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              harum quaerat earum vitae veritatis molestiae vel commodi iste
              tempore magni, officia eaque repudiandae pariatur voluptate
              maiores debitis sed, reprehenderit assumenda.
            </SubHeader.Description>
          </Column>
          <Row css={{width: 'fit-content', flexWrap: 'wrap'}}>
            <Button type='button' size='sm'>
              Call to action
            </Button>
            <Button type='button' variant='secondary' size='sm'>
              Call to action
            </Button>
          </Row>
        </SubHeader>
      </Column>

      <h3>H5</h3>
      <div
        style={{
          position: 'relative',
          width: 375,
          height: 500,
          backgroundColor: '#f4f4f4',
          border: '1px solid #f0f0f0',
        }}
      >
        <Column>
          <SubHeader variant='h5'>
            <SubHeader.Body>
              <SubHeader.Header>
                <SubHeader.Title variant='h5'>Main Title</SubHeader.Title>
              </SubHeader.Header>
              <SubHeader.Description variant='h5'>
                First line description! <br />
                Second line description!
              </SubHeader.Description>
            </SubHeader.Body>
            <SubHeader.Image src='https://i.ibb.co/Tr9kWZ9/Image.png' />
          </SubHeader>
        </Column>
      </div>
    </>
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
