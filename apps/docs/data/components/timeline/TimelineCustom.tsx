import {Icon, TimeLine} from '@comfortdelgro/react-compass'
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'

const HorizontalAlternate = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10rem',
      }}
    >
      <TimeLine
        mode='horizontal'
        labelAlignment='alternate'
        itemAlignment='alternate'
      >
        <TimeLine.Item
          identifier={0}
          label='June'
          dot={
            <Icon
              icon={faCalendarDay}
              style={{color: 'green', height: '50%'}}
            />
          }
        >
          <div style={itemStyle}>reminder 2</div>
          <div style={itemStyle}>reminder 2</div>
          <div style={itemStyle}>reminder 3</div>
        </TimeLine.Item>
        <TimeLine.Item
          identifier={1}
          label='July'
          dot={
            <Icon icon={faCalendarDay} style={{color: 'red', height: '50%'}} />
          }
        >
          <div style={itemStyle}>reminder 3</div>
          <div style={itemStyle}>reminder 4</div>
        </TimeLine.Item>
        <TimeLine.Item
          identifier={2}
          label='August'
          dot={
            <Icon
              icon={faCalendarDay}
              style={{color: 'green', height: '50%'}}
            />
          }
        >
          <div style={itemStyle}>reminder 5</div>
          <div style={itemStyle}>reminder 6</div>
          <div style={itemStyle}>reminder 7</div>
        </TimeLine.Item>
      </TimeLine>
    </div>
  )
}

export default HorizontalAlternate
