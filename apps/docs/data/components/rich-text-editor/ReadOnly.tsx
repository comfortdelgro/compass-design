import {Content, RichTextEditor} from '@comfortdelgro/react-compass-old'

const content: Content = `
    <h1>What is Lorem Ipsum?</h1>
    <h2>What is Lorem Ipsum?</h2>
    <h3>What is Lorem Ipsum?</h3>
    <h4>What is Lorem Ipsum?</h4>
    <h5>What is Lorem Ipsum?</h5>
    <h6>What is Lorem Ipsum?</h6>
          <p>
            <strong>Lorem Ipsum</strong>
            <span>
              is simply dummy <sup>text</sup> of the <sub>printing and typesetting</sub> industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. </span
            >
          </p>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"
            contenteditable="false"
            draggable="true"
            class=""
          />
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ol>
    `
const WithContentReadOnly: React.FC = () => {
  return (
    <RichTextEditor content={content} isEditable={false}>
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

export default WithContentReadOnly
