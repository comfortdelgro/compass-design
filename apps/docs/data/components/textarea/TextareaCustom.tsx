import {Textarea} from '@comfortdelgro/react-compass-old'

function TextareaCustom() {
  return (
    <Textarea
      label='Text Label'
      placeholder='Enter your message'
      wordCount
      maxLength={50}
      isErrored
      css={{height: '10em', width: '50em'}}
    />
  )
}

export default TextareaCustom
