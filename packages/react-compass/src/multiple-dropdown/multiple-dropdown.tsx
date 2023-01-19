import {AriaListBoxOptions, useListBox} from '@react-aria/listbox'
import {Item} from '@react-stately/collections'
import {ListProps, useListState} from '@react-stately/list'
import React, {Key} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Header from './header'
import {
  DropdownVariantProps,
  StyledDropdown,
  StyledDropdownWrapper,
  StyledLoading,
  StyledPopoverWrapper,
  StyledSelectedItem,
  StyledSelectedItemWrapper,
} from './multiple-dropdown.styles'
import Option from './options'
import Popover from './popover'
import {Button, Icon, XIcon} from './utils'

interface Props<T>
  extends ListProps<T>,
    AriaListBoxOptions<T>,
    StyledComponentProps {
  isLoading?: boolean
  icon?: React.ReactNode
  placeholder?: string
  headerTitle?: string
  headerOnClick?: (e: unknown) => void
}

export type MultipleDropdownProps<T = object> = Props<T> & DropdownVariantProps

const MultipleDropdown = React.forwardRef<
  HTMLDivElement,
  MultipleDropdownProps
>((props, r) => {
  const {
    // StyledComponentProps
    css = {},
    icon = <Icon />,
    // AriaDropdownProps
  } = props
  const [isOpen, setIsOpen] = React.useState(false)
  const state = useListState(props)
  const ref = useDOMRef<HTMLDivElement>(r)
  const {listBoxProps, labelProps} = useListBox(props, state, ref)
  const wrapperRef = useDOMRef<HTMLDivElement>(null)
  const popoverRef = useDOMRef<HTMLDivElement>(null)
  const collapseState = {
    isOpen: isOpen,
    setOpen: (v: boolean) => setIsOpen(v),
    toggle: () => setIsOpen((v) => !v),
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  }
  const selectedNode = React.useMemo(() => {
    const t: Array<{
      key: Key
      text: string
    }> = []
    state.selectionManager.selectedKeys.forEach((selectedKey) => {
      const item = state.collection.getItem(selectedKey)
      t.push({key: selectedKey, text: item.textValue})
    })
    return t
  }, [state])

  const removeItem = (key: Key) => {
    state.selectionManager.toggleSelection(key)
    collapseState.toggle()
  }

  return (
    <StyledDropdownWrapper css={css} ref={ref}>
      {props.label && <label {...labelProps}>{props.label}</label>}
      <StyledDropdown ref={wrapperRef}>
        <Button onPress={collapseState.toggle}>
          <StyledSelectedItemWrapper>
            {selectedNode.length === 0 && <p>{props.placeholder}</p>}
            {selectedNode.length > 0 &&
              selectedNode.map((item) => (
                <StyledSelectedItem key={item.key}>
                  {item.text}
                  <div onClick={() => removeItem(item.key)}>
                    <XIcon />
                  </div>
                </StyledSelectedItem>
              ))}
          </StyledSelectedItemWrapper>
          <div className='dropdown-icon'>{icon}</div>
        </Button>
      </StyledDropdown>
      <StyledPopoverWrapper>
        {collapseState.isOpen && (
          <Popover
            collapseState={collapseState}
            triggerRef={wrapperRef}
            popoverRef={popoverRef}
          >
            {props.isLoading ? (
              <StyledLoading>
                <div className='spinner'>
                  <div className='spinner-1' />
                  <div className='spinner-2' />
                  <div className='spinner-3' />
                  <div />
                </div>
              </StyledLoading>
            ) : (
              <>
                {props.headerTitle && (
                  <Header
                    title={props.headerTitle}
                    onPress={(e) => props?.headerOnClick?.(e)}
                  />
                )}
                <ul {...listBoxProps}>
                  {[...state.collection].map((item) => (
                    <Option key={item.key} item={item} state={state} />
                  ))}
                </ul>
              </>
            )}
          </Popover>
        )}
      </StyledPopoverWrapper>
    </StyledDropdownWrapper>
  )
})

export default MultipleDropdown as typeof MultipleDropdown & {
  Item: typeof Item
}
