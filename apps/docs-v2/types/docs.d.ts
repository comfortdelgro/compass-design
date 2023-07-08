declare module 'components/common/HighlightedCode' {
  import {StyledComponentProps} from '@mui/material/styles'
  import * as React from 'react'

  type ClassKey = 'root'
  export interface Props extends StyledComponentProps<ClassKey> {
    className?: string
    /**
     * plain string
     */
    code: string
    copyButtonHidden?: boolean
    copyButtonProps?: JSX.IntrinsicElements['button']
    /**
     * short identifier of the code language
     * see @mui/markdown/prism for possible languages
     */
    language: string
    /**
     * The component used for the root node.
     * @default MarkdownElement
     */
    component?: React.ElementType
    sx?: object
  }
  export default function HighlightedCode(props: Props): React.ReactElement
}

declare module '@trendmicro/react-interpolate'

declare module 'react-imask'