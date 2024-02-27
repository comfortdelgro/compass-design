import {Button, Layout, NaturalDrawer} from '@comfortdelgro/react-compass'
import {useCallback, useState} from 'react'

export default function DrawerDocs() {
  const [isShow, setIsShow] = useState<boolean>(false)
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
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button onClick={() => setIsShow(true)}>Open</Button>
      {isShow && (
        <>
          <NaturalDrawer
            expanded={expanded}
            header={
              <NaturalDrawer.Header
                onClick={() => setExpanded(!expanded)}
                useDrag
              ></NaturalDrawer.Header>
            }
            fixedContent={
              <Layout
                direction='row'
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '16px',
                }}
              >
                <Layout flex='1'>
                  <div>
                    This content is under the drawer so that you still can
                    interact with it.
                  </div>
                  <p>{count}</p>
                  <p>
                    <Button
                      variant='secondary'
                      onClick={() => {
                        setCount(count + 1)
                      }}
                    >
                      Count
                    </Button>
                  </p>
                </Layout>
                <p>
                  <Button onClick={() => setIsShow(false)}>
                    Exit Full Screen
                  </Button>
                </p>
              </Layout>
            }
            onCollapsed={handleCollapsed}
            onExpanded={handleExpanded}
            style={{
              flex: '1',
              backgroundColor: '#ffffff',
            }}
          >
            <div style={{height: '100dvh', padding: '0 16px'}}>
              <Layout direction='row'>
                <Layout flex='1'>Drawer content</Layout>
                <Layout>
                  <Button
                    onClick={() => setExpanded(!expanded)}
                    variant='secondary'
                  >
                    {expanded ? 'Collapse' : 'Expand'}
                  </Button>
                </Layout>
              </Layout>
            </div>
          </NaturalDrawer>
        </>
      )}
    </div>
  )
}
