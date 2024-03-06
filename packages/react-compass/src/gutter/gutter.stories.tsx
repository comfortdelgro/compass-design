import type {Meta} from '@storybook/react'
import React, {CSSProperties, useRef, useState} from 'react'
import Button from '../button'
import Gutter from './index'

export const Default: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(undefined)

  return (
    <div style={{display: 'flex', height: '100%', minHeight: '400px'}}>
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

export const LeftSide: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<CSSProperties['width']>(undefined)

  return (
    <div style={{display: 'flex', height: '100%', minHeight: '400px'}}>
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
        <Gutter
          parentRef={ref}
          onChange={setWidth}
          side='left'
          hasExpandButton
        />
      </div>
    </div>
  )
}

export const BothSide: React.FC = () => {
  const leftGutterRef = useRef<HTMLDivElement>(null)
  const rightGutterRef = useRef<HTMLDivElement>(null)
  const [leftGutterWidth, setLeftGutterWidth] =
    useState<CSSProperties['width']>(undefined)
  const [rightGutterWidth, setRightGutterWidth] =
    useState<CSSProperties['width']>(undefined)

  return (
    <div
      style={{display: 'flex', height: '100%', minHeight: '400px', margin: 50}}
    >
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
          hasExpandButton
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
          hasExpandButton
        />
      </div>
    </div>
  )
}

export const ControlledCollapse: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<CSSProperties['width']>(undefined)
  const [isExpand, setIsExpand] = useState(false)

  return (
    <div
      style={{display: 'flex', height: '100%', minHeight: '400px', margin: 50}}
    >
      <div
        ref={ref}
        style={{
          position: 'relative',
          width: width,
        }}
      >
        <div style={{overflow: 'hidden'}}>Right side</div>
        <Gutter
          isExpand={isExpand}
          parentRef={ref}
          onChange={setWidth}
          hasExpandButton
        />
      </div>
      <div style={{flex: 1}}>
        <Button
          onPress={() => {
            setIsExpand((prev) => !prev)
          }}
        >
          Toggle expand
        </Button>
      </div>
    </div>
  )
}

export const Advanced: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<CSSProperties['width']>(undefined)

  return (
    <div style={{display: 'flex', height: '100%', minHeight: '400px'}}>
      <div
        ref={ref}
        style={{
          position: 'relative',
          width: width ?? '20%', // default value
          maxWidth: '50%', // maximum width
          minWidth: '10%', // minimum width
        }}
      >
        <div style={{overflow: 'hidden'}}>Right side</div>
        <Gutter
          parentRef={ref}
          onChange={setWidth}
          hasExpandButton
          minCollapse={'20%'} // minimum value if collapse
          maxExpand={'40%'} // maximum value if expand
        />
      </div>
      <div style={{flex: 1}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/Gutter',
  component: Default,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
