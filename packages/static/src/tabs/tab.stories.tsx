import type {Meta} from '@storybook/react'
import React from 'react'
import Tabs from './index'
import styles from './styles/story.module.css'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

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
    <div style={{...style}}>
      <h3>Server Interaction</h3>
      <div style={{flexDirection: 'row', ...style}}>
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
      </div>
    </div>
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
    <div style={{...style}}>
      <h3>Paneless</h3>
      <div style={{flexDirection: 'row', ...style}}>
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
      </div>
    </div>
  )
}

export const H5: React.FC = () => {
  const [value, setValue] = React.useState<React.Key>('1')
  const items = [
    {key: '1', title: 'Founding of Rome'},
    {key: '2', title: 'Monarchy and Republic'},
    {key: '3', title: 'Empire'},
  ]
  return (
    <div style={{...style}}>
      <h3>H5</h3>
      <div style={{flexDirection: 'row', ...style}}>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
          <Tabs.Paneless
            variant='h5'
            items={items}
            selectedKey={value}
            onSelectionChange={(v: React.Key) => setValue(v)}
          />
          {value === '1' && <FetchList id='1' />}
          {value === '2' && <FetchList id='2' />}
          {value === '3' && <FetchList id='3' />}
        </div>
      </div>
    </div>
  )
}

export const Icon: React.FC = () => (
  <div style={{...style}}>
    <h3>With left icon</h3>
    <div style={{flexDirection: 'row', ...style}}>
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
    </div>

    <h3>With right icon</h3>
    <div style={{flexDirection: 'row', ...style}}>
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
    </div>

    <h3>With top icon</h3>
    <div style={{flexDirection: 'row', ...style}}>
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
    </div>
  </div>
)

export const CustomCssModule: React.FC = () => (
  <div style={{...style}}>
    <h3>
      Users can customize the styling of the component by applying their own CSS
    </h3>
    <div style={{flexDirection: 'row', ...style}}>
      <Tabs icon='left' className={styles.icon}>
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
    </div>
  </div>
)

export const Orientation: React.FC = () => (
  <div style={{...style}}>
    <h3>Horizontal Rounded</h3>
    <div style={{flexDirection: 'row', ...style}}>
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
    </div>

    <h3>Vertical Rounded</h3>
    <div style={{flexDirection: 'row', ...style}}>
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
    </div>
  </div>
)

export const Variants: React.FC = () => (
  <div style={{...style}}>
    <h3>Simple Style</h3>
    <div style={{flexDirection: 'row', ...style}}>
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
    </div>

    <h3>Rounded Style</h3>
    <div style={{flexDirection: 'row', ...style}}>
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
    </div>
  </div>
)

const meta = {
  title: 'Example/Tabs ',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
