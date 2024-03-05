import {Editor} from '@tiptap/react'
import React from 'react'
import {useRichTextEditorContext} from '../../rich-text-editor.context'
import Select from '../../select'

const textAlignment = [
  {
    key: 'left',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10 1.38182V2.4C10 2.61086 9.83209 2.78182 9.625 2.78182H1.375C1.16791 2.78182 1 2.61086 1 2.4V1.38182C1 1.17096 1.16791 1 1.375 1H9.625C9.83209 1 10 1.17096 10 1.38182ZM1.375 6.85455H14.625C14.8321 6.85455 15 6.68359 15 6.47273V5.45455C15 5.24369 14.8321 5.07273 14.625 5.07273H1.375C1.16791 5.07273 1 5.24369 1 5.45455V6.47273C1 6.68359 1.16791 6.85455 1.375 6.85455ZM1.375 15H14.625C14.8321 15 15 14.829 15 14.6182V13.6C15 13.3891 14.8321 13.2182 14.625 13.2182H1.375C1.16791 13.2182 1 13.3891 1 13.6V14.6182C1 14.829 1.16791 15 1.375 15ZM9.625 9.14545H1.375C1.16791 9.14545 1 9.31641 1 9.52727V10.5455C1 10.7563 1.16791 10.9273 1.375 10.9273H9.625C9.83209 10.9273 10 10.7563 10 10.5455V9.52727C10 9.31641 9.83209 9.14545 9.625 9.14545Z'
          fill='currentColor'
        />
      </svg>
    ),
    text: 'Left',
  },
  {
    key: 'center',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 1.38182V2.4C12 2.61086 11.8321 2.78182 11.625 2.78182H4.375C4.16791 2.78182 4 2.61086 4 2.4V1.38182C4 1.17096 4.16791 1 4.375 1H11.625C11.8321 1 12 1.17096 12 1.38182ZM1.375 6.85455H14.625C14.8321 6.85455 15 6.68359 15 6.47273V5.45455C15 5.24369 14.8321 5.07273 14.625 5.07273H1.375C1.16791 5.07273 1 5.24369 1 5.45455V6.47273C1 6.68359 1.16791 6.85455 1.375 6.85455ZM1.375 15H14.625C14.8321 15 15 14.829 15 14.6182V13.6C15 13.3891 14.8321 13.2182 14.625 13.2182H1.375C1.16791 13.2182 1 13.3891 1 13.6V14.6182C1 14.829 1.16791 15 1.375 15ZM11.625 9.14545H4.375C4.16791 9.14545 4 9.31641 4 9.52727V10.5455C4 10.7563 4.16791 10.9273 4.375 10.9273H11.625C11.8321 10.9273 12 10.7563 12 10.5455V9.52727C12 9.31641 11.8321 9.14545 11.625 9.14545Z'
          fill='currentColor'
        />
      </svg>
    ),
    text: 'Center',
  },
  {
    key: 'right3',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6 2.4V1.38182C6 1.17096 6.16791 1 6.375 1H14.625C14.8321 1 15 1.17096 15 1.38182V2.4C15 2.61086 14.8321 2.78182 14.625 2.78182H6.375C6.16791 2.78182 6 2.61086 6 2.4ZM1.375 6.85455H14.625C14.8321 6.85455 15 6.68359 15 6.47273V5.45455C15 5.24369 14.8321 5.07273 14.625 5.07273H1.375C1.16791 5.07273 1 5.24369 1 5.45455V6.47273C1 6.68359 1.16791 6.85455 1.375 6.85455ZM1.375 15H14.625C14.8321 15 15 14.829 15 14.6182V13.6C15 13.3891 14.8321 13.2182 14.625 13.2182H1.375C1.16791 13.2182 1 13.3891 1 13.6V14.6182C1 14.829 1.16791 15 1.375 15ZM6.375 10.9273H14.625C14.8321 10.9273 15 10.7563 15 10.5455V9.52727C15 9.31641 14.8321 9.14545 14.625 9.14545H6.375C6.16791 9.14545 6 9.31641 6 9.52727V10.5455C6 10.7563 6.16791 10.9273 6.375 10.9273Z'
          fill='currentColor'
        />
      </svg>
    ),
    text: 'Right',
  },
  {
    key: 'justify',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 2.4V1.38182C1 1.17096 1.16791 1 1.375 1H14.625C14.8321 1 15 1.17096 15 1.38182V2.4C15 2.61086 14.8321 2.78182 14.625 2.78182H1.375C1.16791 2.78182 1 2.61086 1 2.4ZM1.375 6.85455H14.625C14.8321 6.85455 15 6.68359 15 6.47273V5.45455C15 5.24369 14.8321 5.07273 14.625 5.07273H1.375C1.16791 5.07273 1 5.24369 1 5.45455V6.47273C1 6.68359 1.16791 6.85455 1.375 6.85455ZM1.375 15H14.625C14.8321 15 15 14.829 15 14.6182V13.6C15 13.3891 14.8321 13.2182 14.625 13.2182H1.375C1.16791 13.2182 1 13.3891 1 13.6V14.6182C1 14.829 1.16791 15 1.375 15ZM1.375 10.9273H14.625C14.8321 10.9273 15 10.7563 15 10.5455V9.52727C15 9.31641 14.8321 9.14545 14.625 9.14545H1.375C1.16791 9.14545 1 9.31641 1 9.52727V10.5455C1 10.7563 1.16791 10.9273 1.375 10.9273Z'
          fill='currentColor'
        />
      </svg>
    ),
    text: 'Justify',
  },
]

export const TextAlignmentSelectorControl = () => {
  const {editor} = useRichTextEditorContext()
  const [selectedKey, setSelectedKey] = React.useState<string>('left')
  const handleSelectionChange = (key: React.Key) => {
    if (editor?.isEditable) {
      editor
        .chain()
        .focus()
        .setTextAlign(key as string)
        .run()
    }
  }

  React.useEffect(() => {
    editor?.on('transaction', ({editor}) => {
      handleSelectedHeadingChange(editor as Editor)
    })
  }, [editor])

  const handleSelectedHeadingChange = (editor: Editor) => {
    if (editor.isActive({textAlign: 'left'})) {
      setSelectedKey('left')
    } else if (editor.isActive({textAlign: 'center'})) {
      setSelectedKey('center')
    } else if (editor.isActive({textAlign: 'right'})) {
      setSelectedKey('right3')
    } else if (editor.isActive({textAlign: 'justify'})) {
      setSelectedKey('justify')
    }
  }

  return (
    <Select
      onSelectionChange={handleSelectionChange}
      selectedKey={selectedKey}
      type='alignment'
      css={{
        button: {
          width: '56px',
          height: '28px',
        },
      }}
    >
      {textAlignment.map((item) => (
        <Select.Item key={item.key} renderAs={item.icon}>
          <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
            {item.icon} {item.text}
          </div>
        </Select.Item>
      ))}
    </Select>
  )
}
