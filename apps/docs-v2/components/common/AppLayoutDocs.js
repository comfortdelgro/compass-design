import GlobalStyles from '@mui/material/GlobalStyles'
import NoSsr from '@mui/material/NoSsr'
import {styled} from '@mui/material/styles'
import {exactProp} from '@mui/utils'
import AppContainer from 'components/common/AppContainer'
import AppFrame from 'components/common/AppFrame'
import AppLayoutDocsFooter from 'components/common/AppLayoutDocsFooter'
import AppTableOfContents from 'components/common/AppTableOfContents'
import BackToTop from 'components/common/BackToTop'
import EditPage from 'components/common/EditPage'
import Head from 'components/common/Head'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import * as React from 'react'
import {pathnameToLanguage} from 'utils/helpers'

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'disableToc',
})(({disableToc, theme}) => ({
  display: 'grid',
  width: '100%',
  ...(disableToc
    ? {
        [theme.breakpoints.up('lg')]: {
          marginRight: '5%',
        },
      }
    : {
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: '1fr 242px',
        },
      }),
  '& .markdown-body .comment-link': {
    display: 'inline-block',
  },
}))

const StyledAppContainer = styled(AppContainer, {
  shouldForwardProp: (prop) => prop !== 'disableAd' && prop !== 'hasTabs',
})(({disableAd, hasTabs, theme}) => {
  return {
    position: 'relative',
    // By default, a grid item cannot be smaller than the size of its content.
    // https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items
    minWidth: 0,
    ...(!disableAd && {
      ...(!hasTabs && {
        '&& .description': {
          paddingBottom: 4 * 10 + 126,
          marginBottom: 3 * 10,
        },
        '&& .description.ad': {
          paddingBottom: 0,
          marginBottom: 0,
        },
      }),
      ...(hasTabs && {
        '&& .component-tabs .MuiTabs-root': {
          marginBottom: 4 * 10 + 4 * 10 + 126,
        },
        '&& .component-tabs.ad .MuiTabs-root': {
          marginBottom: 0,
        },
      }),
    }),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '60px',
      paddingRight: '60px',
    },
  }
})

const ActionsDiv = styled('div')(({theme}) => ({
  display: 'flex',
  marginTop: -10,
  marginBottom: -15,
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-end',
  },
}))

export default function AppLayoutDocs(props) {
  const router = useRouter()
  const {
    BannerComponent,
    children,
    description,
    disableAd = false,
    disableLayout = false,
    disableToc = false,
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

  const Layout = disableLayout ? React.Fragment : AppFrame
  const layoutProps = disableLayout ? {} : {BannerComponent}

  return (
    <Layout {...layoutProps}>
      <GlobalStyles
        styles={{
          ':root': {
            '--MuiDocs-navDrawer-width': '300px',
          },
        }}
      />
      <Head
        title={`${title} - ${productName}`}
        description={description}
        largeCard={false}
        card='https://github.com/comfortdelgro/compass-design'
      />
      <Main disableToc={disableToc}>
        <StyledAppContainer disableAd={disableAd} hasTabs={hasTabs}>
          <ActionsDiv>
            <EditPage sourceLocation={location} />
          </ActionsDiv>
          {children}
          <NoSsr>
            <AppLayoutDocsFooter tableOfContents={toc} />
          </NoSsr>
        </StyledAppContainer>
        {disableToc ? null : <AppTableOfContents toc={toc} />}
      </Main>
      <BackToTop />
    </Layout>
  )
}

AppLayoutDocs.propTypes = {
  BannerComponent: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  disableAd: PropTypes.bool.isRequired,
  disableLayout: PropTypes.bool,
  disableToc: PropTypes.bool.isRequired,
  hasTabs: PropTypes.bool,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toc: PropTypes.array.isRequired,
}

if (process.env.NODE_ENV !== 'production') {
  AppLayoutDocs.propTypes = exactProp(AppLayoutDocs.propTypes)
}
