import React from 'react'

export interface BannerLeftProps {
  children: React.ReactChild
}

const BannerLeft = React.forwardRef<HTMLDivElement, BannerLeftProps>(
  (props, ref) => {
    const {children} = props
    return <div ref={ref}>{children}</div>
  },
)

export default BannerLeft
