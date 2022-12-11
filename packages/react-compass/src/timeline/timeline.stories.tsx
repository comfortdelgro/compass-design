import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import Timeline from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>
        Default timeline is vertical with label and item both are aligned on the
        right
      </h3>
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
          <p>reminder 1</p>
          <p>reminder 2</p>
        </Timeline.Item>
        <Timeline.Item
          label='July'
          dot={
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
          }
        >
          <p>reminder 3</p>
          <p>reminder 4</p>
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
          <p>reminder 5</p>
          <p>reminder 6</p>
          <p>reminder 7</p>
        </Timeline.Item>
      </Timeline>
    </Column>
  )
}

export const Variants: React.FC = () => {
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
          <p style={{textAlign: 'right'}}>reminder 1234</p>
          <p style={{textAlign: 'right'}}>reminder 2</p>
        </Timeline.Item>
        <Timeline.Item
          label='July'
          dot={
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
          }
        >
          <p style={{textAlign: 'right'}}>reminder 3</p>
          <p style={{textAlign: 'right'}}>reminder 4</p>
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
          <p style={{textAlign: 'right'}}>reminder 5</p>
          <p style={{textAlign: 'right'}}>reminder 6</p>
          <p style={{textAlign: 'right'}}>reminder 7</p>
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
            <p>reminder 1234</p>
            <p>reminder 2</p>
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
            <p>reminder 3</p>
            <p>reminder 4</p>
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
            <p>reminder 5</p>
            <p>reminder 6</p>
            <p>reminder 7</p>
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
            <p style={{textAlign: 'right'}}>reminder 1234</p>
            <p style={{textAlign: 'right'}}>reminder 2</p>
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
            <p style={{textAlign: 'right'}}>reminder 3</p>
            <p style={{textAlign: 'right'}}>reminder 4</p>
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
            <p style={{textAlign: 'right'}}>reminder 5</p>
            <p style={{textAlign: 'right'}}>reminder 6</p>
            <p style={{textAlign: 'right'}}>reminder 7</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </Column>
  )
}
