import {useFilter} from '@react-aria/i18n'
import {AriaListBoxOptions, useListBox} from '@react-aria/listbox'
import {ListCollection, ListProps, useListState} from '@react-stately/list'
import type {Collection, Node} from '@react-types/shared'
import React, {Key} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Header from './header'
import MultipleDropdownItem from './item'
import {
  DropdownVariantProps,
  StyledDropdown,
  StyledDropdownWrapper,
  StyledHelperText,
  StyledLoading,
  StyledPopoverWrapper,
  StyledSelectedItem,
  StyledSelectedItemWrapper,
} from './multiple-dropdown.styles'
import Option from './options'
import Popover from './popover'
import {Icon, XIcon} from './utils'

interface Props<T>
  extends ListProps<T>,
    AriaListBoxOptions<T>,
    StyledComponentProps {
  isLoading?: boolean
  icon?: React.ReactNode
  placeholder?: string
  headerTitle?: string
  isDisabled?: boolean
  isRequired?: boolean
  isErrored?: boolean
  errorMessage?: string
  helperText?: string
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
    isErrored,
    isDisabled,
    isRequired,
    errorMessage,
    helperText,
    disabledKeys = [],
    // AriaDropdownProps
  } = props
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const [collection, setCollection] = React.useState<
    Collection<Node<object>> | undefined
  >()
  const filter = useFilter({sensitivity: 'base'})
  const contains = (string: string, substring: string) =>
    filter.contains(string, substring)
  const state = useListState(props)
  const ref = useDOMRef<HTMLDivElement>(r)
  const {listBoxProps, labelProps} = useListBox(props, state, ref)
  const wrapperRef = useDOMRef<HTMLDivElement>(null)
  const popoverRef = useDOMRef<HTMLDivElement>(null)
  const inputRef = useDOMRef<HTMLInputElement>(null)
  const collapseState = {
    isOpen: isOpen,
    setOpen: (v: boolean) => setIsOpen(v),
    toggle: () =>
      setIsOpen((v) => {
        if (!isDisabled) {
          if (v && inputRef.current?.value !== '') {
            return true
          }
          return !v
        }
        return v
      }),
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  }
  const selectedNode = React.useMemo(() => {
    const t: Array<{
      key: Key
      rendered: React.ReactNode
    }> = []
    if ([...state.collection].length > 0) {
      state.selectionManager.selectedKeys.forEach((selectedKey) => {
        const item = state.collection.getItem(selectedKey)
        t.push({key: selectedKey, rendered: item.rendered})
      })
    }
    return t
  }, [state])

  const removeItem = (key: Key) => {
    state.selectionManager.toggleSelection(key)
    collapseState.toggle()
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (wrapperRef.current) {
      const string = e.target.value
      setSearch(string)
      if (string !== '') {
        const fakeEle = document.createElement('div')
        fakeEle.style.position = 'absolute'
        fakeEle.style.top = '0'
        fakeEle.style.left = '-9999px'
        fakeEle.style.overflow = 'hidden'
        fakeEle.style.visibility = 'hidden'
        fakeEle.style.whiteSpace = 'nowrap'
        fakeEle.style.height = '0'
        fakeEle.style.width = 'fit-content'
        fakeEle.style.maxWidth = `${wrapperRef.current.clientWidth - 62}px`
        fakeEle.innerHTML = string.replace(/\s/g, '&' + 'nbsp;')
        document.body.appendChild(fakeEle)
        e.target.focus()
        e.target.style.width = `${fakeEle.clientWidth + 4}px`
        fakeEle.remove()
      } else {
        e.target.style.width = `4px`
      }
    }
  }

  React.useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      if (wrapperRef.current) {
        wrapperRef.current.style.outlineColor = isErrored
          ? '#A4262C'
          : '-webkit-focus-ring-color'
        wrapperRef.current.style.outlineStyle = 'auto'
      }
    } else {
      inputRef.current?.blur()
      if (wrapperRef.current) {
        wrapperRef.current.style.outlineColor = isErrored
          ? '#A4262C'
          : 'inherit'
        wrapperRef.current.style.outlineColor = 'inherit'
        wrapperRef.current.style.outlineStyle = 'inherit'
      }
    }
  }, [isOpen])

  React.useEffect(() => {
    setCollection(state.collection)
  }, [state.collection])

  React.useEffect(() => {
    const c = filterCollection(state.collection, search, contains)
    setCollection(c)
  }, [search, selectedNode.length])

  return (
    <StyledDropdownWrapper css={css} ref={ref}>
      {props.label && (
        <label {...labelProps}>
          {props.label}
          {isRequired && <span>*</span>}
        </label>
      )}
      <StyledDropdown
        onClick={collapseState.toggle}
        ref={wrapperRef}
        isErrored={!!isErrored}
        isDisabled={!!isDisabled}
      >
        <StyledSelectedItemWrapper>
          {selectedNode.length === 0 && !isOpen && <p>{props.placeholder}</p>}
          {selectedNode.length > 0 &&
            selectedNode.map((item) => (
              <StyledSelectedItem key={item.key}>
                <div>{item.rendered}</div>
                <div
                  style={{cursor: isDisabled ? 'default' : 'pointer'}}
                  onClick={() => {
                    if (!isDisabled && ![...disabledKeys].includes(item.key)) {
                      removeItem(item.key)
                    }
                  }}
                >
                  <XIcon />
                </div>
              </StyledSelectedItem>
            ))}
          {!isDisabled && (
            <input type='text' ref={inputRef} onChange={onInputChange} />
          )}
        </StyledSelectedItemWrapper>
        <div className='dropdown-icon'>{icon}</div>
      </StyledDropdown>
      <StyledPopoverWrapper>
        {collection && [...collection].length > 0 && collapseState.isOpen && (
          <Popover
            collapseState={collapseState}
            triggerRef={wrapperRef}
            popoverRef={popoverRef}
            placement='bottom start'
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
                  {[...collection].map((item) => (
                    <Option key={item.key} item={item} state={state} />
                  ))}
                </ul>
              </>
            )}
          </Popover>
        )}
      </StyledPopoverWrapper>
      {errorMessage && (
        <StyledHelperText error={!!isErrored}>{errorMessage}</StyledHelperText>
      )}
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </StyledDropdownWrapper>
  )
})

export default MultipleDropdown as typeof MultipleDropdown & {
  Item: typeof MultipleDropdownItem
}
type FilterFn = (textValue: string, inputValue: string) => boolean

function filterCollection<T extends object>(
  collection: Collection<Node<T>>,
  inputValue: string,
  filter: FilterFn,
): Collection<Node<T>> {
  return new ListCollection(filterNodes(collection, inputValue, filter))
}

function filterNodes<T>(
  nodes: Iterable<Node<T>>,
  inputValue: string,
  filter: FilterFn,
): Iterable<Node<T>> {
  const filteredNode = []
  for (const node of nodes) {
    if (node.type === 'section' && node.hasChildNodes) {
      const filtered = filterNodes(node.childNodes, inputValue, filter)
      if ([...filtered].length > 0) {
        filteredNode.push({...node, childNodes: filtered})
      }
    } else if (node.type !== 'section' && filter(node.textValue, inputValue)) {
      filteredNode.push({...node})
    }
  }
  return filteredNode
}
