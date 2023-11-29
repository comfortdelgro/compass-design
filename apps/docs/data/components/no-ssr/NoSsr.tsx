import {Box, Button} from '@comfortdelgro/react-compass'
import React from 'react'

const MyNoSsr: React.FC = () => {
  const [state, setState] = React.useState({
    open: false,
    defer: false,
  })
  return (
    <div>
      <h5>Click these 2 buttons for the demo:</h5>
      <br />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          gap: '3rem',
        }}
      >
        <Button
          onClick={() =>
            setState({
              open: !state.open,
              defer: false,
            })
          }
          variant='secondary'
        >
          {'Render NoSsr defer="false"'}
        </Button>
        <Button
          onClick={() =>
            setState({
              open: !state.open,
              defer: true,
            })
          }
          variant='secondary'
        >
          {'Render NoSsr defer="true"'}
        </Button>
      </div>
      <br />
      <br />
      <Box css={{width: 300, display: 'flex', flexWrap: 'wrap'}}>
        {state.open ? (
          <React.Fragment>
            <div>Outside NoSsr</div>
            {/* <NoSsr defer={state.defer}>
              .....Inside NoSsr
              <LargeTree />
            </NoSsr> */}
          </React.Fragment>
        ) : null}
      </Box>
    </div>
  )
}

export default MyNoSsr
