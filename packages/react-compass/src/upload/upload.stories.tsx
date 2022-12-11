import Button from '../button'
import {Column} from '../utils/components'
import Upload from './index'

export const Default: React.FC = () => {
  const getFileFunc = (file: File) => {
    console.log(file)
  }
  return (
    <Column>
      <h3>
        Default file upload is click-to-upload variant which allows only 1
        uploaded file
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

export const Variants: React.FC = () => {
  const getFileFunc = (file: File) => {
    console.log(file)
  }
  return (
    <Column>
      <h3>Click-to-upload which allows 1 uploaded file</h3>
      <Upload
        getFile={getFileFunc}
        fileExtenstions='image/*, .docs, .docx'
        fileSizeLimit={30000}
        variant='clickSingle'
      >
        <Upload.Button>Browse file</Upload.Button>
        <Upload.Placeholder>No file chosen</Upload.Placeholder>
      </Upload>

      <h3>Drag-and-drop which allows multiple uploaded files</h3>
      <Upload
        getFile={getFileFunc}
        fileExtenstions='image/*, .docs, .docx'
        fileSizeLimit={30000}
        variant='dropPrimary'
      >
        <Upload.Button>
          <Button
            css={{
              width: '80%',
              height: '60%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Upload files
          </Button>
        </Upload.Button>
        <Upload.Placeholder>or Drop files</Upload.Placeholder>
      </Upload>
    </Column>
  )
}
