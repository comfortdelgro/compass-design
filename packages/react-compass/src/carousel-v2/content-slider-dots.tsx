import {
  StyledContentSliderDot,
  StyledContentSliderDots,
} from './content-slider.styles'

interface Props {
  length: number
  current: number
  dotClick?: (index: number) => void
}

const ContentSliderDots = ({length, current, dotClick = () => {}}: Props) => {
  return (
    <StyledContentSliderDots>
      {Array(length)
        .fill(null)
        .map((item: any, index: number) => {
          return (
            <StyledContentSliderDot
              key={index}
              className={`${index === current ? ' active' : ''}`}
              onClick={() => {
                dotClick(index)
              }}
            />
          )
        })}
    </StyledContentSliderDots>
  )
}

export default ContentSliderDots
