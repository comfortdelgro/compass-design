import {Typography, Upload} from '@comfortdelgro/react-compass'
import React from 'react'

const getFileFunc = (file: File[]) => {
  if (file.length < 1) return
  console.log(file)
}

const DragAndDrop: React.FC = () => {
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
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          Primary drag-and-drop
        </Typography.Header>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000000000000000000000000}
          multiple
        />
      </div>
      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          Secondary drag-and-drop
        </Typography.Header>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          variant='area'
          multiple={true}
        />
      </div>

      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          drag-and-drop with custom helper text
        </Typography.Header>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          multiple
          helperText='Custom helper text'
        />
      </div>

      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          drag-and-drop with custom error message
        </Typography.Header>
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
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          drag-and-drop with custom label
        </Typography.Header>
        <Upload.DragAndDrop
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          multiple
          label='Custom label'
        />
      </div>
      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          drag-and-drop with isRequired
        </Typography.Header>
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
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          drag-and-drop with isDisabled
        </Typography.Header>
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

export default DragAndDrop
