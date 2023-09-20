import {RichTextEditor} from '@comfortdelgro/react-compass'

const Placeholder: React.FC = () => {
  return (
    <RichTextEditor placeholder='Type something...'>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
          <RichTextEditor.H5 />
          <RichTextEditor.H6 />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignRight />
          <RichTextEditor.AlignJustify />
        </RichTextEditor.ControlsGroup>
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
        <RichTextEditor.Undo />
        <RichTextEditor.Redo />
      </RichTextEditor.Toolbar>
    </RichTextEditor>
  )
}

export default Placeholder
