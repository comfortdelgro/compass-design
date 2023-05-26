import React from 'react'
import {Column} from '../utils/components'
import Upload2 from './index'

export const Variants: React.FC = () => {
  return (
    <Column>
      <h3>Basic</h3>
      <Upload2
        fileType={{
          accept: 'image/*',
          label: 'PNG, JPEG',
          type: ['image/jpeg', 'image/jpg', 'image/png'],
        }}
        maxFileSize={10} // 10MB
        title='Upload your file'
      />

      <h3>isRequired</h3>
      <Upload2
        fileType={{
          accept: 'image/*',
          label: 'PNG, JPEG',
          type: ['image/jpeg', 'image/jpg', 'image/png'],
        }}
        maxFileSize={10} // 10MB
        title='Upload your file'
        isRequired
      />

      <h3>Custom description</h3>
      <Upload2
        fileType={{
          accept: 'image/*',
          label: 'PNG, JPEG',
          type: ['image/jpeg', 'image/jpg', 'image/png'],
        }}
        maxFileSize={10} // 10MB
        customDescription={
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
    </Column>
  )
}
