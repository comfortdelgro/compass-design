import {Column, Row, Tabs, Typography} from '@comfortdelgro/react-compass-old'

const Variants: React.FC = () => (
  <Column>
    <Typography.Header variant='header3'>Simple Style</Typography.Header>
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

    <Typography.Header variant='header3'>Rounded Style</Typography.Header>
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

export default Variants
