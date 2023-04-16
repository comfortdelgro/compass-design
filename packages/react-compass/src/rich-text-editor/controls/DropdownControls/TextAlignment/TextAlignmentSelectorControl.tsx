import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
} from '@fortawesome/free-solid-svg-icons'
import {Item} from '@react-stately/collections'
import React from 'react'
import Icon from '../../../../icon'
import {useRichTextEditorContext} from '../../../rich-text-editor.context'
import {TextAlignmentSelector} from './TextAlignmentSelector'

export const TextAlignmentSelectorControl = () => {
  const {editor} = useRichTextEditorContext()
  const handleSelectionChange = (key: React.Key) => {
    editor
      ?.chain()
      .focus()
      .setTextAlign(key as string)
      .run()
  }
  return (
    <TextAlignmentSelector
      onSelectionChange={handleSelectionChange}
      defaultSelectedKey={'left'}
    >
      <Item key={'left'} textValue='left'>
        <Icon className='dropdown-button-icon' icon={faAlignLeft} /> left
      </Item>
      <Item key={'center'} textValue='center'>
        <Icon className='dropdown-button-icon' icon={faAlignCenter} /> center
      </Item>
      <Item key={'right'} textValue='right'>
        <Icon className='dropdown-button-icon' icon={faAlignRight} /> right
      </Item>
      <Item key={'justify'} textValue='justify'>
        <Icon className='dropdown-button-icon' icon={faAlignJustify} /> justify
      </Item>
    </TextAlignmentSelector>
  )
}
