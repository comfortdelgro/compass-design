import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import {styled} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import {unstable_debounce as debounce} from '@mui/utils'
import Link from 'next/link'
import * as React from 'react'
import MuiProductSelector from '../common/MuiProductSelector'

const Navigation = styled('nav')(({theme}) => [
  {
    '& ul': {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      display: 'flex',
    },
    '& li': {
      color: (theme.vars || theme).palette.text.primary,
      ...theme.typography.body2,
      fontWeight: theme.typography.fontWeightBold,
      '& > a, & > div': {
        display: 'inline-block',
        color: 'inherit',
        textDecoration: 'none',
        padding: theme.spacing('8px', 1),
        borderRadius: (theme.vars || theme).shape.borderRadius,
        '&:hover': {
          color: (theme.vars || theme).palette.grey[700],
          backgroundColor: (theme.vars || theme).palette.grey[50],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'initial',
          },
        },
        '&:focus-visible': {
          color: (theme.vars || theme).palette.grey[700],
          outline: 0,
          backgroundColor: (theme.vars || theme).palette.grey[100],
        },
      },
      '& > div': {
        cursor: 'default',
      },
    },
  },
])

const PRODUCT_IDS = [
  'product-core',
  'product-advanced',
  'product-templates',
  'product-design',
  'product-toolpad',
]

type ProductSubMenuProps = {
  icon: React.ReactElement
  name: React.ReactNode
  description: React.ReactNode
  chip?: React.ReactNode
  href: string
} & Omit<JSX.IntrinsicElements['a'], 'ref'>

const ProductSubMenu = React.forwardRef<HTMLAnchorElement, ProductSubMenuProps>(
  function ProductSubMenu(
    {icon, name, description, chip, href, ...props},
    ref,
  ) {
    return (
      <Box
        component={Link}
        href={href}
        ref={ref}
        sx={[
          (theme) => ({
            display: 'flex',
            alignItems: 'center',
            py: 2,
            pr: 3,
            '&:hover, &:focus': {
              backgroundColor: (theme.vars || theme).palette.grey[50],
              outline: 0,
              '@media (hover: none)': {
                backgroundColor: 'initial',
                outline: 'initial',
              },
            },
          }),
        ]}
        {...props}
      >
        <Box
          sx={[
            (theme) => ({
              px: 2,
              '& circle': {
                fill: (theme.vars || theme).palette.grey[100],
              },
            }),
          ]}
        >
          {icon}
        </Box>
        <Box sx={{flexGrow: 1}}>
          <Typography color='text.primary' variant='body2' fontWeight='bold'>
            {name}
          </Typography>
          <Typography color='text.secondary' variant='body2'>
            {description}
          </Typography>
        </Box>
        {chip}
      </Box>
    )
  },
)

function getNextIndex(
  eventKey: KeyboardEvent['key'],
  currentIndex: number,
  length: number,
) {
  if (eventKey === 'ArrowLeft') {
    return currentIndex === 0 ? length - 1 : currentIndex - 1
  }
  if (eventKey === 'ArrowRight') {
    return currentIndex === length - 1 ? 0 : currentIndex + 1
  }
  return currentIndex
}

export default function HeaderNavBar() {
  const [subMenuOpen, setSubMenuOpen] = React.useState<
    null | 'products' | 'docs'
  >(null)
  const [subMenuIndex, setSubMenuIndex] = React.useState<number | null>(null)
  const navRef = React.useRef<HTMLUListElement | null>(null)
  const productsMenuRef = React.useRef<HTMLDivElement | null>(null)
  const docsMenuRef = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    if (typeof subMenuIndex === 'number') {
      document.getElementById(PRODUCT_IDS[subMenuIndex])?.focus()
    }
  }, [subMenuIndex])
  function handleLeftRightArrow(
    event: React.KeyboardEvent,
    target: EventTarget | HTMLElement | null = event.target,
  ) {
    if (navRef.current) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        let i = 0
        while (i < navRef.current.children.length) {
          const child = navRef.current.children.item(i)
          if (child && (target === child || child.contains(target as Node))) {
            const prevSibling = navRef.current.children.item(
              getNextIndex(event.key, i, navRef.current.children.length),
            )
            const htmlElement = prevSibling
              ? (prevSibling.firstChild as HTMLElement)
              : null
            if (htmlElement) {
              htmlElement.focus()
            }
          }
          i += 1
        }
      }
    }
  }
  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault()
      handleLeftRightArrow(
        new KeyboardEvent('keydown', {
          key: 'ArrowRight',
        }) as unknown as React.KeyboardEvent,
        productsMenuRef.current?.parentElement,
      )
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      handleLeftRightArrow(event, productsMenuRef.current?.parentElement)
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (event.target === productsMenuRef.current) {
        setSubMenuOpen('products')
      }
      setSubMenuIndex((prevValue) => {
        if (prevValue === null) {
          return 0
        }
        if (prevValue === PRODUCT_IDS.length - 1) {
          return 0
        }
        return prevValue + 1
      })
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSubMenuIndex((prevValue) => {
        if (prevValue === null) {
          return 0
        }
        if (prevValue === 0) {
          return PRODUCT_IDS.length - 1
        }
        return prevValue - 1
      })
    }
    if (event.key === 'Escape') {
      setSubMenuOpen(null)
      setSubMenuIndex(null)
    }
  }

  const setSubMenuOpenDebounced = React.useMemo(
    () => debounce(setSubMenuOpen, 40),
    [setSubMenuOpen],
  )

  const setSubMenuOpenUndebounce = React.useMemo(
    () => (value: typeof subMenuOpen) => {
      setSubMenuOpenDebounced.clear()
      setSubMenuOpen(value)
    },
    [setSubMenuOpen, setSubMenuOpenDebounced],
  )

  React.useEffect(() => {
    return () => {
      setSubMenuOpenDebounced.clear()
    }
  }, [setSubMenuOpenDebounced])

  return (
    <Navigation>
      <ul ref={navRef} role='menubar' onKeyDown={handleLeftRightArrow}>
        <li
          role='none'
          onMouseEnter={() => setSubMenuOpenUndebounce('docs')}
          onFocus={() => setSubMenuOpenUndebounce('docs')}
          onMouseLeave={() => setSubMenuOpenDebounced(null)}
          onBlur={() => setSubMenuOpenUndebounce(null)}
        >
          <div
            role='menuitem'
            tabIndex={0}
            ref={docsMenuRef}
            aria-haspopup
            aria-expanded={subMenuOpen === 'docs' ? 'true' : 'false'}
          >
            Docs
          </div>
          <Popper
            open={subMenuOpen === 'docs'}
            anchorEl={docsMenuRef.current}
            transition
            placement='bottom-start'
            style={{
              zIndex: 1200,
              pointerEvents: subMenuOpen === 'docs' ? undefined : 'none',
            }}
          >
            {({TransitionProps}) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper
                  variant='outlined'
                  sx={(theme) => ({
                    minWidth: 498,
                    overflow: 'hidden',
                    borderColor: 'grey.200',
                    bgcolor: 'background.paper',
                    boxShadow: `0px 4px 20px rgba(170, 180, 190, 0.3)`,
                    '& ul': {
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                    },
                  })}
                >
                  <ul role='menu'>
                    <MuiProductSelector />
                  </ul>
                </Paper>
              </Fade>
            )}
          </Popper>
        </li>
      </ul>
    </Navigation>
  )
}
