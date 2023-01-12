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
        accept='image/*, .docs, .docx'
        // fileSizeLimit={30000}
      />
    </Column>
  )
}

export const Variants: React.FC = () => {
  return (
    <Column>
      <h3>Click-to-upload</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        // fileSizeLimit={30000}
      />

      <h3>Allow multiple uploaded file</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        // fileSizeLimit={30000}
        multiple
      />

      <h3>Primary drag-and-drop</h3>
      <Upload.DragAndDrop
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        multiple
      />

      <h3>Secondary drag-and-drop</h3>
      <Upload.DragAndDrop
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        variant='area'
        multiple={true}
      />
    </Column>
  )
}
