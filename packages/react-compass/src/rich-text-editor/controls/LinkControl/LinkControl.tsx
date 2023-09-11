import React from 'react'
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
    const previousUrl = editor?.getAttributes('link')['href'] as string
    if (editor?.isEditable) {
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
        editor
          ?.chain()
          .focus()
          .extendMarkRange('link')
          .setLink({href: url})
          .run()
      }
    }
  }, [editor])

  return (
    <ControlBase
      css={css}
      active={editor?.isActive('link') ?? false}
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
            d='M4.58253 4.81266C5.8706 3.39407 8.0112 3.39407 9.29926 4.81266C10.4576 6.0886 10.629 8.12245 9.67688 9.58978L9.6514 9.63061C9.41278 9.99552 8.94945 10.0823 8.61817 9.81944C8.28457 9.5566 8.2058 9.04623 8.44442 8.68131L8.4699 8.64048C9.00041 7.82132 8.91702 6.70105 8.27067 5.98907C7.54323 5.18778 6.35942 5.18778 5.62967 5.98907L3.03037 8.85483C2.30039 9.63571 2.30039 10.9601 3.03037 11.764C3.6744 12.476 4.69373 12.5678 5.43507 11.9834L5.47213 11.9324C5.80573 11.6925 6.26907 11.7767 6.50537 12.1442C6.74398 12.5117 6.66753 13.0221 6.33393 13.2849L6.29687 13.313C4.94393 14.3618 3.13925 14.1934 1.98115 12.92C0.672951 11.4782 0.672951 9.14065 1.98115 7.70139L4.58253 4.81266ZM11.4167 11.1643C10.1078 12.6061 7.98803 12.6061 6.67912 11.1643C5.52078 9.88835 5.3702 7.87746 6.32235 6.41013L6.34783 6.3693C6.5656 6.00439 7.02893 5.91762 7.38107 6.18047C7.71466 6.42034 7.79343 6.93072 7.55482 7.3186L7.52933 7.35943C6.99882 8.15562 7.08222 9.29886 7.72857 10.0108C8.456 10.8121 9.63981 10.8121 10.3696 10.0108L12.9689 7.14508C13.6986 6.34123 13.6986 5.01681 12.9689 4.23593C12.3248 3.52473 11.3055 3.43184 10.5642 4.01647L10.5271 4.04454C10.1935 4.30739 9.73016 4.20021 9.49387 3.85519C9.25525 3.48823 9.3317 2.97811 9.6653 2.71604L9.70236 2.68745C11.0344 1.63891 12.86 1.80527 14.0183 3.08095C15.3272 4.52174 15.3272 6.85927 14.0183 8.29853L11.4167 11.1643Z'
            fill='currentColor'
          />
        </svg>
      )}
      onClick={setLink}
      className='control'
      {...delegated}
    ></ControlBase>
  )
})
