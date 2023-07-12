import {Box} from '@comfortdelgro/react-compass'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import NoSsr from '@mui/material/NoSsr'
import {styled} from '@mui/material/styles'
import {debounce} from '@mui/material/utils'
import {unstable_useId as useId} from '@mui/utils'
import DemoEditor from 'components/common/DemoEditor'
import DemoEditorError from 'components/common/DemoEditorError'
import DemoSandbox from 'components/common/DemoSandbox'
import HighlightedCode from 'components/common/HighlightedCode'
import ReactRunner from 'components/common/ReactRunner'
import {CODE_STYLING, CODE_VARIANTS} from 'constants'
import {useRouter} from 'next/router'
import * as React from 'react'
import {useCodeStyling} from 'utils/codeStylingSolution'
import {useCodeVariant} from 'utils/codeVariant'
import {pathnameToLanguage} from 'utils/helpers'

function trimLeadingSpaces(input = '') {
  return input.replace(/^\s+/gm, '')
}

const DemoToolbar = React.lazy(() => import('./DemoToolbar'))

function DemoToolbarFallback() {
  return <Box>Loading...</Box>
}

function getDemoName(location) {
  return location.endsWith('.js') || location.endsWith('.tsx')
    ? location.replace(/(.+?)(\w+)\.\w+$$/, '$2')
    : // the demos with multiple styling solution point to directory
      location.split('/').pop()
}

function useDemoData(codeVariant, demo, githubLocation, codeStyling) {
  const userLanguage = 'en'
  const router = useRouter()
  const {canonicalAs} = pathnameToLanguage(router.asPath)

  return React.useMemo(() => {
    let productId
    let name = 'Material UI'

    console.log({codeStyling})

    let codeOptions = {}

    if (codeStyling === CODE_STYLING.SYSTEM) {
      if (codeVariant === CODE_VARIANTS.TS && demo.rawTS) {
        codeOptions = {
          codeVariant: CODE_VARIANTS.TS,
          githubLocation: githubLocation.replace(/\.js$/, '.tsx'),
          raw: demo.rawTS,
          Component: demo.tsx,
          sourceLanguage: 'tsx',
        }
      } else {
        codeOptions = {
          codeVariant: CODE_VARIANTS.JS,
          githubLocation,
          raw: demo.raw,
          Component: demo.js,
          sourceLanguage: 'jsx',
        }
      }
    }

    let jsxPreview = demo.jsxPreview
    if (codeStyling === CODE_STYLING.TAILWIND && demo.tailwindJsxPreview) {
      jsxPreview = demo.tailwindJsxPreview
    } else if (codeStyling === CODE_STYLING.CSS && demo.cssJsxPreview) {
      jsxPreview = demo.cssJsxPreview
    }

    return {
      scope: demo.scope,
      jsxPreview,
      ...codeOptions,
      title: `${getDemoName(githubLocation)} demo — ${name}`,
      productId,
      language: userLanguage,
      codeStyling,
    }
  }, [
    canonicalAs,
    codeVariant,
    demo,
    githubLocation,
    userLanguage,
    codeStyling,
  ])
}

function useDemoElement({
  demoData,
  editorCode,
  setDebouncedError,
  liveDemoActive,
}) {
  const debouncedSetError = React.useMemo(
    () => debounce(setDebouncedError, 300),
    [setDebouncedError],
  )

  React.useEffect(() => {
    return () => {
      debouncedSetError.clear()
    }
  }, [debouncedSetError])

  const BundledComponent = React.useMemo(
    () => <demoData.Component />,
    [demoData],
  )
  const LiveComponent = React.useMemo(
    () => (
      <ReactRunner
        scope={demoData.scope}
        onError={debouncedSetError}
        code={
          editorCode.isPreview
            ? trimLeadingSpaces(demoData.raw).replace(
                trimLeadingSpaces(demoData.jsxPreview),
                editorCode.value,
              )
            : editorCode.value
        }
      />
    ),
    [demoData, debouncedSetError, editorCode.isPreview, editorCode.value],
  )

  // No need for a live environment if the code matches with the component rendered server-side.
  return editorCode.value === editorCode.initialEditorCode &&
    liveDemoActive === false
    ? BundledComponent
    : LiveComponent
}

const DemoCodeViewer = styled(HighlightedCode)(() => ({
  '& pre': {
    margin: 0,
    maxHeight: 'min(68vh, 1000px)',
    maxWidth: 'initial',
    borderRadius: 0,
  },
}))

const InitialFocus = styled(IconButton)(({theme}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: theme.spacing(4),
  height: theme.spacing(4),
  pointerEvents: 'none',
}))

