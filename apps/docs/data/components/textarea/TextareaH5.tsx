import { Textarea } from '@comfortdelgro/react-compass'

function TextareaH5() {
  return (
    <Textarea
      variant='h5'
      resizable={false}
      placeholder='Type your feedback here'
      wordCount
      maxLength={200}
      css={{
        textarea: {
          width: '343px',
          height: '129px',
        },
      }}
      label='Details'
    />
  )
}

export default TextareaH5
