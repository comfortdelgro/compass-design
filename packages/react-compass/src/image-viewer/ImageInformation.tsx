import * as React from 'react'
import Typography from '../typography'
import {StyledImageInformationWrap} from './image-viewer.styles'
import {ToolbarConfig} from './types'

export interface ViewerToolbarProps {
  onAction: (config: ToolbarConfig) => void
  alt: string
  width: number
  height: number
  activeIndex: number
  count: number
  totalName: string
}

export default function ImageInformation(props: ViewerToolbarProps) {
  return (
    <StyledImageInformationWrap>
      <Typography.Label css={{textAlign: 'center'}} variant='label1'>
        {props.alt && `${props.alt} `}
        {`(${props.width} x ${props.height}) `}
        <b>{`${props.activeIndex + 1} ${props.totalName} ${props.count}`}</b>
      </Typography.Label>
    </StyledImageInformationWrap>
  )
}
