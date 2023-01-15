import React from 'react'
import {Column} from '../utils/components'
import RichTextEditor from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default Rich Text Editor</h3>
      <RichTextEditor />
    </Column>
  )
}

// export default {
//   decorators: [
//     (Component) => (
//       <div>
//         <style
//           dangerouslySetInnerHTML={{
//             __html: `.ladle-main { background: #f0eded; }`,
//           }}
//         ></style>
//         <Component />
//       </div>
//     ),
//   ] as StoryDecorator[],
// }
