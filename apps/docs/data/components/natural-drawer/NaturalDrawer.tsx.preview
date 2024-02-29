import {NaturalDrawer} from '@comfortdelgro/react-compass'
import {useCallback, useState} from 'react'

export default function DrawerDocs() {
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
