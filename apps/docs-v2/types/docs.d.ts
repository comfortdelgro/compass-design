declare module 'components/common/HighlightedCode' {
  import {StyledComponentProps} from '@mui/material/styles'
  import * as React from 'react'

  type ClassKey = 'root'
  export interface Props extends StyledComponentProps<ClassKey> {
    className?: string
    code: string
    copyButtonHidden?: boolean
    copyButtonProps?: JSX.IntrinsicElements['button']
    language: string
    component?: React.ElementType
    sx?: object
  }
  export default function HighlightedCode(props: Props): React.ReactElement
}

declare module '@trendmicro/react-interpolate'

declare module 'react-imask'
