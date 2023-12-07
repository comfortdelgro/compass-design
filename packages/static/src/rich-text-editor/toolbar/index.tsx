import React, {HTMLAttributes, useState} from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import Control from '../controls/Control'
import styles from '../styles/toolbar.module.css'

interface Props {
  css?: unknown
  children: React.ReactNode
  className?: string
}

interface Child {
  children: React.ReactNode
}

export type ToolbarProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    children,
    className,
    // element
    ...delegates
  } = props
  const [expanded, setExpand] = useState<boolean>(false)
  const toolbarRef = useDOMRef<HTMLDivElement>(ref)

  const handleMoreBtnClick = () => {
    const isExpanded = !expanded
    setExpand(isExpanded)
    const currentToolbar = toolbarRef.current
    if (currentToolbar) {
      currentToolbar.style.flexWrap = isExpanded ? 'wrap' : 'initial'
    }
  }

  const hideOverflowItem = React.useCallback(() => {
    const rect = toolbarRef.current?.getBoundingClientRect()
    const listOfChildren = [...toolbarRef.current.children]
    listOfChildren.forEach((node) => {
      const r = node.getBoundingClientRect()
      if (expanded) node['style'].visibility = null
      if (r.right > rect.right) {
        node['style'].visibility = 'hidden'
      }
    })
  }, [toolbarRef, expanded])

  React.useEffect(() => {
    if (!expanded) {
      hideOverflowItem()
    }
  }, [hideOverflowItem, expanded])

  React.useEffect(() => {
    setTimeout(() => {
      hideOverflowItem()
    }, 50)
  }, [hideOverflowItem])

  const calcultedChildren = React.useMemo(() => {
    // Get data map of toolbar to see summary of toolbar
    const dataMap = React.Children.map(
      children,
      (child: React.ReactElement<Child>, index) => {
        return {
          index: index,
          isGroup: !!child.props.children,
        }
      },
    )

    // Loop throught each of item of toolbar
    return React.Children.map(
      children,
      (child: React.ReactElement<Child>, toolbarIndex) => {
        // Current item in toolbar is group or not
        const isGroup = !!child.props.children
        const toolbarItemChildren = child.props.children
        const toolbarItemChildrenLength =
          React.Children.toArray(toolbarItemChildren).length

        if (isGroup) {
          // There is a group so need to loop again
          const currentItem = {
            index: toolbarIndex,
            isGroup: !!child.props.children,
          }
          return React.Children.map(
            toolbarItemChildren,
            (groupItemChild: React.ReactElement, groupIndex: number) => {
              let marginLeft = '0'
              let marginRight = '0'

              // Caculate margin of group item
              if (dataMap.length > 0) {
                const preItem = dataMap[currentItem.index - 1]
                // If prev item is group and current item is not group
                if (preItem?.isGroup && !currentItem.isGroup) {
                  marginLeft = 'var(--cdg-spacing-2)'
                }
                // If prev item is not group and current item is group
                if (!preItem?.isGroup && currentItem.isGroup) {
                  marginLeft = 'var(--cdg-spacing-2)'
                }
                // If prev item is group and current item is group
                if (preItem?.isGroup && currentItem.isGroup) {
                  marginLeft = 'var(--cdg-spacing-1)'
                }

                const nextItem = dataMap[currentItem.index + 1]
                // If next item is group and current item is not group
                if (nextItem?.isGroup && !currentItem.isGroup) {
                  marginRight = 'var(--cdg-spacing-2)'
                }
                // If next item is not group and current item is group
                if (!nextItem?.isGroup && currentItem.isGroup) {
                  marginRight = 'var(--cdg-spacing-2)'
                }
                // If next item is group and current item is group
                if (nextItem?.isGroup && currentItem.isGroup) {
                  marginRight = 'var(--cdg-spacing-1)'
                }
              }

              // Render group items
              return React.cloneElement(groupItemChild, {
                style: {
                  marginLeft:
                    groupIndex === 0 && currentItem.index !== 0
                      ? marginLeft
                      : 0,
                  marginRight:
                    groupIndex === toolbarItemChildrenLength - 1
                      ? marginRight
                      : 0,
                },
              })
            },
          )
        }

        return child
      },
    )
  }, [children])

  const toolbarWrapperClasses = React.useMemo(() => {
    return [styles.rteToolbarWrapper, className, 'cdg-rte-toolbar']
      .filter(Boolean)
      .join(' ')
  }, [className])

  return (
    <CssInjection css={css} childrenRef={toolbarRef}>
      <div {...delegates} className={toolbarWrapperClasses}>
        <div ref={toolbarRef} className={styles.rteToolbar}>
          {calcultedChildren}
        </div>
        <Control onClick={handleMoreBtnClick} id='more-button' active={false}>
          <svg className='accordion-chevron-icon' viewBox='0 0 448 512'>
            <path
              fill='currentColor'
              d='M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z'
            />
          </svg>
        </Control>
      </div>
    </CssInjection>
  )
})

export default Toolbar
