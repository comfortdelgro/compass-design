import {Skeleton} from '@comfortdelgro/react-compass'
// import {Skeleton as StaticSkeleton} from '@comfortdelgro/static'

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

      {/* <StaticSkeleton width={210} height={60} color='var(--colors-gray40)' />
      <StaticSkeleton
        width={210}
        height={60}
        animation='wave'
        color='var(--colors-gray40)'
      />
      <StaticSkeleton
        width={210}
        height={60}
        animation={false}
        color='var(--colors-gray40)'
      /> */}
    </div>
  )
}

export default SkeletonAnimations
