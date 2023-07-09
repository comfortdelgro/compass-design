import {Box} from '@comfortdelgro/react-compass'
import AppFrame from 'components/common/AppFrame'
import AppLayoutDocsFooter from 'components/common/AppLayoutDocsFooter'
import AppTableOfContents from 'components/common/AppTableOfContents'
import BackToTop from 'components/common/BackToTop'
import EditPage from 'components/common/EditPage'
import Head from 'components/common/Head'
import {useRouter} from 'next/router'
import {pathnameToLanguage} from 'utils/helpers'

export default function AppLayoutDocs(props) {
  const router = useRouter()
  const {
    BannerComponent,
    children,
    description,
    disableAd = false,
    disableLayout = false,
    hasTabs = false,
    location,
    title,
    toc,
  } = props

  if (description === undefined) {
    throw new Error('Missing description in the page')
  }

  const {canonicalAs} = pathnameToLanguage(router.asPath)
  let productName = 'React Compass'

  return (
    <AppFrame>
      <Head
        title={`${title} - ${productName}`}
        description={description}
        largeCard={false}
        card='https://github.com/comfortdelgro/compass-design'
      />

      <Box css={{display: 'flex'}}>
        <Box
          css={{
            padding: '$5 $16',
            maxHeight: 'calc(100vh - 51px)',
            overflowY: 'scroll',
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
