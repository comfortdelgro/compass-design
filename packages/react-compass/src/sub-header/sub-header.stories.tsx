import {StoryDecorator} from '@ladle/react'
import React from 'react'
import {Column} from '../utils'
import SubHeader from './index'

export const Default: React.FC = () => {
  return (
    <>
      <h3>Default</h3>
      <Column>
        <SubHeader>
          <SubHeader.Header>
            <SubHeader.Title>Title</SubHeader.Title>
          </SubHeader.Header>
          <SubHeader.Description>Description.</SubHeader.Description>
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
