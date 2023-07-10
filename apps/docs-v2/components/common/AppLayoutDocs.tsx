import {Box} from '@comfortdelgro/react-compass'
import AppFrame from 'components/common/AppFrame'
import AppLayoutDocsFooter from 'components/common/AppLayoutDocsFooter'
import AppTableOfContents from 'components/common/AppTableOfContents'
import BackToTop from 'components/common/BackToTop'
import EditPage from 'components/common/EditPage'
import Head from 'components/common/Head'

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
            maxHeight: 'calc(100vh - 51px)',
            overflowY: 'scroll',
            width: '100%',
          }}
        >
          <EditPage sourceLocation={location} />
          {children}
          <AppLayoutDocsFooter tableOfContents={toc} />
        </Box>
        <AppTableOfContents toc={toc} />
      </Box>
      <BackToTop />
    </AppFrame>
  )
}
