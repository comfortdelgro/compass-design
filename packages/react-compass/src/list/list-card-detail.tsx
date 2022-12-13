import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {
  ListCardDetailVariantProps,
  StyledListCardDetail,
} from './list-card-detail.styles'

interface Props extends StyledComponentProps, ListCardDetailVariantProps {
  title?: string
  description?: string
  avatar?: React.ReactNode
}

export type ListCardDetailProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ListCardDetail = React.forwardRef<HTMLDivElement, ListCardDetailProps>(
  (props, ref) => {
    const {title, description, avatar, css = {}, ...delegated} = props

    return (
      <StyledListCardDetail ref={ref} css={css} {...delegated}>
        {title ? <h3 className='list-card-detail-title'>{title}</h3> : <></>}
        <div className='list-card-detail-footer'>
          {avatar ? (
            <div className='list-card-detail-avatars'>{avatar}</div>
          ) : (
            <></>
          )}
          {description ? (
            <span className='list-card-detail-description'>{description}</span>
          ) : (
            <></>
          )}
        </div>
      </StyledListCardDetail>
    )
  },
)

export default ListCardDetail
