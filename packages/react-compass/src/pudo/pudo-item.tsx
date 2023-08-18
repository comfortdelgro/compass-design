import React, {ReactNode, useCallback} from 'react'
import TextField from '../textfield'
import {StyledComponentProps} from '../utils/stitches.types'
import {PudoItemVariantProps, StyledPUDOItem} from './pudo.styles'

export type PudoItemPrivateProps<TName extends string | number | symbol> = {
  name: TName
  icon?: ReactNode
  type?: 'input' | 'label'
  value: string
  placeholder?: string
  hideIcon?: boolean
}

export type PudoItemProps<TName extends string | number | symbol> = {
  onValueChange?: (value: string) => void
} & PudoItemPrivateProps<TName> &
  StyledComponentProps &
  PudoItemVariantProps

const PudoItem = <TItemName extends string | number | symbol>({
  css = {},
  type = 'input',
  icon,
  value = '',
  onValueChange,
  placeholder = '',
  ...delegated
}: PudoItemProps<TItemName>) => {
  const renderPudoContent = useCallback(() => {
    switch (type) {
      case 'label':
        return <div>{value}</div>

      case 'input':
        return (
          <TextField
            value={value}
            onChange={(v) => onValueChange?.(v.toString())}
            placeholder={placeholder}
          />
        )

      default:
        return <></>
    }
  }, [type, value, onValueChange])

  return (
    <StyledPUDOItem css={css} {...{type}} {...delegated}>
      {icon || <div>Icon</div>}
      {renderPudoContent()}
    </StyledPUDOItem>
  )
}

export default PudoItem
