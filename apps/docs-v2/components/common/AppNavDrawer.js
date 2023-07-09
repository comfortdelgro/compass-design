import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import useMediaQuery from '@mui/material/useMediaQuery'
import AppNavDrawerItem from 'components/common/AppNavDrawerItem'
import PageContext from 'components/common/PageContext'
import * as React from 'react'
import {pageToTitleI18n} from 'utils/helpers'
import {useTranslate} from 'utils/i18n'

function renderNavItems(options) {
  const {pages, ...params} = options

  return (
    <List sx={{my: 0.5}}>
      {pages.reduce(
        (items, page) => reduceChildRoutes({items, page, ...params}),
        [],
      )}
    </List>
  )
}

function reduceChildRoutes(context) {
  const {activePageParents, items, depth, t} = context
  let {page} = context
  if (page.inSideNav === false) {
    return items
  }

  const title = pageToTitleI18n(page, t)
  if (page.children && page.children.length >= 1) {
    const topLevel =
      activePageParents
        .map((parentPage) => parentPage.pathname)
        .indexOf(page.pathname) !== -1

    let firstChild = page.children[0]

    if (firstChild.subheader && firstChild.children) {
      firstChild = firstChild.children[0]
    }

    const subheader = Boolean(page.subheader)
    const [path, hash] = firstChild.pathname.split('#')
    items.push(
      <AppNavDrawerItem
        linkProps={page.linkProps}
        depth={depth}
        key={title}
        title={title}
        href={{
          pathname: path,
          ...(firstChild.query && {query: firstChild.query}),
          ...(hash && {hash}),
        }}
        legacy={page.legacy}
        newFeature={page.newFeature}
        comingSoon={page.comingSoon}
        plan={page.plan}
        icon={page.icon}
        subheader={subheader}
        topLevel={topLevel && !page.subheader}
        openImmediately={topLevel || subheader}
      >
        {renderNavItems({
          pages: page.children,
          activePageParents,
          depth: subheader ? depth : depth + 1,
          t,
        })}
      </AppNavDrawerItem>,
    )
  } else {
    page = page.children && page.children.length === 1 ? page.children[0] : page
    const [path, hash] = page.pathname.split('#')
    items.push(
      <AppNavDrawerItem
        linkProps={page.linkProps}
        depth={depth}
        key={title}
        title={title}
        href={{
          pathname: path,
          ...(page.query && {query: page.query}),
          ...(hash && {hash}),
        }}
        legacy={page.legacy}
        newFeature={page.newFeature}
        comingSoon={page.comingSoon}
        plan={page.plan}
        icon={page.icon}
        subheader={Boolean(page.subheader)}
        onClick={() => {
          console.log('close')
        }}
      />,
    )
  }

  return items
}

export default function AppNavDrawer(props) {
  const {activePageParents, pages} = React.useContext(PageContext)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const t = useTranslate()
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('lg'))

  const drawer = React.useMemo(() => {
    const navItems = renderNavItems({
      pages,
      activePageParents,
      depth: 0,
      t,
    })

    return <React.Fragment>{navItems}</React.Fragment>
  }, [pages, activePageParents, t, anchorEl])

  return (
    <nav>
      <Drawer
        variant='permanent'
        open
        sx={{
          width: 230,
          height: '100vh',
          '.MuiPaper-root': {
            position: 'inherit',
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  )
}
