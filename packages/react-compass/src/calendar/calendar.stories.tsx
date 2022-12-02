import {StoryDecorator} from '@ladle/react'
import React from 'react'

export const Variants: React.FC = () => {
  return <></>
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
