import Gutter from '@comfortdelgro/react-compass-old/gutter'
// import {Gutter as StaticGutter} from '@comfortdelgro/static'
import React, {CSSProperties} from 'react'

function GutterBasic() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState<CSSProperties['width']>(undefined)

  return (
    <>
      <div style={{display: 'flex', height: '100%', flex: 1}}>
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: width,
          }}
        >
          <div style={{overflow: 'hidden'}}>Right side</div>
          <Gutter parentRef={ref} onChange={setWidth} />
        </div>
        <div style={{flex: 1}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      {/* <div style={{display: 'flex', height: '100%', flex: 1}}>
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: width,
          }}
        >
          <div style={{overflow: 'hidden'}}>Right side</div>
          <StaticGutter parentRef={ref} onChange={setWidth} />
        </div>
        <div style={{flex: 1}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div> */}
    </>
  )
}

export default GutterBasic
