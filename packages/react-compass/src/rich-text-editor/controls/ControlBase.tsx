import React, {forwardRef} from 'react'
import Control, {ButtonProps} from './Control'

export interface RichTextEditorControlBaseProps extends ButtonProps {
  icon: React.FC
}

export const ControlBase = forwardRef<
  HTMLButtonElement,
  RichTextEditorControlBaseProps
>(({active, icon: Icon, ...others}, ref) => (
  <Control active={active} ref={ref} {...others}>
    <Icon />
  </Control>
))
