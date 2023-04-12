import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from 'react'
import Icon from '../../icon'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledDropdownButton} from '../controls/DropdownControls/menu-bar-select-button.styles'
import {StyledToolbar, StyledToolbarProps} from './Toolbar.styles'

export type ToolbarProps = StyledComponentProps &
  StyledToolbarProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof StyledComponentProps>

const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    children,
    // element
    ...delegates
  } = props
  const [expanded, setExpand] = useState<boolean>(false)
  const [isOverflow, setOverflow] = useState<boolean>(false)
  const toolbarRef = useDOMRef<HTMLDivElement>(ref)
  useEffect(() => {
    const handleResize = () => {
      const currentToolbar = toolbarRef.current
      if (currentToolbar) {
        currentToolbar.style.maxHeight = '38px'
      }
      setExpand(false)
      if (toolbarRef.current) {
        const toolbar = toolbarRef.current
        setOverflow(toolbar.scrollHeight > toolbar.clientHeight)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMoreBtnClick = () => {
    const isExpanded = !expanded
    setExpand(isExpanded)
    const currentToolbar = toolbarRef.current
    if (currentToolbar) {
      currentToolbar.style.maxHeight = isExpanded ? '300px' : '38px'
    }
  }

  return (
    <>
      <StyledToolbar
        ref={toolbarRef}
        css={css}
        {...delegates}
        className='toolbar'
      >
        {children}
        {isOverflow && (
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
            onClick={handleMoreBtnClick}
            id='more-button'
          >
            <Icon className='accordion-chevron-icon' icon={faEllipsis} />
          </StyledDropdownButton>
        )}
      </StyledToolbar>
    </>
  )
})

export default Toolbar
