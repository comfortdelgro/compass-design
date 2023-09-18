import {Column, RatingV2, Typography} from '@comfortdelgro/react-compass'

function IconRating() {
  return (
    <Column css={{padding: '5px'}}>
      <Typography.Header variant='header3'>
        Config Limited rating
      </Typography.Header>
      <RatingV2
        maxRating={8}
        onChange={(value) => {
          console.log(value)
        }}
      />
      <Typography.Header variant='header3'>
        Custom render rating
      </Typography.Header>
      <RatingV2
        onChange={(value) => {
          console.log('Star rating changed to:', value)
        }}
        renderStar={(isFilled, value) => {
          return <span style={{margin: '0 5px'}}>{isFilled ? '🌟' : '⭐'}</span>
        }}
      />
    </Column>
  )
}

export default IconRating
