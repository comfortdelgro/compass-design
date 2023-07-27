import Icon from '@comfortdelgro/react-compass/icon'
import Timeline from '@comfortdelgro/react-compass/timeline'
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'

export const VerticalLeftLeft = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <>
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
    </>
  )
}

export const VerticalLeftRight = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <>
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
    </>
  )
}

export const VerticalRightLeft = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <>
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
    </>
  )
}

export const VerticalAlternate = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <>
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
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
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
    </>
  )
}

export const HorizontalTopBottom = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <>
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
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
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
    </>
  )
}
export const HorizontalBottomTop = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <>
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
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
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
    </>
  )
}

export const HorizontalAlternate = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <>
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
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
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
    </>
  )
}
