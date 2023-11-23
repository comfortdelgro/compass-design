import {Column, Row, Tabs, Typography} from '@comfortdelgro/react-compass'
import React from 'react'

interface Data {
  userId: number
  id: number
  title: string
  completed: boolean
}

const FetchList = ({id}: {id: React.Key}) => {
  const [data, setData] = React.useState<Data>()
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((e: Data) => setData(e))
      .catch((e) => console.log(e))
  }, [id])
  return <h1>data: {data?.title ?? ''}</h1>
}

const ServerInteraction: React.FC = () => {
  return (
    <Column>
      <Typography.Header variant='header3'>
        Server Interaction
      </Typography.Header>
      <Row>
        <Tabs icon='left'>
          <Tabs.Item key='1' title='Founding of Rome'>
            <FetchList id='1' />
          </Tabs.Item>
          <Tabs.Item key='2' title='Monarchy and Republic'>
            <FetchList id='2' />
          </Tabs.Item>
          <Tabs.Item key='3' title='Empire'>
            <FetchList id='3' />
          </Tabs.Item>
        </Tabs>
      </Row>
    </Column>
  )
}

export default ServerInteraction
