import React, {useContext, useEffect, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  MultipleDropdownContext,
  SelectedItemDropdown,
} from './multiple-dropdown-context'
import {MultipleDropdownItemProps} from './multiple-dropdown-item'
import {
  DropdownItemVariantProps,
  StyledDropdownSection,
  StyledRightIcon,
  StyledSectionContent,
} from './multiple-dropdown.styles'

export interface DropdownSectionBase extends StyledComponentProps {
  id?: number | string
  title?: React.ReactNode
  'aria-label'?: string
  children: React.ReactNode
  isClickable?: boolean
  onClick?: (title: React.ReactNode) => void
  onSectionClick?: (
    items: SelectedItemDropdown[],
    checking: boolean,
    id: string | number,
    index: number,
  ) => void
  isChecked?: boolean
  checkmark?: 'checkbox' | 'tick'
  index?: number
}

export type DropdownSectionProps = DropdownSectionBase &
  DropdownItemVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase>

const MultipleDropdownSection = React.forwardRef<
  HTMLDivElement,
  DropdownSectionProps
>((props, ref) => {
  const {
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    children,
    title,
    isClickable,
    css = {},
    checkmark = 'checkbox',
    isChecked,
    index = -1,
    onClick,
    onSectionClick,
    ...delegated
  } = props

  const {onSectionClick: onSectionClickContext, selectedSectionIndexes} =
    useContext(MultipleDropdownContext)

  const [checking, setChecking] = React.useState(
    isChecked ?? selectedSectionIndexes.includes(index),
  )

  const [clonedChildren, setClonedChildren] = useState<React.ReactNode>(null)

  const dropdownSectionRef = useDOMRef<HTMLDivElement>(ref)

  // clone children to assign value prop if not exists. the value would be equal to the key prop
  // This is to support the legacy code where users don't pass value prop and use key prop instead
  useEffect(() => {
    const clonedChildren = React.Children.map(children, (child) => {
      const clonedChild = React.cloneElement(child as React.ReactElement)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (!clonedChild?.props?.value) {
        return React.cloneElement(clonedChild, {
          value: clonedChild.key || '',
        })
      } else {
        return clonedChild
      }
    })
    setClonedChildren(clonedChildren)
  }, [children])

  const handleOnClick = () => {
    if (!isClickable) {
      return
    }
    onClick?.(title)
    const itemsInSection: SelectedItemDropdown[] = React.Children.toArray(
      clonedChildren,
    ).map((child) => {
      const typedChild = child as React.DetailedReactHTMLElement<
        MultipleDropdownItemProps,
        HTMLElement
      >
      return {
        value: typedChild.props.value?.toString() ?? '',
        displayValue: typedChild.props.textValue ?? typedChild.props.children,
      }
    })
    onSectionClickContext(itemsInSection, !checking, id, index)
    onSectionClick?.(itemsInSection, !checking, id, index)
    setChecking(!checking)
  }

  return (
    <StyledDropdownSection css={css} ref={dropdownSectionRef} {...delegated}>
      {title && (
        <StyledSectionContent
          isClickable={!!isClickable}
          onClick={handleOnClick}
        >
          {title}
          <StyledRightIcon
            isSelected={checking}
            checkmark={checkmark}
            className='cdg-multiple-dropdown-section'
          >
            {checkmark === 'checkbox' ? (
              <div>
                <Tick />
              </div>
            ) : checkmark === 'tick' ? (
              <BlueTick />
            ) : null}
          </StyledRightIcon>
        </StyledSectionContent>
      )}
      {clonedChildren}
    </StyledDropdownSection>
  )
})

export default MultipleDropdownSection

const Tick = () => (
  <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
    <path
      d='M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z'
      fill='currentColor'
    />
  </svg>
)

const BlueTick = () => (
  <svg width='16' height='17' viewBox='0 0 16 17' fill='none'>
    <path
      d='M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z'
      fill='currentColor'
    />
  </svg>
)
