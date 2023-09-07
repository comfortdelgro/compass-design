import {Tabs} from '@comfortdelgro/react-compass'
import React from 'react'

const TabPaneless: React.FC = () => {
  const [value, setValue] = React.useState<React.Key>('1')
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
      <Tabs.Paneless
        variant='simple'
        items={[
          {key: '1', title: 'Founding of Rome'},
          {key: '2', title: 'Monarchy and Republic'},
          {key: '3', title: 'Empire'},
        ]}
        selectedKey={value}
        onSelectionChange={(v: React.Key) => setValue(v)}
      />
      {value === '1' && <h1>Arma virumque cano, Troiae qui primus ab oris.</h1>}
      {value === '2' && <h1>Senatus Populusque Romanus.</h1>}
      {value === '3' && <h1>Alea jacta est.</h1>}
    </div>
  )
}

export default TabPaneless
