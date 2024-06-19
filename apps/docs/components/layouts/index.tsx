import {Box} from '@comfortdelgro/react-compass'
import Footer from 'components/Footer'
import EditPage from 'components/common/EditPage'
import Head from 'components/common/Head'
import AppFrame from 'components/layouts/components/DocsFrame'
import TableOfContent from 'components/layouts/components/TableOfContent'

export default function Layout(props: any) {
  const {children, description, location, title, toc} = props

  if (description === undefined) {
    throw new Error('Missing description in the page')
  }

  return (
    <AppFrame>
      <Head
        title={`${title} - React Compass`}
        description={description}
        largeCard={false}
        card='https://github.com/comfortdelgro/compass-design'
      />

      <Box css={{display: 'flex', width: '100%'}}>
        <Box
          css={{
            overflowY: 'scroll',
            width: '100%',
            minHeight: 'calc(100vh - 51px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          id='document'
        >
          <Box
            css={{
              padding: 'var(--cdg-spacing-5) var(--cdg-spacing-16)',
              width: '100%',
              '@max_1024': {
                padding: 'var(--cdg-spacing-4)',
              },
            }}
          >
            <EditPage sourceLocation={location} />
            {children}
          </Box>
          <Footer />
        </Box>
        <TableOfContent toc={toc} />
      </Box>
    </AppFrame>
  )
}
