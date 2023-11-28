import {Column, ProgressBar} from '@comfortdelgro/react-compass'

export default function ProgressBarSizeDocs() {
  return (
    <Column css={{gap: '$4'}}>
      <ProgressBar value={20} size='sm' label='sm' />
      <ProgressBar value={20} size='md' label='md' />
      <ProgressBar value={20} size='lg' label='lg - default' />
      <ProgressBar value={20} size='xl' label='xl' />
    </Column>
  )
}
