import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import {Textarea} from '@comfortdelgro/react-compass'

function BasicExample() {
  return (
    <div style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
      <Textarea placeholder='Enter your message' />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        isDisabled
      />
      <Textarea
        label={
          <>
            Text Label <BugIcon />
          </>
        }
        placeholder='Enter your message'
        value='Lorem ipsum dolor sit amet.'
      />

      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        value='Lorem ipsum dolor sit amet.'
      />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        maxLength={50}
        value={'Lorem ipsum dolor sit amet.'}
        onChange={() => {}}
      />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        maxLength={50}
        isErrored
      />
    </div>
  )
}

export default BasicExample
