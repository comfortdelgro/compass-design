import {Box} from '@comfortdelgro/react-compass'
// import EditPage from 'components/EditPage'
import Footer from 'components/Footer'
import Head from 'components/Head'
import {useIsTabletScreen} from 'utils/hooks/useMediaQuery'
import TableOfContent from './TableOfContent'

export default function DocsFrame(props: any) {
  const {children, description = '', title, toc} = props
  const isTabletScreen = useIsTabletScreen()

  const isShowTOC = !isTabletScreen && toc && toc.length > 0

  return (
    <>
      <Head
        title={`${title} - React Compass`}
        description={description}
        largeCard={false}
        card='https://github.com/comfortdelgro/compass-design'
      />
      {/* <CommonHeader /> */}
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: isShowTOC ? '1fr 300px' : '1fr',
        }}
      >
        <Box
          css={{
            overflow: 'auto',
            height: 'calc(100vh - 54px)',
          }}
        >
          <Box
            css={{
              padding: isShowTOC
                ? 'var(--cdg-spacing-5) var(--cdg-spacing-10)'
                : 0,
              width: '100%',
              minWidth: 0,
              '@media (max-width: 1024px)': {
                padding: toc && toc.length > 0 ? 'var(--cdg-spacing-4)' : 0,
              },
            }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
        {isShowTOC && <TableOfContent toc={toc} />}
      </Box>
    </>
  )
}