export default function Demo(props) {
  const {demo, demoOptions, disableAd, githubLocation, mode} = props

  if (
    (demoOptions.demo.endsWith('.ts') || demoOptions.demo.endsWith('.tsx')) &&
    demoOptions.hideToolbar !== true
  ) {
    throw new Error(
      [
        `The following demos use TS directly: ${demoOptions.demo}.`,
        '',
        'Please run "yarn docs:typescript:formatted" to generate a JS version and reference it:',
        `{{"demo": "${demoOptions.demo.replace(/\.(.*)$/, '.js')}", …}}.`,
        '',
        "Otherwise, if it's not a code demo hide the toolbar:",
        `{{"demo": "${demoOptions.demo}", "hideToolbar": true, …}}.`,
      ].join('\n'),
    )
  }

  const codeVariant = useCodeVariant()
  const styleSolution = useCodeStyling()

  const demoData = useDemoData(codeVariant, demo, githubLocation, styleSolution)

  const hasNonSystemDemos =
    demo.rawTailwind || demo.rawTailwindTS || demo.rawCSS || demo.rawCSSTs

  const [demoHovered, setDemoHovered] = React.useState(false)
  const handleDemoHover = (event) => {
    setDemoHovered(event.type === 'mouseenter')
  }

  const demoName = getDemoName(demoData.githubLocation)
  const demoSandboxedStyle = React.useMemo(
    () => ({
      maxWidth: demoOptions.maxWidth,
      height: demoOptions.height,
    }),
    [demoOptions.height, demoOptions.maxWidth],
  )

  if (demoOptions.bg == null) {
    demoOptions.bg = 'outlined'
  }

  if (demoOptions.iframe) {
    demoOptions.bg = true
  }

  const [codeOpen, setCodeOpen] = React.useState(
    demoOptions.defaultCodeOpen || false,
  )
  const shownOnce = React.useRef(false)
  if (codeOpen) {
    shownOnce.current = true
  }

  React.useEffect(() => {
    const navigatedDemoName = getDemoName(window.location.hash)
    if (navigatedDemoName && demoName === navigatedDemoName) {
      setCodeOpen(true)
    }
  }, [demoName])

  const showPreview =
    !demoOptions.hideToolbar &&
    demoOptions.defaultCodeOpen !== false &&
    Boolean(demoData.jsxPreview)

  const [demoKey, setDemoKey] = React.useReducer((key) => key + 1, 0)

  const demoId = `demo-${useId()}`
  const demoSourceId = `demoSource-${useId()}`
  const openDemoSource = codeOpen || showPreview

  const initialFocusRef = React.useRef(null)

  const isPreview = !codeOpen && showPreview

  const initialEditorCode = isPreview
    ? demoData.jsxPreview
    : // Prettier remove all the leading lines except for the last one, remove it as we don't
      // need it in the live edit view.
      demoData.raw.replace(/\n$/, '')
  const [editorCode, setEditorCode] = React.useState({
    value: initialEditorCode,
    isPreview,
    initialEditorCode,
  })

  const resetDemo = () => {
    setEditorCode({
      value: initialEditorCode,
      isPreview,
      initialEditorCode,
    })
    setDemoKey()
  }

  React.useEffect(() => {
    setEditorCode({
      value: initialEditorCode,
      isPreview,
      initialEditorCode,
    })
  }, [initialEditorCode, isPreview])

  const [debouncedError, setDebouncedError] = React.useState(null)

  const [liveDemoActive, setLiveDemoActive] = React.useState(false)

  const demoElement = useDemoElement({
    demoData,
    editorCode,
    setDebouncedError,
    liveDemoActive,
  })

  return (
    <Box>
      <Box
        css={{
          position: 'relative',
          outline: 0,
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
        onMouseEnter={handleDemoHover}
        onMouseLeave={handleDemoHover}
      >
        <InitialFocus action={initialFocusRef} tabIndex={-1} />
        <DemoSandbox
          key={demoKey}
          style={demoSandboxedStyle}
          iframe={demoOptions.iframe}
          name={demoName}
          onResetDemoClick={resetDemo}
        >
          {demoElement}
        </DemoSandbox>
      </Box>
      <>
        <NoSsr defer fallback={<DemoToolbarFallback />}>
          <React.Suspense fallback={<DemoToolbarFallback />}>
            <DemoToolbar
              codeOpen={codeOpen}
              codeVariant={codeVariant}
              hasNonSystemDemos={hasNonSystemDemos}
              demo={demo}
              demoData={demoData}
              demoHovered={demoHovered}
              demoId={demoId}
              demoName={demoName}
              demoOptions={demoOptions}
              demoSourceId={demoSourceId}
              initialFocusRef={initialFocusRef}
              onCodeOpenChange={() => {
                setCodeOpen((open) => !open)
              }}
              onResetDemoClick={resetDemo}
              openDemoSource={openDemoSource}
              showPreview={showPreview}
            />
          </React.Suspense>
        </NoSsr>
        <Collapse in={openDemoSource} unmountOnExit timeout={150}>
          {/* A limitation from https://github.com/nihgwu/react-runner,
            we can't inject the `window` of the iframe so we need a disableLiveEdit option. */}
          {demoOptions.disableLiveEdit ? (
            <DemoCodeViewer
              code={editorCode.value}
              id={demoSourceId}
              language={demoData.sourceLanguage}
              copyButtonProps={{
                'data-ga-event-category': codeOpen ? 'demo-expand' : 'demo',
                'data-ga-event-label': demo.gaLabel,
                'data-ga-event-action': 'copy-click',
              }}
            />
          ) : (
            <DemoEditor
              // Mount a new text editor when the preview mode change to reset the undo/redo history.
              key={editorCode.isPreview}
              value={editorCode.value}
              onChange={(value) => {
                setEditorCode({
                  ...editorCode,
                  value,
                })
              }}
              onFocus={() => {
                setLiveDemoActive(true)
              }}
              id={demoSourceId}
              language={demoData.sourceLanguage}
              copyButtonProps={{
                'data-ga-event-category': codeOpen ? 'demo-expand' : 'demo',
                'data-ga-event-label': demo.gaLabel,
                'data-ga-event-action': 'copy-click',
              }}
            >
              <DemoEditorError>{debouncedError}</DemoEditorError>
            </DemoEditor>
          )}
        </Collapse>
      </>
    </Box>
  )
}
