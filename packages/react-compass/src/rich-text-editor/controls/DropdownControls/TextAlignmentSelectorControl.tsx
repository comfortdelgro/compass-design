import React from 'react'
import { useRichTextEditorContext } from '../../rich-text-editor.context'
import Select from '../../select'

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
    <Select
      onSelectionChange={handleSelectionChange}
      defaultSelectedKey={'left'}
      type='alignment'
      css={{
        width: '56px',
        height: '28px',
        float: 'left',
        button: {
          color: '$gray110',
        },
      }}
    >
      <Select.Item
        key={'left'}
        renderAs={
          <svg
            className='dropdown-button-icon'
            viewBox='0 0 448 512'
            style={{height: 18}}
          >
            <path
              fill='currentColor'
              d='M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
            />
          </svg>
        }
      >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <svg
            className='dropdown-button-icon'
            viewBox='0 0 448 512'
            style={{height: 18, marginRight: 4}}
          >
            <path
              fill='currentColor'
              d='M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
            />
          </svg>
          Left
        </div>
      </Select.Item>
      <Select.Item
        key={'center'}
        renderAs={
          <svg
            className='dropdown-button-icon'
            viewBox='0 0 448 512'
            style={{height: 18}}
          >
            <path
              fill='currentColor'
              d='M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z'
            />
          </svg>
        }
      >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <svg
            className='dropdown-button-icon'
            viewBox='0 0 448 512'
            style={{height: 18, marginRight: 4}}
          >
            <path
              fill='currentColor'
              d='M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z'
            />
          </svg>
          Center
        </div>
      </Select.Item>
      <Select.Item
        key={'right'}
        renderAs={
          <svg
            className='dropdown-button-icon'
            viewBox='0 0 448 512'
            style={{height: 18}}
          >
            <path
              fill='currentColor'
              d='M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
            />
          </svg>
        }
      >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <svg
            className='dropdown-button-icon'
            viewBox='0 0 448 512'
            style={{height: 18, marginRight: 4}}
          >
            <path
              fill='currentColor'
              d='M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
            />
          </svg>
          Right
        </div>
      </Select.Item>
      <Select.Item
        key={'justify'}
        renderAs={
          <svg
            className='dropdown-button-icon'
            viewBox='0 0 448 512'
            style={{height: 18}}
          >
            <path
              fill='currentColor'
              d='M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z'
            />
          </svg>
        }
      >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <svg
            className='dropdown-button-icon'
            viewBox='0 0 448 512'
            style={{height: 18, marginRight: 4}}
          >
            <path
              fill='currentColor'
              d='M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z'
            />
          </svg>
          Justify
        </div>
      </Select.Item>
    </Select>
  )
}
