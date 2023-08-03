import React from 'react'
import Box from '../box'
import Toggle from '../toggle'
import {Column} from '../utils/components'
import Transitions from './index'

export const Variants: React.FC = () => {
  const [show, setShow] = React.useState(false)

  const Style = {
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
    <Column>
      <Box
        css={{
          width: '7rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
        }}
      >
        <span style={{fontSize: '13px'}}>Click here:</span>
        <Toggle size='sm' onChange={(status) => setShow(status)} />
      </Box>

      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-around',
          '& h3': {
            width: '100%',
            textAlign: 'center',
          },
        }}
      >
        <Box css={{padding: '5px'}}>
          <h3>Collapse</h3>
          <Box
            css={{
              marginBottom: '5px',
              marginTop: '5px',
              minHeight: '180px',
              minWidth: '180px',
            }}
          >
            <Transitions effect='collapse' show={show}>
              <Box css={{...Style}}>Basic</Box>
            </Transitions>
          </Box>
          <Box css={{marginBottom: '5px', minHeight: '180px', width: '180px'}}>
            <Transitions effect='collapse' show={show} speed={2}>
              <Box css={{...Style}}>Custom Speed: 2s</Box>
            </Transitions>
          </Box>
          <Box css={{marginBottom: '5px', minHeight: '180px', width: '180px'}}>
            <Transitions effect='collapse' show={show} collapsedSize='100px'>
              <Box
                css={{
                  ...Style,
                  textAlign: 'center',
                  alignItems: 'start',
                  padding: '3px',
                }}
              >
                Custom Collapsed Size: 100px. Default is 1000px
              </Box>
            </Transitions>
          </Box>
          <Box css={{marginBottom: '5px', minHeight: '180px', width: '180px'}}>
            <Transitions effect='collapse' show={show} orientation='horizontal'>
              <Box css={{...Style}}>Horizontal</Box>
            </Transitions>
          </Box>
        </Box>
        <Box css={{padding: '5px'}}>
          <h3>Fade</h3>
          <Box
            css={{
              marginBottom: '5px',
              marginTop: '5px',
              minHeight: '180px',
              minWidth: '180px',
            }}
          >
            <Transitions effect='fade' show={show}>
              <Box css={{...Style}}>Basic</Box>
            </Transitions>
          </Box>
          <Box
            css={{
              marginBottom: '5px',
              marginTop: '5px',
              minHeight: '180px',
              minWidth: '180px',
            }}
          >
            <Transitions effect='fade' show={show} speed={2}>
              <Box css={{...Style}}>Custom Speed: 2s</Box>
            </Transitions>
          </Box>
        </Box>
        <Box css={{padding: '5px'}}>
          <h3>Zoom</h3>
          <Box
            css={{
              marginBottom: '5px',
              marginTop: '5px',
              minHeight: '180px',
              minWidth: '180px',
            }}
          >
            <Transitions effect='zoom' show={show}>
              <Box css={{...Style}}>Basic</Box>
            </Transitions>
          </Box>
          <Box
            css={{
              marginBottom: '5px',
              marginTop: '5px',
              minHeight: '180px',
              minWidth: '180px',
            }}
          >
            <Transitions effect='zoom' show={show} speed={2}>
              <Box css={{...Style}}>Custom Speed: 2s</Box>
            </Transitions>
          </Box>
        </Box>
        <Box css={{padding: '5px'}}>
          <h3>Slide</h3>
          <Box
            css={{
              marginBottom: '5px',
              marginTop: '5px',
              minHeight: '180px',
              minWidth: '180px',
            }}
          >
            <Transitions effect='slide' show={show}>
              <Box css={{...Style}}>Basic</Box>
            </Transitions>
          </Box>
          <Box
            css={{
              marginBottom: '5px',
              marginTop: '5px',
              minHeight: '180px',
              minWidth: '180px',
            }}
          >
            <Transitions effect='slide' show={show} speed={2}>
              <Box css={{...Style}}>Custom Speed: 2s</Box>
            </Transitions>
          </Box>
          <Box
            css={{
              marginBottom: '5px',
              marginTop: '5px',
              minHeight: '180px',
              minWidth: '180px',
            }}
          >
            <Transitions effect='slide' show={show} slideDirection='top'>
              <Box css={{...Style}}>Custom Direction: top</Box>
            </Transitions>
          </Box>
        </Box>
      </Box>
    </Column>
  )
}
