'use client'

import React, {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  Ref,
  useMemo,
  useState,
} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import PudoItem, {PudoItemPrivateProps} from './pudo-item'
import {StyledPUDO} from './pudo.styles'

export type PudoProps<TItemKeys extends string | number | symbol> = {
  items: Readonly<Array<PudoItemPrivateProps<TItemKeys>>>
  onValuesChange?: (values: Record<TItemKeys, string>) => void
} & StyledComponentProps &
  HTMLAttributes<HTMLDivElement>

const PudoRefComponent = <TItemKeys extends string | number | symbol>(
  {
    items = [],
    css = {},
    onValuesChange,
    children,
    ...delegated
  }: PudoProps<TItemKeys>,
  ref: Ref<HTMLDivElement>,
) => {
  const PudoRef = useDOMRef<HTMLDivElement>(ref)
  const processItems = useMemo(() => items, [items])
  const [pudoValues, setPudoValues] = useState(
    processItems.reduce(
      (obj, {name, value}) => ({...obj, [name]: value}),
      {},
    ) as Record<TItemKeys, string>,
  )

  const renderPudoItems = processItems.map((itemProps) => (
    <PudoItem
      key={itemProps.name.toString()}
      {...itemProps}
      value={pudoValues[itemProps.name]}
      onValueChange={(value) => {
        const newPudoValues: Record<TItemKeys, string> = {
          ...pudoValues,
          [itemProps.name]: value,
        }

        onValuesChange?.(newPudoValues)
        setPudoValues(newPudoValues)
      }}
    />
  ))

  return (
    <StyledPUDO ref={PudoRef} css={css} {...delegated}>
      {renderPudoItems}

      {children}
    </StyledPUDO>
  )
}

const Pudo = forwardRef(PudoRefComponent) as <
  ItemKeys extends string | number | symbol,
>(
  p: PudoProps<ItemKeys> & {ref?: Ref<Omit<HTMLDivElement, 'onChange'>>},
) => ReactElement

export default Pudo
