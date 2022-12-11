import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import Button from '../button'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import Upload from './index'

const getFileFunc = (file: File[]) => {
  if (file.length < 1) return
  console.log(file)
}

export const Default: React.FC = () => {
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
  return (
    <Column>
      <h3>Click-to-upload</h3>
      <Upload
        getFile={getFileFunc}
        fileExtenstions='image/*, .docs, .docx'
        fileSizeLimit={30000}
        variant='click'
      >
        <Upload.Button>Browse file</Upload.Button>
        <Upload.Placeholder>No file chosen</Upload.Placeholder>
      </Upload>

      <h3>Allow multiple uploaded file</h3>
      <Upload
        getFile={getFileFunc}
        fileExtenstions='image/*, .docs, .docx'
        fileSizeLimit={3000000}
        variant='click'
        multiple={true}
      >
        <Upload.Button>Browse file</Upload.Button>
        <Upload.Placeholder>Please upload</Upload.Placeholder>
      </Upload>

      <h3>Primary drag-and-drop</h3>
      <Upload
        getFile={getFileFunc}
        fileExtenstions='image/*, .docs, .docx'
        fileSizeLimit={30000}
        variant='dropPrimary'
        multiple
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

      <h3>Secondary drag-and-drop</h3>
      <Upload
        getFile={getFileFunc}
        fileExtenstions='image/*, .docs, .docx'
        fileSizeLimit={30000}
        variant='dropSecondary'
        multiple={true}
      >
        <Upload.Icon>
          <Icon icon={faCloudArrowUp} />
        </Upload.Icon>
        <Upload.Button>
          <Button
            css={{
              width: '40%',
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
