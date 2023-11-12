import {Column, Skeleton, Typography} from '@comfortdelgro/react-compass-old'
// import {Skeleton as StaticSkeleton} from '@comfortdelgro/static'

const Animations: React.FC = () => (
  <Column>
    <Typography.Header variant='header4'>Pulse</Typography.Header>
    <Skeleton />
    <Typography.Header variant='header4'>Wave</Typography.Header>
    <Skeleton animation='wave' />
    <Typography.Header variant='header4'>False</Typography.Header>
    <Skeleton animation={false} />

    {/* <Typography.Header variant='header4'>Pulse</Typography.Header>
    <StaticSkeleton />
    <Typography.Header variant='header4'>Wave</Typography.Header>
    <StaticSkeleton animation='wave' />
    <Typography.Header variant='header4'>False</Typography.Header>
    <StaticSkeleton animation={false} /> */}
  </Column>
)

export default Animations
