import {faImage} from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import Icon from '../../../icon'
import {useRichTextEditorContext} from '../../rich-text-editor.context'
import {PremadeControlProps} from '../Control/Control'
import {ControlBase} from '../ControlBase'

export const ImageControl = React.forwardRef<
  HTMLButtonElement,
  PremadeControlProps
>((props, ref) => {
  const {editor} = useRichTextEditorContext()
  const {css = {}, ...delegated} = props
  const addImage = React.useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor?.chain().focus().setImage({src: url}).run()
    }
  }, [editor])

  return (
    <ControlBase
      css={css}
      active={editor?.isActive('image') ?? false}
      ref={ref}
      icon={() => <Icon icon={faImage} />}
      onClick={addImage}
      className='control'
      {...delegated}
    ></ControlBase>
  )
})
