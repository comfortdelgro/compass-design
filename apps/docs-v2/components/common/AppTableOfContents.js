import {Box} from '@comfortdelgro/react-compass'
import {styled} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import {shouldHandleLinkClick} from 'components/common/MarkdownLinks'
import throttle from 'lodash/throttle'
import Link from 'next/link'
import * as React from 'react'
import {useTranslate} from 'utils/i18n'

const NavLabel = styled(Typography)(({theme}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  paddingLeft: theme.spacing(1.4),
  fontSize: theme.typography.pxToRem(11),
  fontWeight: theme.typography.fontWeightBold,
  textTransform: 'uppercase',
  letterSpacing: '.08rem',
  color: theme.palette.grey[600],
}))

const NavList = styled(Typography)({
  padding: 0,
  margin: 0,
  listStyle: 'none',
})

const NavItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'secondary',
})(({active, secondary, theme}) => {
  const activeStyles = {
    borderLeftColor: (theme.vars || theme).palette.primary[200],
    color: (theme.vars || theme).palette.primary[600],
    '&:hover': {
      borderLeftColor: (theme.vars || theme).palette.primary[600],
      color: (theme.vars || theme).palette.primary[600],
    },
  }
  const activeDarkStyles = {
    borderLeftColor: (theme.vars || theme).palette.primary[600],
    color: (theme.vars || theme).palette.primary[300],
    '&:hover': {
      borderLeftColor: (theme.vars || theme).palette.primary[400],
      color: (theme.vars || theme).palette.primary[400],
    },
  }

  return [
    {
      fontSize: theme.typography.pxToRem(13),
      padding: theme.spacing(0, 1, 0, secondary ? 2.5 : '10px'),
      margin: theme.spacing(0.5, 0, 1, 0),
      borderLeft: `1px solid transparent`,
      boxSizing: 'border-box',
      fontWeight: 500,
      '&:hover': {
        borderLeftColor: (theme.vars || theme).palette.grey[400],
        color: (theme.vars || theme).palette.grey[600],
      },
      ...(!active && {
        color: (theme.vars || theme).palette.text.primary,
      }),
      ...(active && activeStyles),
      '&:active': activeStyles,
    },
  ]
})

const noop = () => {}

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
      throttledCallback.cancel()
    }
  }, [throttledCallback])
}

function flatten(headings) {
  const itemsWithNode = []

  headings.forEach((item) => {
    itemsWithNode.push(item)

    if (item.children.length > 0) {
      item.children.forEach((subitem) => {
        itemsWithNode.push(subitem)
      })
    }
  })
  return itemsWithNode
}

const showSurveyBanner = false

export default function AppTableOfContents(props) {
  const {toc} = props
  const t = useTranslate()

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

  const handleClick = (hash) => (event) => {
    // Ignore click for new tab/new window behavior
    if (shouldHandleLinkClick(event)) {
      return
    }

    // Used to disable findActiveIndex if the page scrolls due to a click
    clickedRef.current = true
    unsetClickedRef.current = setTimeout(() => {
      clickedRef.current = false
    }, 1000)

    if (activeState !== hash) {
      setActiveState(hash)
    }
  }

  React.useEffect(
    () => () => {
      clearTimeout(unsetClickedRef.current)
    },
    [],
  )

  const itemLink = (item, secondary) => (
    <NavItem
      display='block'
      href={`#${item.hash}`}
      underline='none'
      onClick={handleClick(item.hash)}
      active={activeState === item.hash}
      secondary={secondary}
    >
      <span dangerouslySetInnerHTML={{__html: item.text}} />
    </NavItem>
  )

  return (
    <Box
      css={{width: 300, maxHeight: 'calc(100vh - 51px)', overflowY: 'scroll'}}
    >
      {toc.length > 0 ? (
        <>
          <NavLabel gutterBottom>Contents</NavLabel>
          <NavList component='ul'>
            {toc.map((item) => (
              <li key={item.text}>
                {itemLink(item)}
                {item.children.length > 0 ? (
                  <NavList as='ul'>
                    {item.children.map((subitem) => (
                      <li key={subitem.text}>{itemLink(subitem, true)}</li>
                    ))}
                  </NavList>
                ) : null}
              </li>
            ))}
          </NavList>
        </>
      ) : null}
    </Box>
  )
}
