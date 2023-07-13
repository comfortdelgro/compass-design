import {Box, Typography} from '@comfortdelgro/react-compass'
import {shouldHandleLinkClick} from 'components/common/MarkdownLinks'
import {noop} from 'lodash'
import throttle from 'lodash/throttle'
import Link from 'next/link'
import * as React from 'react'

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

    const contentDom = document.querySelector('#document')
    if (contentDom) contentDom.addEventListener('scroll', throttledCallback)
    return () => {
      const contentDom = document.querySelector('#document')
      if (contentDom)
        contentDom.removeEventListener('scroll', throttledCallback)
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
    if (clickedRef.current) {
      return
    }
    let active
    const contentDom = document.querySelector('#document')
    if (!contentDom) return
    for (let i = items.length - 1; i >= 0; i -= 1) {
      if (contentDom.scrollTop < 200) {
        active = {hash: null}
        break
      }

      const item = items[i]
      const node = document.getElementById(item.hash)

      if (
        node &&
        node.offsetTop < contentDom.scrollTop + contentDom.clientHeight / 8
      ) {
        active = item
        break
      }
    }
    if (active && activeState !== active.hash) {
      setActiveState(active.hash)
    }
  }, [activeState, items])

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

  const itemLink = (item: any) => (
    <Link
      href={`#${item.hash}`}
      onClick={handleClick(item.hash)}
      style={{
        textDecoration: 'none',
      }}
    >
      <Box
        dangerouslySetInnerHTML={{__html: item.text}}
        css={{
          color: `${activeState === item.hash ? '$cdgBlue100' : '$gray80'}`,
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      />
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
          <Typography.Header
            variant='header4'
            css={{
              marginBottom: '$2',
            }}
          >
            Contents
          </Typography.Header>
          <Typography.Body variant='body3'>
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
                        {itemLink(subitem)}
                      </Box>
                    ))}
                  </Typography.Label>
                ) : null}
              </Box>
            ))}
          </Typography.Body>
        </>
      ) : null}
    </Box>
  )
}
