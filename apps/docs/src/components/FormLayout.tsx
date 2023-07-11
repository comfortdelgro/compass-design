import {
  Button,
  Checkbox,
  Divider,
  Dropdown,
  FormLayout,
  Radio,
  TextField,
  Upload,
} from '@comfortdelgro/react-compass'
export const FormLayoutComponent: React.FC = () => {
  return (
    <FormLayout>
      <FormLayout.Row>
        <FormLayout.Explaination
          title={'Create New Time/Date Policy'}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </FormLayout.Row>
      <Divider />
      <FormLayout.Row columns={3}>
        <FormLayout.Group>
          <Dropdown.Select label='Salutation'>
            <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>
            <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>
            <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>
          </Dropdown.Select>
        </FormLayout.Group>
      </FormLayout.Row>
      <FormLayout.Row columns={3}>
        <FormLayout.Group>
          <Radio
            variant='outlined'
            label={'option'}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='1'
            tooltip='This is tooltip'
            id='item1'
          />
        </FormLayout.Group>
        <FormLayout.Group>
          <Radio
            variant='outlined'
            label={'option'}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='1'
            tooltip='This is tooltip'
            id='item1'
          />
        </FormLayout.Group>
        <FormLayout.Group>
          <Radio
            variant='outlined'
            label={'option'}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='1'
            tooltip='This is tooltip'
            id='item1'
          />
        </FormLayout.Group>
      </FormLayout.Row>
      <FormLayout.Row columns={2}>
        <FormLayout.Group>
          <FormLayout.Explaination
            title={'Create New Time/Date Policy'}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </FormLayout.Group>
        <FormLayout.Group>
          <Upload
            getFile={() => {}}
            accept='image/*, .docs, .docx'
            fileSizeLimit={999999999999999}
          />
        </FormLayout.Group>
      </FormLayout.Row>
      <Divider />
      <FormLayout.Row columns={2}>
        <FormLayout.Group>
          <FormLayout.Explaination
            title={'Create New Time/Date Policy'}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </FormLayout.Group>
        <FormLayout.Group
          css={{display: 'flex', flexDirection: 'column', gap: '$4'}}
        >
          <Checkbox>Unselected</Checkbox>
          <Checkbox>Unselected</Checkbox>
          <Checkbox>Unselected</Checkbox>
        </FormLayout.Group>
      </FormLayout.Row>
      <Divider />
      <FormLayout.Row columns={3}>
        <FormLayout.Group>
          <Dropdown.Select label='Salutation' defaultSelectedKey={'mr'}>
            <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>
            <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>
            <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>
          </Dropdown.Select>
        </FormLayout.Group>
        <FormLayout.Group>
          <TextField label='Full Name' />
        </FormLayout.Group>
        <FormLayout.Group>
          <TextField label='Last Name' />
        </FormLayout.Group>
      </FormLayout.Row>
      <FormLayout.Row columns={3}>
        <FormLayout.Group>
          <TextField label='Contact Number' />
        </FormLayout.Group>
        <FormLayout.Group>
          <TextField label='Work Email' />
        </FormLayout.Group>
        <FormLayout.Group>
          <TextField label='Department' />
        </FormLayout.Group>
      </FormLayout.Row>
      <FormLayout.Row columns={3}>
        <FormLayout.Group
          css={{
            gridColumnStart: 2,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Button className='c-hKssGC-hYGuEl-variant-primary' type='submit'>
            Submit
          </Button>
        </FormLayout.Group>
      </FormLayout.Row>
    </FormLayout>
  )
}
