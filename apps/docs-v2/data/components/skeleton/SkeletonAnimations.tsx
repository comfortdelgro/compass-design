import {Skeleton} from '@comfortdelgro/react-compass'

function SkeletonAnimations() {
  return (
    <div style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
      <Skeleton width={210} height={60} />
      <Skeleton width={210} height={60} animation='wave' />
      <Skeleton width={210} height={60} animation={false} />
    </div>
  )
}

export default SkeletonAnimations
