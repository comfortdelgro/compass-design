import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'

export default function SliderEffectDocs() {
  return (
    <Column>
      <Typography.Header variant='header4'>Slide effect</Typography.Header>
      <SlideAction color='#475569'>Default: Slide background</SlideAction>

      <SlideAction css={{marginBlock: '$4'}} color='#475569' slideType='static'>
        Static fade-in background
      </SlideAction>

      <Typography.Header variant='header4'>Label effect</Typography.Header>
      <SlideAction color='#475569' labelType='slide'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        temporibus voluptatibus! Dolorum tenetur in distinctio quaerat, hic a
        soluta, veniam ut id porro adipisci molestias cumque perspiciatis
        asperiores facilis voluptatem.
      </SlideAction>
    </Column>
  )
}
