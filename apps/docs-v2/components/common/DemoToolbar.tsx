import {
  Badge,
  Box,
  Button,
  Icon,
  Tooltip,
  TooltipTrigger,
} from '@comfortdelgro/react-compass'
import {
  faCode,
  faCodeFork,
  faCopy,
  faFileCode,
  faInfinity,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons'
import copy from 'clipboard-copy'
import Link from 'next/link'
import codeSandbox from '../sandbox/CodeSandbox'

export default function DemoToolbar(props: any) {
  const {
    codeOpen,
    demo,
    demoData,
    initialFocusRef,
    onCodeOpenChange,
    onResetDemoClick,
  } = props

  const handleCopyClick = async () => {
    await copy(demo.rawTS)
    // TODO: handle toast
  }

  const handleCodeOpenClick = () => {
    document.cookie = `sourceHintSeen=true;path=/;max-age=31536000`
    onCodeOpenChange()
  }

  const handleResetFocusClick = () => {
    console.log(initialFocusRef)
    initialFocusRef.current.focus()
  }

  return (
    <>
      <Box
        css={{
          background: '$gray30',
          borderTop: '1px solid $gray40',
          borderRight: '1px solid $gray40',
          borderLeft: '1px solid $gray40',
          padding: '$2 $4',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Badge label='Typescript' color='info' />
        </Box>
        <Box>
          <TooltipTrigger>
            <Button variant='ghost' size='sm' onClick={handleCodeOpenClick}>
              <Icon icon={faCode}></Icon>
            </Button>
            <Tooltip>
              {codeOpen ? 'Hide the source' : 'Show the source'}
            </Tooltip>
          </TooltipTrigger>

          <TooltipTrigger>
            <Button
              variant='ghost'
              size='sm'
              onClick={() =>
                codeSandbox.createReactApp(demoData).openSandbox('/demo')
              }
            >
              <Icon icon={faCodeFork}></Icon>
            </Button>
            <Tooltip>Edit in code Sandbox</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <Button variant='ghost' size='sm' onClick={handleCopyClick}>
              <Icon icon={faCopy}></Icon>
            </Button>
            <Tooltip>Copy the source code</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <Button variant='ghost' size='sm' onClick={handleResetFocusClick}>
              <Icon icon={faInfinity}></Icon>
            </Button>
            <Tooltip>Reset focus to test keyboard navigation</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <Button variant='ghost' size='sm' onClick={onResetDemoClick}>
              <Icon icon={faRefresh}></Icon>
            </Button>
            <Tooltip>Reset demo</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <Link href={demoData.githubLocation}>
              <Button variant='ghost' size='sm'>
                <Icon icon={faFileCode}></Icon>
              </Button>
            </Link>
            <Tooltip>View the source on Github</Tooltip>
          </TooltipTrigger>
        </Box>
      </Box>
    </>
  )
}
