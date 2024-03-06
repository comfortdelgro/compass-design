import type {Meta} from '@storybook/react'
import React from 'react'

// replace this ass static toggle asap
import Toggle from './../toggle'
import Transitions from './index'

export const Variants: React.FC = () => {
  const [showCollapse, setShowCollapse] = React.useState(false)
  const [showFade, setShowFade] = React.useState(false)
  const [showZoom, setShowZoom] = React.useState(false)
  const [showSlide, setShowSlide] = React.useState(false)

  const TitleStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
  }

  const RowStyle: React.CSSProperties = {
    marginBottom: '5px',
    marginTop: '5px',
    height: '250px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  }

  const TransitionBoxContainerStyle: React.CSSProperties = {
    width: '170px',
    height: '170px',
  }

  const TransitionBoxStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '160px',
    width: '160px',
    backgroundColor: '#ADD8E6',
    borderRadius: '0.5rem',
    border: '1px solid black',
    color: 'black',
    fontWeight: '600',
  }

  return (
    <div>
      {/* Collapse */}
      <div>
        <div
          style={{
            width: '7rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
            marginLeft: '1rem',
          }}
        >
          <span style={{fontSize: '13px'}}>Click here:</span>
          <Toggle size='sm' onChange={(status) => setShowCollapse(status)} />
        </div>
        <div style={{padding: '5px'}}>
          <h3 style={{...TitleStyle}}>Collapse</h3>
          <div
            style={{
              ...RowStyle,
            }}
          >
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='collapse' show={showCollapse}>
                <div style={{...TransitionBoxStyle}}>Basic</div>
              </Transitions>
            </div>
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='collapse' show={showCollapse} speed={2}>
                <div style={{...TransitionBoxStyle}}>Custom Speed: 2s</div>
              </Transitions>
            </div>
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions
                effect='collapse'
                show={showCollapse}
                collapsedSize='120px'
              >
                <div style={{...TransitionBoxStyle}}>
                  Custom Collapsed Size: 100px
                </div>
              </Transitions>
            </div>
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions
                effect='collapse'
                show={showCollapse}
                orientation='horizontal'
              >
                <div style={{...TransitionBoxStyle}}>Horizonal</div>
              </Transitions>
            </div>
          </div>
        </div>
      </div>
      {/* End of Collapse */}

      {/* Fade */}
      <div>
        <div
          style={{
            width: '7rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
            marginLeft: '1rem',
          }}
        >
          <span style={{fontSize: '13px'}}>Click here:</span>
          <Toggle size='sm' onChange={(status) => setShowFade(status)} />
        </div>
        <div style={{padding: '5px'}}>
          <h3 style={{...TitleStyle}}>Fade</h3>
          <div
            style={{
              ...RowStyle,
            }}
          >
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='fade' show={showFade}>
                <div style={{...TransitionBoxStyle}}>Basic</div>
              </Transitions>
            </div>
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='fade' show={showFade} speed={2}>
                <div style={{...TransitionBoxStyle}}>Custom Speed: 2s</div>
              </Transitions>
            </div>
          </div>
        </div>
      </div>
      {/* End of Fade */}

      {/* Zoom */}
      <div>
        <div
          style={{
            width: '7rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
            marginLeft: '1rem',
          }}
        >
          <span style={{fontSize: '13px'}}>Click here:</span>
          <Toggle size='sm' onChange={(status) => setShowZoom(status)} />
        </div>
        <div style={{padding: '5px'}}>
          <h3 style={{...TitleStyle}}>Zoom</h3>
          <div
            style={{
              ...RowStyle,
            }}
          >
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='zoom' show={showZoom}>
                <div style={{...TransitionBoxStyle}}>Basic</div>
              </Transitions>
            </div>
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='zoom' show={showZoom} speed={2}>
                <div style={{...TransitionBoxStyle}}>Custom speed: 2s</div>
              </Transitions>
            </div>
          </div>
        </div>
      </div>
      {/* End of Zoom */}

      {/* Slide */}
      <div>
        <div
          style={{
            width: '7rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
            marginLeft: '1rem',
          }}
        >
          <span style={{fontSize: '13px'}}>Click here:</span>
          <Toggle size='sm' onChange={(status) => setShowSlide(status)} />
        </div>
        <div style={{padding: '5px'}}>
          <h3 style={{...TitleStyle}}>Slide</h3>
          <div
            style={{
              ...RowStyle,
            }}
          >
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='slide' show={showSlide}>
                <div style={{...TransitionBoxStyle}}>Basic</div>
              </Transitions>
            </div>
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='slide' show={showSlide} speed={2}>
                <div style={{...TransitionBoxStyle}}>Custom speed: 2s</div>
              </Transitions>
            </div>
            <div style={{...TransitionBoxContainerStyle}}>
              <Transitions effect='slide' show={showSlide} slideDirection='top'>
                <div style={{...TransitionBoxStyle}}>Custom Direction: top</div>
              </Transitions>
            </div>
          </div>
        </div>
      </div>
      {/* End of Slide */}
    </div>
  )
}

const meta = {
  title: 'Example/Transitions',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
