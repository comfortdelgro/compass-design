import {Column, Row} from '../utils/components'
import Tab from './index'

export const Variants: React.FC = () => (
  <Column>
    <h3>Simple Style</h3>
    <Row>
      <Tab variant='simple'>
        <Tab.List>
          <Tab.Item value={1} disabled>
            tab1
          </Tab.Item>
          <Tab.Item value={2}>tab2</Tab.Item>
          <Tab.Item value={3}>tab3</Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>

    <h3>Rounded Style</h3>
    <Row>
      <Tab variant='rounded'>
        <Tab.List>
          <Tab.Item value={1} disabled>
            tab1
          </Tab.Item>
          <Tab.Item value={2}>tab2</Tab.Item>
          <Tab.Item value={3}>tab3</Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>
  </Column>
)

export const Icon: React.FC = () => (
  <Column>
    <h3>Simple Style with left icon</h3>
    <Row>
      <Tab variant='simple'>
        <Tab.List>
          <Tab.Item value={1} disabled icon='left'>
            tab1
          </Tab.Item>
          <Tab.Item value={2} icon='left'>
            tab2
          </Tab.Item>
          <Tab.Item value={3} icon='left'>
            tab3
          </Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>

    <h3>Rounded Style with left icon</h3>
    <Row>
      <Tab variant='rounded'>
        <Tab.List>
          <Tab.Item value={1} disabled icon='left'>
            tab1
          </Tab.Item>
          <Tab.Item value={2} icon='left'>
            tab2
          </Tab.Item>
          <Tab.Item value={3} icon='left'>
            tab3
          </Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>

    <h3>Simple Style with right icon</h3>
    <Row>
      <Tab variant='simple'>
        <Tab.List>
          <Tab.Item value={1} disabled icon='right'>
            tab1
          </Tab.Item>
          <Tab.Item value={2} icon='right'>
            tab2
          </Tab.Item>
          <Tab.Item value={3} icon='right'>
            tab3
          </Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>

    <h3>Rounded Style with right icon</h3>
    <Row>
      <Tab variant='rounded'>
        <Tab.List>
          <Tab.Item value={1} disabled icon='right'>
            tab1
          </Tab.Item>
          <Tab.Item value={2} icon='right'>
            tab2
          </Tab.Item>
          <Tab.Item value={3} icon='right'>
            tab3
          </Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>

    <h3>Simple Style with top icon</h3>
    <Row>
      <Tab variant='simple'>
        <Tab.List>
          <Tab.Item value={1} disabled icon='top'>
            tab1
          </Tab.Item>
          <Tab.Item value={2} icon='top'>
            tab2
          </Tab.Item>
          <Tab.Item value={3} icon='top'>
            tab3
          </Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>
  </Column>
)

export const Orientation: React.FC = () => (
  <Column>
    <h3>Horizontal Rounded</h3>
    <Row>
      <Tab orientation='horizontal'>
        <Tab.List>
          <Tab.Item value={1} disabled>
            tab1
          </Tab.Item>
          <Tab.Item value={2}>tab2</Tab.Item>
          <Tab.Item value={3}>tab3</Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>

    <h3>Vertical Rounded</h3>
    <Row>
      <Tab orientation='vertical'>
        <Tab.List>
          <Tab.Item value={1} disabled>
            tab1
          </Tab.Item>
          <Tab.Item value={2}>tab2</Tab.Item>
          <Tab.Item value={3}>tab3</Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>

    <h3>Horizontal Simple</h3>
    <Row>
      <Tab variant='simple' orientation='horizontal'>
        <Tab.List>
          <Tab.Item value={1} disabled>
            tab1
          </Tab.Item>
          <Tab.Item value={2}>tab2</Tab.Item>
          <Tab.Item value={3}>tab3</Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>

    <h3>Vertical Simple</h3>
    <Row>
      <Tab variant='simple' orientation='vertical'>
        <Tab.List>
          <Tab.Item value={1} disabled>
            tab1
          </Tab.Item>
          <Tab.Item value={2}>tab2</Tab.Item>
          <Tab.Item value={3}>tab3</Tab.Item>
        </Tab.List>
        <Tab.Panel value={1}> tab1 content</Tab.Panel>
        <Tab.Panel value={2}> tab2 content</Tab.Panel>
        <Tab.Panel value={3}> tab3 content</Tab.Panel>
      </Tab>
    </Row>
  </Column>
)
