import React from 'react'
import {StyledLoading} from './multiple-dropdown.styles'

export default function DropdownLoading() {
  return (
    <StyledLoading>
      <div className='spinner'>
        <div className='spinner-1' />
        <div className='spinner-2' />
        <div className='spinner-3' />
        <div />
      </div>
    </StyledLoading>
  )
}
