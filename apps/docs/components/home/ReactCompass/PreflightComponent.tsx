import {Box, Button} from '@comfortdelgro/react-compass-old'
import HighlightedCode from 'components/common/HighlightedCode'
import MarkdownElement from '../../markdown/MarkdownElement'
import ShowcaseContainer from './ShowcaseContainer'

const componentCode = `import Preflight from '@comfortdelgro/react-compass-old/preflight'
import {AppProps} from 'next/app'
 
const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Preflight />
      <Component {...pageProps} />
    </>
  )
}
 
export default App`

export default function PreflightComponent() {
  return (
    <ShowcaseContainer
      code={
        <Box>
          <Box
            css={{
              padding: '$3',
              display: 'flex',
              alignItems: 'center',
              right: 0,
              zIndex: 10,
            }}
          >
            <Button size='sm' variant='secondary' css={{color: 'white'}}>
              Compass Design
            </Button>
          </Box>
          <Box
            css={{
              padding: '$3',
              overflow: 'hidden',
              flexGrow: 1,
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '& pre': {
                backgroundColor: 'transparent !important',
                position: 'relative',
                zIndex: 1,
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              },
            }}
          >
            <Box css={{position: 'relative'}}>
              <HighlightedCode
                copyButtonHidden
                component={MarkdownElement}
                code={componentCode}
                language='jsx'
              />
            </Box>
          </Box>
        </Box>
      }
    />
  )
}
