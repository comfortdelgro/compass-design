import {Skeleton} from '@comfortdelgro/react-compass'

function SkeletonAnimations() {
  return (
    <div style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
      <Skeleton width={210} height={60} color='var(--colors-gray40)' />
      <Skeleton
        width={210}
        height={60}
        animation='wave'
        color='var(--colors-gray40)'
      />
      <Skeleton
        width={210}
        height={60}
        animation={false}
        color='var(--colors-gray40)'
      />
    </div>
  )
}

export default SkeletonAnimations
