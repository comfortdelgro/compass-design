import {Column, Divider, ProgressBar} from '@comfortdelgro/react-compass-old'

export default function ProgressBarLoadingDocs() {
  return (
    <Column css={{gap: '$4'}}>
      <ProgressBar variant='rounded' label='Default' loading />
      <ProgressBar
        variant='rounded'
        label='Stripes'
        color='$blueShades80'
        barColor='$blueShades10'
        loading='stripes'
      />

      <Divider />
      <ProgressBar
        variant='rounded'
        label='With color'
        color='$dangerShades'
        barColor='#fecaca'
        loading
      />
    </Column>
  )
}
