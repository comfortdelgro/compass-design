import {Column} from '@comfortdelgro/react-compass-old'
import ProgressBar from '@comfortdelgro/react-compass-old/progress-bar'

export default function ProgressBarVariantDocs() {
  return (
    <Column css={{gap: '$4'}}>
      <ProgressBar value={20} variant='normal' label='normal' />
      <ProgressBar value={20} variant='rounded' label='rounded' />
    </Column>
  )
}
