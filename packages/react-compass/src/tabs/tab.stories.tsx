import React from 'react'
import {Column, Row} from '../utils/components'
import Tabs from './index'

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

export const ServerInteraction: React.FC = () => {
  return (
    <Column>
      <h3>Server Interaction</h3>
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

export const Paneless: React.FC = () => {
  const [value, setValue] = React.useState<React.Key>('1')
  const items = [
    {key: '1', title: 'Founding of Rome'},
    {key: '2', title: 'Monarchy and Republic'},
    {key: '3', title: 'Empire'},
  ]
  return (
    <Column>
      <h3>Paneless</h3>
      <Row>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
          <Tabs.Paneless
            variant='simple'
            items={items}
            selectedKey={value}
            onSelectionChange={(v: React.Key) => setValue(v)}
          />
          {value === '1' && <FetchList id='1' />}
          {value === '2' && <FetchList id='2' />}
          {value === '3' && <FetchList id='3' />}
        </div>
      </Row>
    </Column>
  )
}

export const Icon: React.FC = () => (
  <Column>
    <h3>With left icon</h3>
    <Row>
      <Tabs icon='left'>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </Row>

    <h3>With right icon</h3>
    <Row>
      <Tabs icon='right' disabledKeys={['1']}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </Row>

    <h3>With top icon</h3>
    <Row>
      <Tabs variant='simple' icon='top' disabledKeys={['1']}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </Row>
  </Column>
)

export const Orientation: React.FC = () => (
  <Column>
    <h3>Horizontal Rounded</h3>
    <Row>
      <Tabs orientation='horizontal'>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </Row>

    <h3>Vertical Rounded</h3>
    <Row>
      <Tabs orientation='vertical'>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </Row>
  </Column>
)

export const Variants: React.FC = () => (
  <Column>
    <h3>Simple Style</h3>
    <Row>
      <Tabs variant='simple' disabledKeys={['1']}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </Row>

    <h3>Rounded Style</h3>
    <Row>
      <Tabs variant='rounded' disabledKeys={['1']}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </Row>
  </Column>
)
