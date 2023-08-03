import {Upload} from '@comfortdelgro/react-compass'
import React from 'react'

const getFileFunc = (file: File[]) => {
  if (file.length < 1) return
  console.log(file)
}

export const Default: React.FC = () => {
  return (
    <div>
      <h3>
        Default file upload is click-to-upload variant which allows only 1
        uploaded file
      </h3>
      <br />
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
      />
    </div>
  )
}

export const ClickToUpload: React.FC = () => {
  const [customError, setCustomError] = React.useState<string>('')
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '2rem',
      }}
    >
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>Click-to-upload</h3>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={999999999999999}
        />
      </div>

      <div>
        <h3 style={{marginBottom: '0.8rem'}}>Custom helper text</h3>
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
      </div>
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>Custom error message</h3>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          onError={(error) => setCustomError(error)}
          customErrorMessages={<span>No no no! You have a {customError}</span>}
        />
      </div>
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>Add label</h3>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          helperText={'Custom helper text'}
          label='Upload label'
        />
      </div>
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>isRequired</h3>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          isRequired
          label='Upload label'
        />
      </div>
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>isDisabled</h3>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          isDisabled
        />
      </div>

      <div>
        <h3 style={{marginBottom: '0.8rem'}}>Allow multiple uploaded file</h3>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={9990000}
          multiple
        />
      </div>
    </div>
  )
}

export const DragAndDrop: React.FC = () => {
  const [customError, setCustomError] = React.useState<string>('')
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '2rem',
      }}
    >
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>Primary drag-and-drop</h3>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000000000000000000000000}
          multiple
        />
      </div>
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>Secondary drag-and-drop</h3>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          variant='area'
          multiple={true}
        />
      </div>

      <div>
        <h3 style={{marginBottom: '0.8rem'}}>
          drag-and-drop with custom helper text
        </h3>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          multiple
          helperText='Custom helper text'
        />
      </div>

      <div>
        <h3 style={{marginBottom: '0.8rem'}}>
          drag-and-drop with custom error message
        </h3>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={300000}
          multiple
          onError={(error) => setCustomError(error)}
          customErrorMessages={<span>No no no! You have a {customError}</span>}
        />
      </div>

      <div>
        <h3 style={{marginBottom: '0.8rem'}}>
          drag-and-drop with custom label
        </h3>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          multiple
          label='Custom label'
        />
      </div>
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>drag-and-drop with isRequired</h3>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          multiple
          label='Custom label'
          isRequired
        />
      </div>
      <div>
        <h3 style={{marginBottom: '0.8rem'}}>drag-and-drop with isDisabled</h3>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={9990000}
          multiple
          label='Custom label'
          isDisabled
        />
      </div>
    </div>
  )
}
