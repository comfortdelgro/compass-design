import {Box, Button} from '@comfortdelgro/react-compass'
import DemoEditor from 'components/common/DemoEditor'
import DemoEditorError from 'components/common/DemoEditorError'
import DemoSandbox from 'components/common/DemoSandbox'
import HighlightedCode from 'components/common/HighlightedCode'
import ReactRunner from 'components/common/ReactRunner'
import {debounce} from 'lodash'
import * as React from 'react'
import styles from './styles/DemoCodeViewer.module.css'

function trimLeadingSpaces(input = '') {
  return input.replace(/^\s+/gm, '')
}

const DemoToolbar = React.lazy(() => import('./DemoToolbar'))

function getDemoName(location: string) {
  return location.replace(/(.+?)(\w+)\.\w+$$/, '$2')
}

function useDemoData(codeVariant: string, demo: any, githubLocation: string) {

  return React.useMemo(() => {
    let name = 'React Compass'

    let codeOptions = {}

    if (codeVariant === 'TS' && demo.rawTS) {
      codeOptions = {
        codeVariant: 'TS',
        githubLocation: githubLocation.replace(/\.js$/, '.tsx'),
        raw: demo.rawTS,
        Component: demo.tsx,
        sourceLanguage: 'tsx',
      }
    } else {
      codeOptions = {
        codeVariant: 'JS',
        githubLocation,
        raw: demo.raw,
        Component: demo.js,
        sourceLanguage: 'jsx',
      }
    }

    let jsxPreview = demo.jsxPreview

    return {
      scope: demo.scope,
      jsxPreview,
      ...codeOptions,
      title: `${getDemoName(githubLocation)} demo — ${name}`,
    }
  }, [codeVariant, demo, githubLocation])
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

  const codeVariant = 'TS'

  const demoData: any = useDemoData('codeVariant', demo, githubLocation)

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
      <React.Suspense fallback={<></>}>
        <DemoToolbar
          codeOpen={codeOpen}
          codeVariant={codeVariant}
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
            className={styles.demoCodeViewer}
            code={editorCode.value}
            // id={demoSourceId}
            language={demoData.sourceLanguage}
          />
        ) : (
          <DemoEditor
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
            <DemoEditorError>{debouncedError}</DemoEditorError>
          </DemoEditor>
        )}
      </Box>
    </Box>
  )
}
