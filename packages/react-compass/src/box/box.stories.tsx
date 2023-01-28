import {Column} from '../utils/components'
import Box from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default box</h3>
      <Box backgroundColor='grey' as='span' css={{backgroundColor: 'red'}}>
        <p>My box</p>
      </Box>
    </Column>
  )
}
