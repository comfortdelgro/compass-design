import {
  Badge,
  Box,
  Button,
  Icon,
  Tooltip,
  TooltipTrigger,
  useToast,
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
import {useIsMobileScreen} from 'utils/hooks/useMediaQuery'
import sandbox from 'utils/sandbox'

export default function Toolbar(props: any) {
  const {
    codeOpen,
    demo,
    demoData,
    initialFocusRef,
    onCodeOpenChange,
    onResetDemoClick,
  } = props
  const toast = useToast()

  const handleCopyClick = async () => {
    if (codeOpen) {
      await copy(demo.rawTS)
    } else {
      await copy(demo.jsxPreview)
    }
    toast.show({
      color: 'positive',
      title: 'Copy successfully',
    })
  }

  const isMobileScreen = useIsMobileScreen()

  const handleCodeOpenClick = () => {
    document.cookie = `sourceHintSeen=true;path=/;max-age=31536000`
    onCodeOpenChange()
  }

  const handleResetFocusClick = () => {
    initialFocusRef.current.style.display = 'block'
    initialFocusRef.current.focus()
  }

  return (
    <>
      <Box
        css={{
          background: 'var(--cdg-color-gray30)',
          borderTop: '1px solid var(--cdg-color-gray40)',
          borderRight: '1px solid var(--cdg-color-gray40)',
          borderLeft: '1px solid var(--cdg-color-gray40)',
          padding: 'var(--cdg-spacing-2) var(--cdg-spacing-3)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {!isMobileScreen && (
          <Box>
            <Badge
              label='Typescript'
              css={{
                color: 'var(--cdg-color-gray80)',
                backgroundColor: 'var(--cdg-color-gray40)',
              }}
            />
          </Box>
        )}

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
              onClick={() => sandbox(demoData).openSandbox('/demo')}
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
