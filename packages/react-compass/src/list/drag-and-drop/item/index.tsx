import React from 'react'
import {StyledComponentProps} from '../../../utils/stitches.types'

interface Props extends StyledComponentProps {
  key: React.Key
  children: React.ReactNode
}

export type DragAndDropListItemProps = Props

const DragAndDropListItem: React.FC<DragAndDropListItemProps> = (props) => {
  return <>{props.children}</>
}

export default DragAndDropListItem
