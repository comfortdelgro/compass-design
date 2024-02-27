import {Button, NaturalDrawer} from '@comfortdelgro/react-compass'
import {useCallback, useState} from 'react'

export default function DrawerDocs() {
  const [isShow, setIsShow] = useState<boolean>(false)
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
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button onClick={() => setIsShow(true)}>Open</Button>
      {isShow && (
        <>
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
            <div style={{height: '800px', padding: '0 16px'}}>
              <p>Drawer content</p>
              <Button onClick={() => setIsShow(false)}>Close</Button>
            </div>
          </NaturalDrawer>
        </>
      )}
    </div>
  )
}
