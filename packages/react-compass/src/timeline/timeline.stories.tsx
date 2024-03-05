import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'
import type {Meta} from '@storybook/react'
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
            icon={
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
            icon={
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
            icon={
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

  const CustomItemComponent = ({
    dotColor = 'grey',
    date = '18 June 2023',
  }: {
    dotColor: string
    date: string
  }) => {
    return (
      <Timeline.Item
        label={
          <span
            style={{
              fontSize: '0.9em',
              fontWeight: '300',
              lineHeight: '1.2em',
              textAlign: 'center',
              width: '5rem',
            }}
          >
            {date}
          </span>
        }
        dot={
          <div
            style={{
              height: '0.8rem',
              width: '0.8rem',
              borderRadius: '50%',
              backgroundColor: `${dotColor}`,
            }}
          />
        }
        css={{
          '.header-even': {
            position: 'relative',
            right: '9.2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '&': {
            display: 'flex',
            flexDirection: 'row',
          },
          '.content-even': {
            display: 'block',
            marginTop: '0px',
            marginBottom: '0px',
            position: 'relative',
            right: '7.5rem',
          },
        }}
      >
        <div
          style={{
            border: '1px solid #e0e0e0',
            width: '20rem',
            height: '8rem',
            borderRadius: '0.5rem',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            background: '#ffffff',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
            Luxury Spa Experience
          </div>
          <div style={{fontSize: '0.9rem', color: '#666666'}}>
            Date: August 28, 2023
          </div>
          <div style={{fontSize: '0.9rem', color: '#666666'}}>
            Time: 3:00 PM - 5:00 PM
          </div>
          <div
            style={{
              fontSize: '0.9rem',
              color: '#333333',
              textAlign: 'right',
            }}
          >
            Confirmation: #123456
          </div>
        </div>
      </Timeline.Item>
    )
  }
  return (
    <Column>
      <h3>Vertical timeline with left-side labels and left-side items</h3>
      <Timeline mode='vertical' labelAlignment='left' itemAlignment='left'>
        <Timeline.Item
          label='June'
          icon={
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
          icon={
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
          }
        >
          <div style={itemStyle}>reminder 3</div>
          <div style={itemStyle}>reminder 4</div>
        </Timeline.Item>
        <Timeline.Item
          label='August'
          icon={
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
      <div
        style={{
          marginLeft: '11.55rem',
          height: 'fit-content',
          width: 'fit-content',
        }}
      >
        <Timeline mode='vertical' labelAlignment='left' itemAlignment='right'>
          <Timeline.Item
            label='June'
            icon={
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
            icon={
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
            icon={
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

      <Timeline mode='vertical' labelAlignment='right' itemAlignment='left'>
        <Timeline.Item
          label='June'
          icon={
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
          icon={
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
          }
        >
          <div style={itemStyle}>reminder 3</div>
          <div style={itemStyle}>reminder 4</div>
        </Timeline.Item>
        <Timeline.Item
          label='August'
          icon={
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

      <h3>Vertical timeline with alternate alignment</h3>
      <div
        style={{
          marginLeft: '11.55rem',
          width: 'fit-content',
          height: 'fit-content',
        }}
      >
        <Timeline
          mode='vertical'
          labelAlignment='alternate'
          itemAlignment='alternate'
        >
          <Timeline.Item
            identifier={0}
            label='June'
            icon={
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
            icon={
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
            icon={
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
      <div
        style={{
          marginLeft: '11.55rem',
          marginTop: '8rem',
          height: 'fit-content',
          width: 'fit-content',
        }}
      >
        <Timeline mode='horizontal' labelAlignment='top' itemAlignment='bottom'>
          <Timeline.Item
            identifier={0}
            label='June'
            icon={
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
            icon={
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
            icon={
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

      <h3>Horizontal timeline with bottom label and top items</h3>
      <div
        style={{
          marginLeft: '11.55rem',
          marginTop: '1rem',
          marginBottom: '10rem',
          height: 'fit-content',
          width: 'fit-content',
        }}
      >
        <Timeline mode='horizontal' labelAlignment='bottom' itemAlignment='top'>
          <Timeline.Item
            identifier={0}
            label='June'
            icon={
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
            icon={
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
            icon={
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

      <h3>Horizontal timeline with alternate items and label</h3>
      <div
        style={{
          marginLeft: '11.55rem',
          marginTop: '1rem',
          marginBottom: '10rem',
          height: 'fit-content',
          width: 'fit-content',
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
            icon={
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
            icon={
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
            icon={
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
      <h3>Custom Timeline</h3>
      <div
        style={{
          marginLeft: '11.55rem',
          height: 'fit-content',
          width: 'fit-content',
        }}
      >
        <Timeline mode='vertical' labelAlignment='left' itemAlignment='right'>
          <CustomItemComponent dotColor='grey' date='18 June 2023' />
          <CustomItemComponent dotColor='red' date='20 July 2023' />
          <CustomItemComponent dotColor='grey' date='22 August 2023' />
        </Timeline>
      </div>
    </Column>
  )
}

const meta = {
  title: 'Example/Timeline',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
