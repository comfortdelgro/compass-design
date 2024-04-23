import {Column, ProgressBar} from '@comfortdelgro/react-compass'

export default function ProgressBarVariantDocs() {
  return (
    <Column css={{gap: '$4'}}>
      <ProgressBar value={20} variant='normal' label='normal' />
      <ProgressBar value={20} variant='rounded' label='rounded' />
    </Column>
  )
}
