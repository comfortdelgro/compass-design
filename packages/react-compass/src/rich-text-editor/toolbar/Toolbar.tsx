import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import React, {Children, useEffect, useState} from 'react'
import Icon from '../../icon'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledDropdownButton} from '../controls/DropdownControls/menu-bar-select-button.styles'
import {StyledToolbar, StyledToolbarProps} from './Toolbar.styles'

interface Props extends StyledComponentProps {
  inline?: boolean
}
export type ToolbarProps = Props &
  StyledToolbarProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof StyledComponentProps>

const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    children,
    inline = true,
    // element
    ...delegates
  } = props
  const toolbarChildren = Children.toArray(children) as React.ReactElement[]
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(false)
  const flattenChildren = (children: React.ReactElement[]) => {
    let result: React.ReactElement[] = []
    for (let child of children) {
      if (child?.props?.children && child?.props?.children.length) {
        result = result.concat(...child?.props?.children)
      } else {
        result = result.concat(child)
      }
    }
    return result
  }
  const toolbarRef = useDOMRef<HTMLDivElement>(ref)
  const visibleChildren = flattenChildren(toolbarChildren)

  const [hiddenItems, setHiddenItems] = useState<React.ReactElement[]>([])
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (toolbarRef.current) {
          const children = toolbarRef.current.querySelectorAll('button')
          const itemsToHide: React.ReactElement[] = []
          for (let i = 0; i < children.length - 1; i++) {
            const currentChild = children?.[i] as HTMLElement
            const childOffsetLeft = currentChild?.offsetLeft
            const moreBtnWidth =
              toolbarRef.current.querySelector('#more-button')?.clientWidth ?? 0

            if (
              childOffsetLeft + currentChild?.clientWidth + moreBtnWidth >
              toolbarRef.current.clientWidth
            ) {
              itemsToHide.push(visibleChildren[i] as React.ReactElement)
              currentChild.style.visibility = 'hidden'
            } else {
              currentChild.style.visibility = 'visible'
            }
          }
          setHiddenItems(itemsToHide)
        }
      }, 600)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <StyledToolbar
        ref={toolbarRef}
        css={css}
        inline={inline}
        {...delegates}
        className='toolbar'
      >
        {children}
        {inline && (
          <StyledDropdownButton
            css={{
              position: 'absolute',
              right: 0,
              width: 28,
              borderRadius: 0,
              '&:hover': {
                backgroundColor: '#f3f2f1',
              },
            }}
            disabled={hiddenItems.length === 0}
            onClick={() => setHiddenMenu(!hiddenMenu)}
            id='more-button'
          >
            <Icon className='accordion-chevron-icon' icon={faEllipsis} />
          </StyledDropdownButton>
        )}
      </StyledToolbar>
      {hiddenMenu && (
        <StyledToolbar inline={false} css={{flexWrap: 'wrap'}}>
          {hiddenItems}
        </StyledToolbar>
      )}
    </>
  )
})

export default Toolbar
