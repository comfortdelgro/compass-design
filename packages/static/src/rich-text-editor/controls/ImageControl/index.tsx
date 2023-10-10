import React from 'react'
import {useRichTextEditorContext} from '../../rich-text-editor.context'
import Control, {PremadeControlProps} from '../Control'

export const ImageControl = React.forwardRef<
  HTMLButtonElement,
  PremadeControlProps
>((props, ref) => {
  const {editor} = useRichTextEditorContext()
  const {css = {}, ...delegated} = props
  const addImage = React.useCallback(() => {
    if (editor?.isEditable) {
      const url = window.prompt('URL')
      if (url) {
        editor.chain().focus().setImage({src: url}).run()
      }
    }
  }, [editor])

  return (
    <Control
      css={css}
      active={editor?.isActive('image') ?? false}
      ref={ref}
      icon={() => (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.16382 4.35714C4.43766 4.35714 3.84901 4.93277 3.84901 5.64286C3.84901 6.35295 4.43766 6.92857 5.16382 6.92857C5.88998 6.92857 6.47863 6.35295 6.47863 5.64286C6.47863 4.93277 5.8897 4.35714 5.16382 4.35714ZM13.2472 2H2.72868C1.78503 2 1 2.76741 1 3.71429V12.2857C1 13.2326 1.78478 14 2.72843 14H13.2469C14.2152 14 15 13.2326 15 12.2857V3.71429C15.0002 2.76741 14.2388 2 13.2472 2ZM13.6854 12.1062L9.93823 7.12679C9.86975 7.00357 9.71361 6.92857 9.54652 6.92857C9.37908 6.92857 9.22275 7.00271 9.12989 7.12622L6.20991 10.986L5.19395 9.75122C5.09969 9.63661 4.94923 9.56884 4.78937 9.56884C4.62935 9.56884 4.47902 9.63658 4.38452 9.75122L2.31588 12.264C2.31588 12.2632 2.31588 12.2648 2.31588 12.264L2.31479 3.71429C2.31479 3.47798 2.51141 3.28571 2.75306 3.28571H13.2715C13.5132 3.28571 13.7098 3.47798 13.7098 3.71429V12.1062H13.6854Z'
            fill='currentColor'
          />
        </svg>
      )}
      onClick={addImage}
      type='button'
      className='control'
      {...delegated}
    >
      <svg viewBox='0 0 512 512' style={{height: 18}}>
        <path
          fill='currentColor'
          d='M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z'
        />
      </svg>
    </Control>
  )
})
