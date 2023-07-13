import {Box, Typography} from '@comfortdelgro/react-compass'
import {shouldHandleLinkClick} from 'components/common/MarkdownLinks'
import throttle from 'lodash/throttle'
import Link from 'next/link'
import * as React from 'react'

const noop = () => {}

// @ts-ignore
function useThrottledOnScroll(callback, delay) {
  const throttledCallback = React.useMemo(
    () => (callback ? throttle(callback, delay) : noop),
    [callback, delay],
  )

  React.useEffect(() => {
    if (throttledCallback === noop) {
      return undefined
    }

    window.addEventListener('scroll', throttledCallback)
    return () => {
      window.removeEventListener('scroll', throttledCallback)
      // @ts-ignore
      throttledCallback.cancel()
    }
  }, [throttledCallback])
}

function flatten(headings: any) {
  const itemsWithNode: any = []

  headings.forEach((item: any) => {
    itemsWithNode.push(item)

    if (item.children.length > 0) {
      item.children.forEach((subitem: any) => {
        itemsWithNode.push(subitem)
      })
    }
  })
  return itemsWithNode
}

export default function DocsAppToc(props: any) {
  const {toc} = props

  const items = React.useMemo(() => flatten(toc), [toc])
  const [activeState, setActiveState] = React.useState(null)
  const clickedRef = React.useRef(false)
  const unsetClickedRef = React.useRef(null)
  const findActiveIndex = React.useCallback(() => {
    // Don't set the active index based on scroll if a link was just clicked
    if (clickedRef.current) {
      return
    }

    let active
    for (let i = items.length - 1; i >= 0; i -= 1) {
      // No hash if we're near the top of the page
      if (document.documentElement.scrollTop < 200) {
        active = {hash: null}
        break
      }

      const item = items[i]
      const node = document.getElementById(item.hash)

      if (process.env.NODE_ENV !== 'production') {
        if (!node) {
          console.error(
            `Missing node on the item ${JSON.stringify(item, null, 2)}`,
          )
        }
      }

      if (
        node &&
        node.offsetTop <
          document.documentElement.scrollTop +
            document.documentElement.clientHeight / 8
      ) {
        active = item
        break
      }
    }

    if (active && activeState !== active.hash) {
      setActiveState(active.hash)
    }
  }, [activeState, items])

  // Corresponds to 10 frames at 60 Hz
  useThrottledOnScroll(items.length > 0 ? findActiveIndex : null, 166)

  // @ts-ignore
  const handleClick = (hash) => (event) => {
    // Ignore click for new tab/new window behavior
    if (shouldHandleLinkClick(event)) {
      return
    }

    // Used to disable findActiveIndex if the page scrolls due to a click
    clickedRef.current = true
    // @ts-ignore
    unsetClickedRef.current = setTimeout(() => {
      clickedRef.current = false
    }, 1000)

    if (activeState !== hash) {
      setActiveState(hash)
    }
  }

  React.useEffect(
    () => () => {
      // @ts-ignore
      clearTimeout(unsetClickedRef.current)
    },
    [],
  )

  const itemLink = (item: any, secondary = false) => (
    <Link
      href={`#${item.hash}`}
      onClick={handleClick(item.hash)}
      // active={activeState === item.hash}
    >
      <span dangerouslySetInnerHTML={{__html: item.text}} />
    </Link>
  )

  return (
    <Box
      css={{
        width: 300,
        maxHeight: 'calc(100vh - 51px)',
        overflowY: 'scroll',
        padding: '$4',
      }}
    >
      {toc.length > 0 ? (
        <>
          <Typography.Header variant='header4'>Contents</Typography.Header>
          <Typography.Label>
            {toc.map((item: any) => (
              <Box key={item.text}>
                {itemLink(item)}
                {item.children.length > 0 ? (
                  <Typography.Label>
                    {item.children.map((subitem: any) => (
                      <Box
                        css={{
                          paddingLeft: '$5',
                        }}
                        key={subitem.text}
                      >
                        {itemLink(subitem, true)}
                      </Box>
                    ))}
                  </Typography.Label>
                ) : null}
              </Box>
            ))}
          </Typography.Label>
        </>
      ) : null}
    </Box>
  )
}
