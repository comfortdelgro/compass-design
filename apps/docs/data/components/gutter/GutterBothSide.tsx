import Gutter from '@comfortdelgro/react-compass-old/gutter'
// import {Gutter as StaticGutter} from '@comfortdelgro/static'
import React, {CSSProperties} from 'react'
function GutterBothSide() {
  const rightGutterRef = React.useRef<HTMLDivElement>(null)
  const leftGutterRef = React.useRef<HTMLDivElement>(null)
  const [rightGutterWidth, setRightGutterWidth] =
    React.useState<CSSProperties['width']>(undefined)
  const [leftGutterWidth, setLeftGutterWidth] =
    React.useState<CSSProperties['width']>(undefined)
  return (
    <div>
      <div style={{display: 'flex', height: '100%', flex: 1}}>
        <div
          ref={rightGutterRef}
          style={{
            position: 'relative',
            width: rightGutterWidth,
          }}
        >
          <div style={{overflow: 'hidden'}}>Right side</div>
          <Gutter parentRef={rightGutterRef} onChange={setRightGutterWidth} />
        </div>
        <div style={{flex: 1}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          ref={leftGutterRef}
          style={{
            position: 'relative',
            width: leftGutterWidth,
            paddingLeft: '12px',
          }}
        >
          <div style={{overflow: 'hidden'}}>Left side</div>
          <Gutter
            parentRef={leftGutterRef}
            onChange={setLeftGutterWidth}
            side='left'
          />
        </div>
      </div>

      {/* <div style={{display: 'flex', height: '100%', flex: 1}}>
        <div
          ref={rightGutterRef}
          style={{
            position: 'relative',
            width: rightGutterWidth,
          }}
        >
          <div style={{overflow: 'hidden'}}>Right side</div>
          <StaticGutter
            parentRef={rightGutterRef}
            onChange={setRightGutterWidth}
          />
        </div>
        <div style={{flex: 1}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          ref={leftGutterRef}
          style={{
            position: 'relative',
            width: leftGutterWidth,
            paddingLeft: '12px',
          }}
        >
          <div style={{overflow: 'hidden'}}>Left side</div>
          <StaticGutter
            parentRef={leftGutterRef}
            onChange={setLeftGutterWidth}
            side='left'
          />
        </div>
      </div> */}
    </div>
  )
}

export default GutterBothSide
