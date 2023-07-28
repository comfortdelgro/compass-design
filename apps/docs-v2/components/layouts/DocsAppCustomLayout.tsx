import {Box} from '@comfortdelgro/react-compass'
import Head from 'components/common/Head'
import AppFooter from 'components/layouts/AppFooter'
import DocsAppFooter from 'components/layouts/DocsAppFooter'
import DocsAppFrame from 'components/layouts/DocsAppFrame'

type PageProps = {
  children: React.ReactNode
}

export default function DocsAppCustomLayout(props: PageProps) {
  return (
    <DocsAppFrame>
      <Head
        title={`Overview - React Compass`}
        description='React Compass is a library of React UI components'
        largeCard={false}
        card='https://github.com/comfortdelgro/compass-design'
      />

      <Box css={{display: 'flex', width: '100%'}}>
        <Box
          css={{
            overflowY: 'scroll',
            width: '100%',
          }}
          id='document'
        >
          <Box>
            {props.children}
            <DocsAppFooter />
          </Box>
          <AppFooter />
        </Box>
      </Box>
    </DocsAppFrame>
  )
}
