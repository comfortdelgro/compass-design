import { Skeleton } from "@comfortdelgro/react-compass"

function SkeletonVariants() {
  return (
    <div style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
      <Skeleton variant='text' width={210} />
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='rectangular' width={210} height={60} />
      <Skeleton variant='rounded' width={210} height={60} />
      <Skeleton variant='rectangular'>
        <div style={{width: 210, height: 120}} />
      </Skeleton>
    </div>
  )
}

export default SkeletonVariants
