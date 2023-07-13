import {Box} from '@comfortdelgro/react-compass'
import EditPage from 'components/common/EditPage'
import Head from 'components/common/Head'
import AppFrame from 'components/layouts/DocsAppFrame'
import DocsAppToc from 'components/layouts/DocsAppToc'
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
            padding: '$5 $16',
            overflowY: 'scroll',
            width: '100%',
          }}
          id='document'
        >
          <EditPage sourceLocation={location} />
          {children}
          <DocsAppFooter tableOfContents={toc} />
        </Box>
        <DocsAppToc toc={toc} />
      </Box>
    </AppFrame>
  )
}
