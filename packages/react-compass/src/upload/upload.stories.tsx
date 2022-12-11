import {Column} from '../utils/components'
import Upload from './index'

export const Default: React.FC = () => {
  const getFileFunc = (file: File) => {
    console.log(file)
  }
  return (
    <Column>
      <h3>
        Default file upload is click variant which allows only 1 file to be
        uploaded
      </h3>
      <Upload
        getFile={getFileFunc}
        fileExtenstions='image/*, .docs, .docx'
        fileSizeLimit={30000}
      >
        <Upload.Button>Browse file</Upload.Button>
        <Upload.Placeholder>No file chosen</Upload.Placeholder>
      </Upload>
    </Column>
  )
}
