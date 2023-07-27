import {Box, Button} from '@comfortdelgro/react-compass'
import HighlightedCode from 'components/common/HighlightedCode'
import MarkdownElement from '../../markdown/MarkdownElement'
import ShowcaseContainer from './ShowcaseContainer'
import ShowcaseDemo, {componentCode} from './ShowcaseDemo'

export default function CoreShowcase() {
  return (
    <ShowcaseContainer
      // preview={
        // <Box css={{padding: '$8'}}>
          // {/* <ShowcaseDemo /> */}
        // </Box>
      // }
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
