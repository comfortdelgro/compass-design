import Gutter from '@comfortdelgro/react-compass-old/gutter'
// import {Gutter as StaticGutter} from '@comfortdelgro/static'
import React, {CSSProperties} from 'react'

function GutterLeftSide() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState<CSSProperties['width']>(undefined)
  return (
    <>
      <div style={{display: 'flex', height: '100%', flex: 1}}>
        <div style={{flex: 1}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: width,
            paddingLeft: '12px',
          }}
        >
          <div style={{overflow: 'hidden'}}>Left side</div>
          <Gutter parentRef={ref} onChange={setWidth} side='left' />
        </div>
      </div>

      {/* <div style={{display: 'flex', height: '100%', flex: 1}}>
        <div style={{flex: 1}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: width,
            paddingLeft: '12px',
          }}
        >
          <div style={{overflow: 'hidden'}}>Left side</div>
          <StaticGutter parentRef={ref} onChange={setWidth} side='left' />
        </div>
      </div> */}
    </>
  )
}

export default GutterLeftSide
