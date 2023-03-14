/* eslint-disable @typescript-eslint/no-use-before-define */
// import {CheckIcon} from '@heroicons/react/solid'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {AriaListBoxOptions, useListBox, useOption} from '@react-aria/listbox'
import type {ListState} from '@react-stately/list'
import type {Node} from '@react-types/shared'
import React from 'react'
import {Icon} from '../../../icon'

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
  let ref = React.useRef<HTMLUListElement>(null)
  let {listBoxRef = ref, state} = props
  let {listBoxProps} = useListBox(props, state, listBoxRef)

  return (
    <List {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </List>
  )
}
export function GridBox(props: ListBoxProps) {
  let ref = React.useRef<HTMLUListElement>(null)
  let {listBoxRef = ref, state} = props
  let {listBoxProps} = useListBox(props, state, listBoxRef)

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
  let ref = React.useRef<HTMLLIElement>(null)
  let {optionProps, labelProps, descriptionProps, isSelected, isFocused} =
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
        <Icon
          className={`check-icon ${iconOverlapped ? 'overlapped-icon' : ''}`}
          icon={faCheck}
        />
      )}
    </ListItem>
  )
}
