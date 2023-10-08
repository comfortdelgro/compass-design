import type {Meta} from '@storybook/react'
import RichTextEditor from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

export const Basic: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Basic Rich Text Editor</h3>
      <RichTextEditor>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.HeadingsControl />
          <RichTextEditor.ColorControl />
          <RichTextEditor.TextAlginmentSelector />
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
          <RichTextEditor.Image />
          <RichTextEditor.Superscript />
          <RichTextEditor.Subscript />
          <RichTextEditor.Hr />
          <RichTextEditor.CodeBlock />
          <RichTextEditor.Blockquote />
        </RichTextEditor.Toolbar>
      </RichTextEditor>
    </div>
  )
}

const meta = {
  title: 'Example/Rich Text Editor Server',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
