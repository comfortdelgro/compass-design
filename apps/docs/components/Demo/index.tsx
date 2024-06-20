import {Box, Button} from '@comfortdelgro/react-compass'
import {debounce} from 'lodash'
import * as React from 'react'
import HighlightedCode from '../HighlightedCode'
import Editor from './components/Editor'
import EditorError from './components/EditorError'
import ReactRunner from './components/ReactRunner'
import Sandbox from './components/Sandbox'
import styles from './styles/index.module.css'

function trimLeadingSpaces(input = '') {
  return input.replace(/^\s+/gm, '')
}

const Toolbar = React.lazy(() => import('./components/Toolbar'))

function getDemoName(location: string) {
  return location.replace(/(.+?)(\w+)\.\w+$$/, '$2')
}

function useDemoData(demo: any, githubLocation: string) {
  return React.useMemo(() => {
    const name = 'React Compass'

    let codeOptions = {}

    codeOptions = {
      githubLocation: githubLocation.replace(/\.js$/, '.tsx'),
      raw: demo.rawTS,
      Component: demo.tsx,
      sourceLanguage: 'tsx',
    }

    const jsxPreview = demo.jsxPreview

    return {
      scope: demo.scope,
      jsxPreview,
      ...codeOptions,
      title: `${getDemoName(githubLocation)} demo — ${name}`,
    }
  }, [demo, githubLocation])
}

function useDemoElement({
  demoData,
  editorCode,
  setDebouncedError,
  liveDemoActive,
}: any) {
  const debouncedSetError = React.useMemo(
    () => debounce(setDebouncedError, 300),
    [setDebouncedError],
  )

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

export default function Demo(props: any) {
  const {demo, demoOptions, githubLocation} = props

  const demoData: any = useDemoData(demo, githubLocation)

  const [demoHovered, setDemoHovered] = React.useState(false)
  const handleDemoHover = (event: any) => {
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
    demoOptions.defaultCodeOpen !== false && Boolean(demoData.jsxPreview)

  const [demoKey, setDemoKey] = React.useReducer((key) => key + 1, 0)

  const openDemoSource = codeOpen || showPreview

  const initialFocusRef = React.useRef(null)

  const isPreview = !codeOpen && showPreview

  const initialEditorCode = isPreview
    ? demoData.jsxPreview
    : demoData.raw.replace(/\n$/, '')
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
          display: 'block',
          justifyContent: 'center',
          background: 'var(--cdg-color-background)',
          padding: 'var(--cdg-spacing-8) var(--cdg-spacing-4)',
          borderTopRightRadius: '12px',
          borderTopLeftRadius: '12px',
          borderRight: '1px solid var(--cdg-color-gray40)',
          borderTop: '1px solid var(--cdg-color-gray40)',
          borderLeft: '1px solid var(--cdg-color-gray40)',
          marginTop: 'var(--cdg-spacing-8) !important',
          overflow: 'hidden',
        }}
        onMouseEnter={handleDemoHover}
        onMouseLeave={handleDemoHover}
      >
        <Button
          ref={initialFocusRef}
          tabIndex={-1}
          css={{
            position: 'absolute',
            display: 'none',
            top: '5px',
            left: '5px',
            width: '10px',
            maxWidth: '12px',
            height: '12px',
            pointerEvents: 'none',
            background: 'var(--cdg-color-gray40)',
            borderRadius: '10px',
            border: 'none',
            '&:focus': {
              background: 'var(--cdg-color-cdgBlue40)',
            },
          }}
        />
        <Sandbox
          key={demoKey}
          style={demoSandboxedStyle}
          iframe={demoOptions.iframe}
          name={demoName}
          onResetDemoClick={resetDemo}
        >
          {demoElement}
        </Sandbox>
      </Box>
      <React.Suspense fallback={<></>}>
        <Toolbar
          codeOpen={codeOpen}
          demo={demo}
          demoData={demoData}
          demoHovered={demoHovered}
          demoName={demoName}
          demoOptions={demoOptions}
          initialFocusRef={initialFocusRef}
          onCodeOpenChange={() => {
            setCodeOpen((open: boolean) => !open)
          }}
          onResetDemoClick={resetDemo}
          openDemoSource={openDemoSource}
          showPreview={showPreview}
        />
      </React.Suspense>
      <Box>
        {!codeOpen ? (
          <HighlightedCode
            className={styles.demoHighlightedCode}
            code={editorCode.value}
            // id={demoSourceId}
            language={demoData.sourceLanguage}
          />
        ) : (
          <Editor
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
            language={demoData.sourceLanguage}
          >
            <EditorError>{debouncedError}</EditorError>
          </Editor>
        )}
      </Box>
    </Box>
  )
}
