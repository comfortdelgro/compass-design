import {Column} from '@comfortdelgro/react-compass'
import ProgressBar from '@comfortdelgro/react-compass/progress-bar'

export default function ProgressBarVariantDocs() {
  return (
    <Column css={{gap: '$4'}}>
      <ProgressBar value={20} variant='normal' label='normal' />
      <ProgressBar value={20} variant='rounded' label='rounded' />
    </Column>
  )
}
