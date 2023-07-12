import {
  Box,
  Button,
  Tooltip,
  TooltipTrigger,
} from '@comfortdelgro/react-compass'
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
      <Box>
        <Box>
          <TooltipTrigger>
            <Button onClick={handleCodeOpenClick}>
              {codeOpen ? 'Hide the source' : 'Show the source'}
            </Button>
            <Tooltip>
              {codeOpen ? 'Hide the source' : 'Show the source'}
            </Tooltip>
          </TooltipTrigger>

          <TooltipTrigger>
            <Button
              onClick={() =>
                codeSandbox.createReactApp(demoData).openSandbox('/demo')
              }
            >
              Edit in code Sandbox
            </Button>
            <Tooltip>Edit in code Sandbox</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <Button onClick={handleCopyClick}>Copy the source code</Button>
            <Tooltip>Copy the source code</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <Button onClick={handleResetFocusClick}>
              Reset focus to test keyboard navigation
            </Button>
            <Tooltip>Reset focus to test keyboard navigation</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <Button onClick={onResetDemoClick}>Reset demo</Button>
            <Tooltip>Reset demo</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <Link href={demoData.githubLocation}>
              <Button>View the source on Github</Button>
            </Link>
            <Tooltip>View the source on Github</Tooltip>
          </TooltipTrigger>
        </Box>
      </Box>
    </>
  )
}
