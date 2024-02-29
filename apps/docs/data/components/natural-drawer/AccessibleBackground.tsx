import {Button, NaturalDrawer} from '@comfortdelgro/react-compass'
import {useCallback, useState} from 'react'

export default function DrawerDocs() {
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
