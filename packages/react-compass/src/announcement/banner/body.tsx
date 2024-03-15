import React from 'react'

export interface BannerBodyProps {
  children: React.ReactChild
}

const BannerBody = React.forwardRef<HTMLDivElement, BannerBodyProps>(
  (props, ref) => {
    const {children} = props
    return <div ref={ref} className="asdaskdljaslkd">{children}</div>
  },
)

export default BannerBody
