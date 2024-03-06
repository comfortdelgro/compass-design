import {Column, Icon, TimeLine} from '@comfortdelgro/react-compass'
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'

const Default: React.FC = () => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  }
  return (
    <Column>
      <div style={{position: 'relative', left: '11.55rem'}}>
        <TimeLine>
          <TimeLine.Item
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
          </TimeLine.Item>
          <TimeLine.Item
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
          </TimeLine.Item>
          <TimeLine.Item
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
          </TimeLine.Item>
        </TimeLine>
      </div>
    </Column>
  )
}
export default Default
