import React from 'react'
import {Column} from '../utils/components'
import RichTextEditor from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default Rich Text Editor</h3>
      <RichTextEditor.Default
        content={`<p>Example Text</p>`}
        characterCount={200}
      />
    </Column>
  )
}

export const Cutomized: React.FC = () => {
  return (
    <Column>
      <h3>Cutomized Rich Text Editor</h3>
      <RichTextEditor characterCount={200} css={{listStyleType: 'square'}}>
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
    </Column>
  )
}
