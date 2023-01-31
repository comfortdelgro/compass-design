import {Column} from '../utils/components'
import Upload from './upload'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default file upload</h3>
      <Upload
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
