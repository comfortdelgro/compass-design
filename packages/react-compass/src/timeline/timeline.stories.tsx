import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import Timeline from './index'

export const Default: React.FC = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <Column>
      <h3>
        Default timeline is vertical with label and item both are aligned on the
        right
      </h3>
      <div style={{position: 'relative', left: '11.55rem'}}>
        <Timeline>
          <Timeline.Item
            label='June'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 2</div>
            <div style={itemStyle}>reminder 2</div>
          </Timeline.Item>
          <Timeline.Item
            label='July'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'red', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 3</div>
            <div style={itemStyle}>reminder 4</div>
          </Timeline.Item>
          <Timeline.Item
            label='August'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 5</div>
            <div style={itemStyle}>reminder 6</div>
            <div style={itemStyle}>reminder 7</div>
          </Timeline.Item>
        </Timeline>
      </div>
    </Column>
  )
}

export const Variants: React.FC = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <Column>
      <h3>Vertical timeline with left-side labels and left-side items</h3>
      <Timeline mode='vertical' labelAlignment='left' itemAlignment='left'>
        <Timeline.Item
          label='June'
          dot={
            <Icon
              icon={faCalendarDay}
              style={{color: 'white', height: '50%'}}
            />
          }
        >
          <div style={itemStyle}>reminder 2</div>
          <div style={itemStyle}>reminder 2</div>
        </Timeline.Item>
        <Timeline.Item
          label='July'
          dot={
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
          }
        >
          <div style={itemStyle}>reminder 3</div>
          <div style={itemStyle}>reminder 4</div>
        </Timeline.Item>
        <Timeline.Item
          label='August'
          dot={
            <Icon
              icon={faCalendarDay}
              style={{color: 'white', height: '50%'}}
            />
          }
        >
          <div style={itemStyle}>reminder 5</div>
          <div style={itemStyle}>reminder 6</div>
          <div style={itemStyle}>reminder 7</div>
        </Timeline.Item>
      </Timeline>
      <h3>Vertical timeline with left-side labels and right-side items</h3>
      <div style={{position: 'relative', left: '11.55rem'}}>
        <Timeline mode='vertical' labelAlignment='left' itemAlignment='right'>
          <Timeline.Item
            label='June'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 2</div>
            <div style={itemStyle}>reminder 2</div>
          </Timeline.Item>
          <Timeline.Item
            label='July'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'red', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 3</div>
            <div style={itemStyle}>reminder 4</div>
          </Timeline.Item>
          <Timeline.Item
            label='August'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 5</div>
            <div style={itemStyle}>reminder 6</div>
            <div style={itemStyle}>reminder 7</div>
          </Timeline.Item>
        </Timeline>
      </div>

      <h3>Vertical timeline with right-side labels and left-side items</h3>
      <div>
        <Timeline mode='vertical' labelAlignment='right' itemAlignment='left'>
          <Timeline.Item
            label='June'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 2</div>
            <div style={itemStyle}>reminder 2</div>
          </Timeline.Item>
          <Timeline.Item
            label='July'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'red', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 3</div>
            <div style={itemStyle}>reminder 4</div>
          </Timeline.Item>
          <Timeline.Item
            label='August'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 5</div>
            <div style={itemStyle}>reminder 6</div>
            <div style={itemStyle}>reminder 7</div>
          </Timeline.Item>
        </Timeline>
      </div>

      <h3>Vertical timeline with alternate alignment</h3>
      <div style={{position: 'relative', left: '11.55rem'}}>
        <Timeline
          mode='vertical'
          labelAlignment='alternate'
          itemAlignment='alternate'
        >
          <Timeline.Item
            identifier={0}
            label='June'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 2</div>
            <div style={itemStyle}>reminder 2</div>
          </Timeline.Item>
          <Timeline.Item
            identifier={1}
            label='July'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'red', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 3</div>
            <div style={itemStyle}>reminder 4</div>
          </Timeline.Item>
          <Timeline.Item
            identifier={2}
            label='August'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 5</div>
            <div style={itemStyle}>reminder 6</div>
            <div style={itemStyle}>reminder 7</div>
          </Timeline.Item>
        </Timeline>
      </div>
      <h3>Horizontal timeline with top label and bottom items</h3>
      <div style={{position: 'relative', left: '11.55rem', top: '8rem'}}>
        <Timeline mode='horizontal' labelAlignment='top' itemAlignment='bottom'>
          <Timeline.Item
            identifier={0}
            label='June'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 2</div>
            <div style={itemStyle}>reminder 2</div>
          </Timeline.Item>
          <Timeline.Item
            identifier={1}
            label='July'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'red', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 3</div>
            <div style={itemStyle}>reminder 4</div>
          </Timeline.Item>
          <Timeline.Item
            identifier={2}
            label='August'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 5</div>
            <div style={itemStyle}>reminder 6</div>
            <div style={itemStyle}>reminder 7</div>
          </Timeline.Item>
        </Timeline>
      </div>
      <br />

      <h3 style={{margin: '3rem', marginTop: '5rem'}}>
        Horizontal timeline with bottom label and top items
      </h3>
      <div
        style={{
          position: 'relative',
          left: '11.55rem',
          top: '1rem',
          marginBottom: '10rem',
        }}
      >
        <Timeline mode='horizontal' labelAlignment='bottom' itemAlignment='top'>
          <Timeline.Item
            identifier={0}
            label='June'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 2</div>
            <div style={itemStyle}>reminder 2</div>
          </Timeline.Item>
          <Timeline.Item
            identifier={1}
            label='July'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'red', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 3</div>
            <div style={itemStyle}>reminder 4</div>
          </Timeline.Item>
          <Timeline.Item
            identifier={2}
            label='August'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 5</div>
            <div style={itemStyle}>reminder 6</div>
            <div style={itemStyle}>reminder 7</div>
          </Timeline.Item>
        </Timeline>
      </div>

      <h3 style={{margin: '3rem', marginTop: '5rem'}}>
        Horizontal timeline with alternate items and label
      </h3>
      <div
        style={{
          position: 'relative',
          left: '11.55rem',
          top: '1rem',
          marginBottom: '10rem',
        }}
      >
        <Timeline
          mode='horizontal'
          labelAlignment='alternate'
          itemAlignment='alternate'
        >
          <Timeline.Item
            identifier={0}
            label='June'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 2</div>
            <div style={itemStyle}>reminder 2</div>
            <div style={itemStyle}>reminder 3</div>
          </Timeline.Item>
          <Timeline.Item
            identifier={1}
            label='July'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'red', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 3</div>
            <div style={itemStyle}>reminder 4</div>
          </Timeline.Item>
          <Timeline.Item
            identifier={2}
            label='August'
            dot={
              <Icon
                icon={faCalendarDay}
                style={{color: 'white', height: '50%'}}
              />
            }
          >
            <div style={itemStyle}>reminder 5</div>
            <div style={itemStyle}>reminder 6</div>
            <div style={itemStyle}>reminder 7</div>
          </Timeline.Item>
        </Timeline>
      </div>
    </Column>
  )
}
