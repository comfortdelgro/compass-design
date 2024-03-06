import {Meta} from '@storybook/react'
import {useCallback, useState} from 'react'
import NaturalDrawer from '.'
import Button from '../button'
import storiesStyles from './styles/drawer-stories.module.css'

export function Default() {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [distance, setDistance] = useState(0)

  const handleDrawerScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      setDistance((event.target as HTMLDivElement).scrollTop)
    },
    [],
  )

  const handleCollapsed = useCallback(() => {
    setExpanded(false)
  }, [])

  const handleExpanded = useCallback(() => {
    setExpanded(true)
  }, [])

  return (
    <div
      className={storiesStyles.drawerStories}
      style={{
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: '600px',
        }}
      >
        <h4>Drawer</h4>
        <p>Scrolled: {distance}</p>
        <NaturalDrawer
          expanded={expanded}
          fullscreen={false}
          header={
            <NaturalDrawer.Header
              onClick={() => setExpanded(!expanded)}
              useDrag
            ></NaturalDrawer.Header>
          }
          drawerScroll={handleDrawerScroll}
          onCollapsed={handleCollapsed}
          onExpanded={handleExpanded}
          style={{
            flex: '1',
            maxHeight: '500px',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <div style={{height: '800px', padding: '0 16px'}}>Drawer content</div>
        </NaturalDrawer>
      </div>
    </div>
  )
}

export function FullScreen() {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [distance, setDistance] = useState(0)

  const handleDrawerScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      setDistance((event.target as HTMLDivElement).scrollTop)
    },
    [],
  )

  const handleCollapsed = useCallback(() => {
    setExpanded(false)
  }, [])

  const handleExpanded = useCallback(() => {
    setExpanded(true)
  }, [])

  return (
    <div
      className={storiesStyles.drawerStories}
      style={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
      }}
    >
      <h4>Drawer</h4>
      <p>Scrolled: {distance}</p>
      <NaturalDrawer
        expanded={expanded}
        header={
          <NaturalDrawer.Header
            onClick={() => setExpanded(!expanded)}
            useDrag
          ></NaturalDrawer.Header>
        }
        drawerScroll={handleDrawerScroll}
        onCollapsed={handleCollapsed}
        onExpanded={handleExpanded}
        style={{
          flex: '1',
        }}
      >
        <div style={{height: '800px', padding: '0 16px'}}>Drawer content</div>
      </NaturalDrawer>
    </div>
  )
}

export function AccessibleBackground() {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

  const handleCollapsed = useCallback(() => {
    setExpanded(false)
  }, [])

  const handleExpanded = useCallback(() => {
    setExpanded(true)
  }, [])

  return (
    <div
      className={storiesStyles.drawerStories}
      style={{
        padding: '20px',
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: '600px',
        }}
      >
        <NaturalDrawer
          expanded={expanded}
          fullscreen={false}
          fixedContent={
            <div
              style={{
                padding: '16px',
              }}
            >
              <div>
                This content is under the drawer so that you still can interact
                with it.
              </div>
              <p>{count}</p>
              <p>
                <Button
                  onClick={() => {
                    setCount(count + 1)
                  }}
                  variant={'secondary'}
                >
                  Count
                </Button>
              </p>
            </div>
          }
          onCollapsed={handleCollapsed}
          onExpanded={handleExpanded}
          style={{
            flex: '1',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <div style={{height: '800px', padding: '16px'}}>
            <p>Drawer content</p>
            <Button onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Collapse' : 'Expand'}
            </Button>
          </div>
        </NaturalDrawer>
      </div>
    </div>
  )
}

export function FullscreenAccessibleBackground() {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

  const handleCollapsed = useCallback(() => {
    setExpanded(false)
  }, [])

  const handleExpanded = useCallback(() => {
    setExpanded(true)
  }, [])

  return (
    <div
      className={storiesStyles.drawerStories}
      style={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
      }}
    >
      <NaturalDrawer
        expanded={expanded}
        header={
          <NaturalDrawer.Header
            onClick={() => setExpanded(!expanded)}
            useDrag
          ></NaturalDrawer.Header>
        }
        fixedContent={
          <div
            style={{
              width: '100%',
              height: '100%',
              padding: '16px',
            }}
          >
            <div>
              This content is under the drawer so that you still can interact
              with it.
            </div>
            <p>{count}</p>
            <p>
              <Button
                onClick={() => {
                  setCount(count + 1)
                }}
              >
                Count
              </Button>
            </p>
          </div>
        }
        onCollapsed={handleCollapsed}
        onExpanded={handleExpanded}
        style={{
          flex: '1',
        }}
      >
        <div style={{height: '800px', padding: '0 16px'}}>Drawer content</div>
      </NaturalDrawer>
    </div>
  )
}

export function BottomSheet() {
  const [open, setOpen] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)

  const handlePullDown = useCallback(() => {
    setOpen(false)
  }, [])

  const handleCollapsed = useCallback(() => {
    setExpanded(false)
  }, [])

  const handleExpanded = useCallback(() => {
    setExpanded(true)
  }, [])

  return (
    <div
      className={storiesStyles.drawerStories}
      style={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        maxWidth: '680px',
        border: '1px solid rgba(0,0,0,0.1)',
        margin: '0 auto',
        padding: '0',
      }}
    >
      <div style={{padding: '40px'}}>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
      </div>
      {open && (
        <NaturalDrawer
          type={'bottomSheet'}
          expanded={expanded}
          fullscreen={false}
          visibleHeight={180}
          onCollapsed={handleCollapsed}
          onExpanded={handleExpanded}
          onReachBottom={handlePullDown}
        >
          <div style={{padding: '0 16px'}}>
            <p>Bottom sheet content</p>
            <Button onClick={() => setExpanded(false)}>Close</Button>
            <div style={{height: '200px'}}></div>
          </div>
        </NaturalDrawer>
      )}
    </div>
  )
}

export function BottomSheetFullScreen() {
  const [open, setOpen] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)

  const handlePullDown = useCallback(() => {
    setOpen(false)
  }, [])

  const handleCollapsed = useCallback(() => {
    setExpanded(false)
  }, [])

  const handleExpanded = useCallback(() => {
    setExpanded(true)
  }, [])

  return (
    <div
      className={storiesStyles.drawerStories}
      style={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        padding: '0',
      }}
    >
      <div style={{padding: '40px'}}>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
      </div>
      {open && (
        <NaturalDrawer
          type={'bottomSheet'}
          expanded={expanded}
          visibleHeight={330}
          onCollapsed={handleCollapsed}
          onExpanded={handleExpanded}
          onReachBottom={handlePullDown}
        >
          <div style={{padding: '0 16px'}}>
            <p>Bottom sheet content</p>
            <Button onClick={() => setExpanded(false)}>Close</Button>
            <div style={{height: '400px'}}></div>
          </div>
        </NaturalDrawer>
      )}
    </div>
  )
}

const meta: Meta<typeof Default> = {
  title: 'Example/Natural Drawer',
  tags: ['autodocs'],
  component: Default,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
