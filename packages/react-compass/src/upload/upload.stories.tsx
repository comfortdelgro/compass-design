import React from 'react'
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
        fileSizeLimit={30000}
      />
    </Column>
  )
}

export const ClickToUpload: React.FC = () => {
  return (
    <Column>
      <h3>Click-to-upload</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
      />

      <h3>Custom helper text</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        helperText={
          <>
            <span>
              Only files with the following extensions are allowed: pdf, image
              extension, excel, word, powerpoint
            </span>
            <br />
            <span>Maximum file size is 30MB</span>
          </>
        }
      />

      <h3>Add label</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        helperText={'Custom helper text'}
        label='Upload label'
      />

      <h3>isRequired</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        isRequired
        label='Upload label'
      />
      <h3>isDisabled</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        isDisabled
      />

      <h3>Allow multiple uploaded file</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        multiple
      />
    </Column>
  )
}

export const DragAndDrop: React.FC = () => {
  return (
    <Column>
      <h3>Primary drag-and-drop</h3>
      <Upload.DragAndDrop
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000000000000000000000000}
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

      <h3>drag-and-drop with custom helper text</h3>
      <Upload.DragAndDrop
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        multiple
        helperText='Custom helper text'
      />

      <h3>drag-and-drop with custom label</h3>
      <Upload.DragAndDrop
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        multiple
        label='Custom label'
      />

      <h3>drag-and-drop with isRequired</h3>
      <Upload.DragAndDrop
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        multiple
        label='Custom label'
        isRequired
      />
      <h3>drag-and-drop with isDisabled</h3>
      <Upload.DragAndDrop
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        multiple
        label='Custom label'
        isDisabled
      />
    </Column>
  )
}
