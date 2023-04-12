import {faLink} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Icon from '../../../icon'
import {useRichTextEditorContext} from '../../rich-text-editor.context'
import {PremadeControlProps} from '../Control/Control'
import {ControlBase} from '../ControlBase'

export const LinkControl = React.forwardRef<
  HTMLButtonElement,
  PremadeControlProps
>((props, ref) => {
  const {editor} = useRichTextEditorContext()
  const {css = {}, ...delegated} = props
  const setLink = React.useCallback(() => {
    const previousUrl = editor?.getAttributes('link')['href']
    if (editor?.isActive('link')) {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run()
    } else {
      const url = window.prompt('URL', previousUrl)
      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        editor?.chain().focus().extendMarkRange('link').unsetLink().run()

        return
      }

      // update link
      editor?.chain().focus().extendMarkRange('link').setLink({href: url}).run()
    }
  }, [editor])

  return (
    <ControlBase
      css={css}
      active={editor?.isActive('link') ?? false}
      ref={ref}
      icon={() => <Icon icon={faLink} />}
      onPress={setLink}
      className='control'
      {...delegated}
    ></ControlBase>
  )
})
