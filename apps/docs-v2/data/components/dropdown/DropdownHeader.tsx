import {Dropdown} from '@comfortdelgro/react-compass'

const WithHeader = () => {
  return (
    <Dropdown.Select label='Favorite Animal' placeholder='Choose an animal'>
      <Dropdown.Header>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '8px 16px',
            borderBottom: '2px solid #EDEBE9',
          }}
        >
          <span
            style={{
              color: '#323130',
              fontSize: '12px',
              fontWeight: 'bold',
              padding: 0,
              margin: 0,
            }}
          >
            Filter
          </span>
          <button
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#A4262C',
              border: 0,
              cursor: 'pointer',
              backgroundColor: 'transparent',
            }}
          >
            Clear
          </button>
        </div>
      </Dropdown.Header>
      <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
      <Dropdown.Item value='cat'>Cat</Dropdown.Item>
      <Dropdown.Item value='dog'>Dog</Dropdown.Item>
      <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
      <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
      <Dropdown.Item value='snake'>Snake</Dropdown.Item>
    </Dropdown.Select>
  )
}

export default WithHeader
