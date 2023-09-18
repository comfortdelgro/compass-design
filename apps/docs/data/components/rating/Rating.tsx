import {Column, Rating, Typography} from '@comfortdelgro/react-compass'

function BasicExample() {
  return (
    <Column css={{padding: '5px'}}>
      <Typography.Header variant='header3'>
        Default Rating Component
      </Typography.Header>
      <Rating
        onChange={(value) => {
          console.log(value)
        }}
      />
      <Typography.Header variant='header3'>
        Controlled Rating Component
      </Typography.Header>
      <Rating value={3} />
      <Typography.Header variant='header3'>
        Read-only Rating Component
      </Typography.Header>
      <Rating value={3} readOnly />
      <Typography.Header variant='header3'>
        Disabled Rating Component
      </Typography.Header>
      <Rating disabled />
    </Column>
  )
}

export default BasicExample
