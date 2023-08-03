import React from 'react'
import {WizardItemProps} from './item'

export const TickIcon = () => (
  <svg width='10' height='8' viewBox='0 0 10 8'>
    <path
      d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'
      fill='currentColor'
    />
  </svg>
)

export const pickChilds = (
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): Array<React.DetailedReactHTMLElement<WizardItemProps, HTMLElement>> => {
  const matched: Array<
    React.DetailedReactHTMLElement<WizardItemProps, HTMLElement>
  > = []
  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(
        item as React.DetailedReactHTMLElement<WizardItemProps, HTMLElement>,
      )
    }
    return item
  })
  const childs = matched.length >= 0 ? matched : []

  return childs
}
