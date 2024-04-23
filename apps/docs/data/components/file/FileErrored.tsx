import {File, Icon} from '@comfortdelgro/react-compass'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

function FileErrored() {
  return (
    <File.State
      fileName='Filename.png'
      icon={
        <div style={{height: '16px', gap: '8px', display: 'flex'}}>
          <Icon icon={faExclamationTriangle} />
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'
              fill='#323130'
            />
          </svg>
        </div>
      }
      css={{
        background: '#EFD9DB',
      }}
    />
  )
}

export default FileErrored
