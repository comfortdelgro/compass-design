import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import {styled} from '@mui/material/styles'
import PageContext from 'components/common/PageContext'
import Link from 'next/link'
import * as React from 'react'

const PaginationDiv = styled('div')(({theme}) => {
  return {
    margin: 4,
    display: 'flex',
    justifyContent: 'space-between',
  }
})

const PageLinkButton = styled(Button)(({theme}) => ({
  fontWeight: 'bold',
}))

function orderedPages(pages, current = []) {
  return pages
    .reduce((items, item) => {
      if (item.children && item.children.length > 1) {
        items = orderedPages(item.children, items)
      } else {
        items.push(
          item.children && item.children.length === 1 ? item.children[0] : item,
        )
      }
      return items
    }, current)
    .filter((page) => {
      return (
        page.inSideNav !== false &&
        // ignore external pages
        page.pathname.startsWith('/')
      )
    })
}

function usePageNeighbours() {
  const {activePage, pages} = React.useContext(PageContext)
  const pageList = orderedPages(pages)
  const currentPageNum = pageList.indexOf(activePage)

  if (currentPageNum === -1) {
    return {prevPage: null, nextPage: null}
  }

  const prevPage = pageList[currentPageNum - 1] ?? null
  const nextPage = pageList[currentPageNum + 1] ?? null

  return {prevPage, nextPage}
}

export default function AppLayoutDocsFooter(props) {
  const {tableOfContents = []} = props
  const {nextPage, prevPage} = usePageNeighbours()

  return (
    <>
      <Box component='footer' sx={{mt: 12}}>
        <Divider />
        <PaginationDiv>
          {prevPage !== null ? (
            <Button
              component={Link}
              prefetch={false}
              href={prevPage.pathname}
              {...prevPage.linkProps}
              size='medium'
              startIcon={<ChevronLeftIcon />}
            >
              {prevPage.title}
            </Button>
          ) : (
            <div />
          )}
          {nextPage !== null ? (
            <PageLinkButton
              component={Link}
              prefetch={false}
              href={nextPage.pathname}
              {...nextPage.linkProps}
              size='medium'
              endIcon={<ChevronRightIcon />}
            >
              {nextPage.title}
            </PageLinkButton>
          ) : null}
        </PaginationDiv>
      </Box>
    </>
  )
}
