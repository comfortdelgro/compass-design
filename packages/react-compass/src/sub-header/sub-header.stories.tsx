import {StoryDecorator} from '@ladle/react'
import React from 'react'
import {Column} from '../utils'
import SubHeader from './index'

export const Default: React.FC = () => {
  return (
    <>
      <Column>
        <SubHeader>
          <SubHeader.Header>
            <SubHeader.Title>Title</SubHeader.Title>
          </SubHeader.Header>
          <SubHeader.Description>Description.</SubHeader.Description>
        </SubHeader>
      </Column>
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
