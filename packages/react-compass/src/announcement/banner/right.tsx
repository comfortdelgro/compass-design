import React from 'react'

export interface BannerRightProps {
  children: React.ReactChild
}

const BannerRight = React.forwardRef<HTMLDivElement, BannerRightProps>(
  (props: BannerRightProps, ref) => {
    const {children} = props
    return <div ref={ref}>{children}</div>
  },
)

export default BannerRight
