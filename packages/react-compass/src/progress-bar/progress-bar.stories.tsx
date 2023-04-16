import {Column} from '../utils/components'
import ProgressBar from './index'

export const Size: React.FC = () => (
  <Column>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} size='sm' label='sm' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} size='md' label='md' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} size='lg' label='lg' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} size='xl' label='xl' />
    </div>
  </Column>
)

export const Color: React.FC = () => (
  <Column>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} color='blue' label='blue' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} color='green' label='green' />
    </div>
  </Column>
)

export const Variant: React.FC = () => (
  <Column>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} variant='normal' label='normal' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} variant='rounded' label='rounded' />
    </div>
  </Column>
)
