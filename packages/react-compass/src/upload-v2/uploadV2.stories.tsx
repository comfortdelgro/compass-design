import {Column} from '../utils/components'
import Upload2 from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default file upload</h3>
      <Upload2
        fileType={{
          accept: 'image/*',
          label: 'PNG, JPEG',
          type: ['image/jpeg', 'image/jpg', 'image/png'],
        }}
        maxFileSize={10} // 10MB
      />
    </Column>
  )
}
