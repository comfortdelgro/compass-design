import {Button, NaturalDrawer} from '@comfortdelgro/react-compass'
import {useCallback, useState} from 'react'

export default function DrawerDocs() {
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
