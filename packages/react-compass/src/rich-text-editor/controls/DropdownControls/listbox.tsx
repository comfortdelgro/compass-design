/* eslint-disable @typescript-eslint/no-use-before-define */
// import {CheckIcon} from '@heroicons/react/solid'
import {AriaListBoxOptions, useListBox, useOption} from '@react-aria/listbox'
import type {ListState} from '@react-stately/list'
import type {Node} from '@react-types/shared'
import React from 'react'

import {Grid, ItemContent, List, ListItem} from '../../rich-text-editor.styles'

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>
  state: ListState<unknown>
}

interface OptionProps {
  item: Node<unknown>
  state: ListState<unknown>
  iconOverlapped?: boolean
}

export function ListBox(props: ListBoxProps) {
  const ref = React.useRef<HTMLUListElement>(null)
  const {listBoxRef = ref, state} = props
  const {listBoxProps} = useListBox(props, state, listBoxRef)

  return (
    <List {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </List>
  )
}
export function GridBox(props: ListBoxProps) {
  const ref = React.useRef<HTMLUListElement>(null)
  const {listBoxRef = ref, state} = props
  const {listBoxProps} = useListBox(props, state, listBoxRef)

  return (
    <Grid {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} iconOverlapped />
      ))}
    </Grid>
  )
}

interface OptionContextValue {
  labelProps: React.HTMLAttributes<HTMLElement>
  descriptionProps: React.HTMLAttributes<HTMLElement>
}

const OptionContext = React.createContext<OptionContextValue>({
  labelProps: {},
  descriptionProps: {},
})

function Option({item, state, iconOverlapped}: OptionProps) {
  const ref = React.useRef<HTMLLIElement>(null)
  const {optionProps, labelProps, descriptionProps, isSelected, isFocused} =
    useOption(
      {
        key: item.key,
      },
      state,
      ref,
    )

  return (
    <ListItem
      {...optionProps}
      ref={ref}
      isFocused={isFocused}
      isSelected={isSelected}
    >
      <ItemContent>
        <OptionContext.Provider value={{labelProps, descriptionProps}}>
          {item.rendered}
        </OptionContext.Provider>
      </ItemContent>
      {isSelected && (
        <svg
          className={`check-icon ${iconOverlapped ? 'overlapped-icon' : ''}`}
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
          ></path>
        </svg>
      )}
    </ListItem>
  )
}
