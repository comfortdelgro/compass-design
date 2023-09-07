import Grid from '@comfortdelgro/react-compass/grid'

function GridBasic() {
  return (
    <div>
      <Grid spacing='sm' alignItems='center' style={{height: '100%'}}>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          <div
            style={{
              padding: '16px',
              borderRadius: '4px',
              textAlign: 'center',
              color: '#ede9f9',
              fontWeight: '700',
              backgroundColor: '#47b0b0',
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
            }}
          >
            Box
          </div>
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          <div
            style={{
              padding: '16px',
              borderRadius: '4px',
              textAlign: 'center',
              color: '#ede9f9',
              fontWeight: '700',
              backgroundColor: '#47b0b0',
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
            }}
          >
            Box
          </div>
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          <div
            style={{
              padding: '16px',
              borderRadius: '4px',
              textAlign: 'center',
              color: '#ede9f9',
              fontWeight: '700',
              backgroundColor: '#47b0b0',
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
            }}
          >
            Box
          </div>
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          <div
            style={{
              padding: '16px',
              borderRadius: '4px',
              textAlign: 'center',
              color: '#ede9f9',
              fontWeight: '700',
              backgroundColor: '#47b0b0',
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
            }}
          >
            Box
          </div>
        </Grid.Item>
      </Grid>
    </div>
  )
}

export default GridBasic
