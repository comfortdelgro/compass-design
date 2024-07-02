import {SlideAction} from '@comfortdelgro/react-compass'

export default function SliderActionIconDocs() {
  return (
    <SlideAction
      style={{
        border: 'none',
        backgroundColor: 'rgba(61, 127, 118, 0.5)',
      }}
      color='#fff'
      icon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          color='red'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          style={{cursor: 'inherit'}}
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 6a7.75 7.75 0 1 0 10 0' />
          <path d='M12 4l0 8' />
        </svg>
      }
      labelType='slide'
    >
      Slide to power off
    </SlideAction>
  )
}
