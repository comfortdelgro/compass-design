import type {Meta} from '@storybook/react'
import React from 'react'
import Upload from '.'

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '3rem',
}

const getFileFunc = (file: File[]) => {
  if (file.length < 1) return
  console.log(file)
}

export const Basic: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>
        Default file upload is click-to-upload variant which allows only 1
        uploaded file
      </h3>
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
    <div style={{...style}}>
      <h3>Click-to-upload</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={999999999999999}
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
      <h3>Custom error message</h3>
      <Upload
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={30000}
        onError={(error) => setCustomError(error)}
        customErrorMessages={<span>No no no! You have a {customError}</span>}
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
        fileSizeLimit={9990000}
        multiple
      />
    </div>
  )
}

export const DragAndDrop: React.FC = () => {
  const [customError, setCustomError] = React.useState<string>('')
  return (
    <div style={{...style}}>
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

      <h3> drag-and-drop with custom error message</h3>
      <Upload.DragAndDrop
        getFile={getFileFunc}
        accept='image/*, .docs, .docx'
        fileSizeLimit={300000}
        multiple
        onError={(error) => setCustomError(error)}
        customErrorMessages={<span>No no no! You have a {customError}</span>}
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
        fileSizeLimit={9990000}
        multiple
        label='Custom label'
        isDisabled
      />
    </div>
  )
}

const meta = {
  title: 'Example/Upload ',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
