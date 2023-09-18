import {Column, RatingV2, Typography} from '@comfortdelgro/react-compass'

function BasicExample() {
  return (
    <Column css={{padding: '5px'}}>
      <Typography.Header variant='header3'>Default Rating Component</Typography.Header>
      <RatingV2
        onChange={(value) => {
          console.log(value)
        }}
      />
      <Typography.Header variant='header3'>Controlled Rating Component</Typography.Header>
      <RatingV2 currentRating={3} />
      <Typography.Header variant='header3'>Read-only Rating Component</Typography.Header>
      <RatingV2 currentRating={3} readOnly />
      <Typography.Header variant='header3'>Disabled Rating Component</Typography.Header>
      <RatingV2 disabled />
    </Column>
  )
}

export default BasicExample
