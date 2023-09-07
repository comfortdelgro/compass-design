import {Typography, Upload} from '@comfortdelgro/react-compass'
import React from 'react'

const getFileFunc = (file: File[]) => {
  if (file.length < 1) return
  console.log(file)
}

const ClickToUpload: React.FC = () => {
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
          Click-to-upload
        </Typography.Header>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={999999999999999}
        />
      </div>

      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          Custom helper text
        </Typography.Header>
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
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          Custom error message
        </Typography.Header>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          onError={(error) => setCustomError(error)}
          customErrorMessages={<span>No no no! You have a {customError}</span>}
        />
      </div>
      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          Add label
        </Typography.Header>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          helperText={'Custom helper text'}
          label='Upload label'
        />
      </div>
      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          isRequired
        </Typography.Header>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          isRequired
          label='Upload label'
        />
      </div>
      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          isDisabled
        </Typography.Header>
        <Upload
          getFile={getFileFunc}
          accept='image/*, .docs, .docx'
          fileSizeLimit={30000}
          isDisabled
        />
      </div>

      <div>
        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>
          Allow multiple uploaded file
        </Typography.Header>
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

export default ClickToUpload
