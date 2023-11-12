import {Skeleton} from '@comfortdelgro/react-compass'
// import {Skeleton as StaticSkeleton} from '@comfortdelgro/static'


function SkeletonVariants() {
  return (
    <div
      style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}
      color='var(--colors-gray40)'
    >
      <Skeleton variant='text' width={210} color='var(--colors-gray40)' />
      <Skeleton
        variant='circular'
        width={40}
        height={40}
        color='var(--colors-gray40)'
      />
      <Skeleton
        variant='rectangular'
        width={210}
        height={60}
        color='var(--colors-gray40)'
      />
      <Skeleton
        variant='rounded'
        width={210}
        height={60}
        color='var(--colors-gray40)'
      />
      <Skeleton variant='rectangular' color='var(--colors-gray40)'>
        <div style={{width: 210, height: 120}} />
      </Skeleton>

      {/* <StaticSkeleton variant='text' width={210} color='var(--colors-gray40)' />
      <StaticSkeleton
        variant='circular'
        width={40}
        height={40}
        color='var(--colors-gray40)'
      />
      <StaticSkeleton
        variant='rectangular'
        width={210}
        height={60}
        color='var(--colors-gray40)'
      />
      <StaticSkeleton
        variant='rounded'
        width={210}
        height={60}
        color='var(--colors-gray40)'
      />
      <StaticSkeleton variant='rectangular' color='var(--colors-gray40)'>
        <div style={{width: 210, height: 120}} />
      </StaticSkeleton> */}
    </div>
  )
}

export default SkeletonVariants
