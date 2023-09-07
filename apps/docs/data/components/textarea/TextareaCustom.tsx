import {Textarea} from '@comfortdelgro/react-compass'

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
