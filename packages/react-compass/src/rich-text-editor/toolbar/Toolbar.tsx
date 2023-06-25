import React, {useEffect, useState} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import Control from '../controls/Control/Control'
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
          <Control
            css={{
              position: 'absolute',
              right: 0,
              width: 28,
              borderRadius: 0,
            }}
            onClick={handleMoreBtnClick}
            id='more-button'
            active={false}
          >
            <svg className='accordion-chevron-icon' viewBox='0 0 448 512'>
              <path
                fill='currentColor'
                d='M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z'
              />
            </svg>
          </Control>
        )}
      </StyledToolbar>
    </>
  )
})

export default Toolbar
