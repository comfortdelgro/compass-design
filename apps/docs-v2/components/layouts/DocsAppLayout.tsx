import {Box} from '@comfortdelgro/react-compass'
import EditPage from 'components/common/EditPage'
import Head from 'components/common/Head'
import AppFrame from 'components/layouts/DocsAppFrame'
import DocsAppToc from 'components/layouts/DocsAppToc'
import AppFooter from './AppFooter'
import DocsAppFooter from './DocsAppFooter'

export default function AppLayoutDocs(props: any) {
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
              padding: '$5 $16',
              width: '100%',
              '@max_1024': {
                padding: '$4',
              },
            }}
          >
            <EditPage sourceLocation={location} />
            {children}
            <DocsAppFooter tableOfContents={toc} />
          </Box>
          <AppFooter />
        </Box>
        <DocsAppToc toc={toc} />
      </Box>
    </AppFrame>
  )
}
