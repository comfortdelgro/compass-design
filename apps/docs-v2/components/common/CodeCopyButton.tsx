import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded'
import useClipboardCopy from 'utils/useClipboardCopy'

interface CodeCopyButtonProps {
  code: string
}

export default function CodeCopyButton(props: CodeCopyButtonProps) {
  const {code, ...other} = props
  const {copy, isCopied} = useClipboardCopy()
  const macOS = window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
  const key = macOS ? '⌘' : 'Ctrl + '

  return (
    <button
      {...other}
      aria-label='Copy the code'
      type='button'
      className='MuiCode-copy'
      onClick={async (event) => {
        event.stopPropagation()
        await copy(code)
      }}
    >
      {isCopied ? (
        <LibraryAddCheckRoundedIcon sx={{fontSize: 18}} />
      ) : (
        <ContentCopyRoundedIcon sx={{fontSize: 18}} />
      )}
      <span className='MuiCode-copyKeypress'>
        <span>(or</span> {key}C<span>)</span>
      </span>
    </button>
  )
}
