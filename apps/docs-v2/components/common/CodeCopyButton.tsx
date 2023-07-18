import Copy from '@comfortdelgro/compass-icons/react/copy'
import TickCircle from '@comfortdelgro/compass-icons/react/tick-circle'
import {useEffect, useState} from 'react'
import useClipboardCopy from 'utils/useClipboardCopy'

interface CodeCopyButtonProps {
  code: string
}

export default function CodeCopyButton(props: CodeCopyButtonProps) {
  const {code, ...other} = props
  const {copy, isCopied} = useClipboardCopy()
  const [key, setKey] = useState('Ctrl +')
  useEffect(() => {
    const macOS = window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
    setKey(macOS ? '⌘' : 'Ctrl + ')
  })

  return (
    <button
      {...other}
      aria-label='Copy the code'
      type='button'
      className='cdg-copy'
      onClick={async (event) => {
        event.stopPropagation()
        await copy(code)
      }}
    >
      {isCopied ? <TickCircle /> : <Copy />}
      <span className='cdg-copyKeypress'>
        <span>(or</span> {key}C<span>)</span>
      </span>
    </button>
  )
}
