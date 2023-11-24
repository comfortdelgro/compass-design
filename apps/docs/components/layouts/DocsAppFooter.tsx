import ArrowLeft from '@comfortdelgro/compass-icons/react/arrow-left'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import {Box, Button} from '@comfortdelgro/react-compass'
import Link from 'next/link'

function orderedPages(pages: any, current = []) {
  return pages
    .reduce((items: any, item: any) => {
      if (item.children && item.children.length > 1) {
        items = orderedPages(item.children, items)
      } else {
        items.push(
          item.children && item.children.length === 1 ? item.children[0] : item,
        )
      }
      return items
    }, current)
    .filter((page: any) => {
      return page.inSideNav !== false && page.pathname.startsWith('/')
    })
}

function usePageNeighbours() {
  const activePage = '/'
  const pages: any = []
  const pageList = orderedPages(pages)
  const currentPageNum = pageList.indexOf(activePage)

  if (currentPageNum === -1) {
    return {prevPage: null, nextPage: null}
  }

  const prevPage = pageList[currentPageNum - 1] ?? null
  const nextPage = pageList[currentPageNum + 1] ?? null

  return {prevPage, nextPage}
}

export default function DocsAppFooter(props: any) {
  const {nextPage, prevPage} = usePageNeighbours()

  return (
    <>
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 'var(--cdg-spacing-4) 0',
          // borderTop: '1px solid #c4c4c4',
          marginTop: 'var(--cdg-spacing-4)',
        }}
      >
        {prevPage !== null ? (
          <Link href={nextPage.pathname}>
            <Button variant='ghost' leftIcon={<ArrowLeft />}>
              {prevPage.title}
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {nextPage !== null ? (
          <Link href={nextPage.pathname}>
            <Button variant='ghost' leftIcon={<ArrowRight />}>
              {nextPage.title}
            </Button>
          </Link>
        ) : null}
      </Box>
    </>
  )
}
