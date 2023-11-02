import {Editor} from '@tiptap/react'
import {createSafeContext} from '../utils/create-safe-context'

interface RichTextEditorContext {
  editor: Editor | null
}

export const [RichTextEditorProvider, useRichTextEditorContext] =
  createSafeContext<RichTextEditorContext>(
    'RichTextEditor was not found in tree',
  )
