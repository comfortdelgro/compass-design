import {faCode, faRulerHorizontal} from '@fortawesome/free-solid-svg-icons'
import {Item} from '@react-stately/collections'
import React from 'react'
import Icon from '../../../../icon'
import {useRichTextEditorContext} from '../../../rich-text-editor.context'
import {OthersSelector} from './OthersSelector'

type CommandName =
  // | 'toggleSuperscript'
  // | 'toggleSubscript'
  'setHorizontalRule' | 'toggleCodeBlock'
export const OthersControl = () => {
  const {editor} = useRichTextEditorContext()
  const handleSelectionChange = (key: React.Key) => {
    editor?.chain().focus()[key as CommandName]().run()
  }
  return (
    <OthersSelector onSelectionChange={handleSelectionChange}>
      <Item key={'setHorizontalRule'} textValue=''>
        <Icon className='dropdown-button-icon' icon={faRulerHorizontal} />{' '}
        horizontal rule
      </Item>
      <Item key={'toggleCodeBlock'} textValue=''>
        <Icon className='dropdown-button-icon' icon={faCode} /> code block
      </Item>
    </OthersSelector>
  )
}
