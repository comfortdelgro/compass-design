import {Column, Skeleton, Typography} from '@comfortdelgro/react-compass'

const Animations: React.FC = () => (
  <Column>
    <Typography.Header variant='header4'>Pulse</Typography.Header>
    <Skeleton />
    <Typography.Header variant='header4'>Wave</Typography.Header>
    <Skeleton animation='wave' />
    <Typography.Header variant='header4'>False</Typography.Header>
    <Skeleton animation={false} />
  </Column>
)

export default Animations
