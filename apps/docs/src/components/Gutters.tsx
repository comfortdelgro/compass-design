import {Gutter} from '@comfortdelgro/react-compass'
import {CSSProperties, useRef, useState} from 'react'
export function GutterDefault() {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<CSSProperties['width']>(undefined)

  return (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  )
}

export function GutterLeftSide() {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<CSSProperties['width']>(undefined)

  return (
    <div style={{display: 'flex', height: '100%', flex: 1}}>
      <div style={{flex: 1}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
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
  )
}

export function GutterBothSide() {
  const leftGutterRef = useRef<HTMLDivElement>(null)
  const rightGutterRef = useRef<HTMLDivElement>(null)
  const [leftGutterWidth, setLeftGutterWidth] =
    useState<CSSProperties['width']>(undefined)
  const [rightGutterWidth, setRightGutterWidth] =
    useState<CSSProperties['width']>(undefined)

  return (
    <div style={{display: 'flex', height: '100%', flex: 1}}>
      <div
        ref={rightGutterRef}
        style={{
          position: 'relative',
          width: rightGutterWidth,
        }}
      >
        <div style={{overflow: 'hidden'}}>Right side</div>
        <Gutter
          parentRef={rightGutterRef}
          onChange={setRightGutterWidth}
        />
      </div>
      <div style={{flex: 1}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
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
  )
}

export function ExtendableGutter() {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<CSSProperties['width']>(undefined)

  return (
    <div style={{display: 'flex', height: '100%', flex: 1}}>
      <div
        ref={ref}
        style={{
          position: 'relative',
          width: width,
        }}
      >
        <div style={{overflow: 'hidden'}}>Right side</div>
        <Gutter parentRef={ref} onChange={setWidth} hasExpandButton />
      </div>
      <div style={{flex: 1}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  )
}
