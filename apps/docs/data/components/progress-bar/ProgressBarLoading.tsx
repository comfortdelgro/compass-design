import {Column, Divider, ProgressBar} from '@comfortdelgro/react-compass'

export default function ProgressBarLoadingDocs() {
  return (
    <Column css={{gap: 'var(--cdg-spacing-4)'}}>
      <ProgressBar variant='rounded' label='Default' loading />
      <ProgressBar
        variant='rounded'
        label='Stripes'
        color='var(--cdg-color-blueShades80)'
        barColor='var(--cdg-color-blueShades10)'
        loading='stripes'
      />

      <Divider />
      <ProgressBar
        variant='rounded'
        label='With color'
        color='var(--cdg-color-dangerShades)'
        barColor='#fecaca'
        loading
      />
    </Column>
  )
}
