import {Checkbox, Column, Row, Typography} from '@comfortdelgro/react-compass'

const Variants: React.FC = () => (
  <Column>
    <Typography.Header variant='header3'>1. Default</Typography.Header>
    <Column>
      <Checkbox isSelected={false}>Unselected</Checkbox>
      <Checkbox isSelected>Selected</Checkbox>
      <Checkbox isDisabled>Unselected (disabled)</Checkbox>
      <Checkbox isSelected isDisabled>
        Selected (disabled)
      </Checkbox>
      <Checkbox isIndeterminate isSelected>
        Indeterminate
      </Checkbox>
      <Checkbox isIndeterminate isDisabled isSelected>
        Indeterminate (disabled)
      </Checkbox>
      <Checkbox isSelected isReadOnly>
        Read ony
      </Checkbox>
    </Column>

    <Typography.Header variant='header3'>2. Rounded</Typography.Header>
    <Column>
      <Checkbox variant='rounded' isSelected={false}>
        Unselected
      </Checkbox>
      <Checkbox variant='rounded' isSelected>
        Selected
      </Checkbox>
      <Checkbox variant='rounded' isDisabled>
        Unselected (disabled)
      </Checkbox>
      <Checkbox variant='rounded' isSelected isDisabled>
        Selected (disabled)
      </Checkbox>
      <Checkbox variant='rounded' isIndeterminate isSelected>
        Indeterminate
      </Checkbox>
      <Checkbox variant='rounded' isIndeterminate isDisabled isSelected>
        Indeterminate (disabled)
      </Checkbox>
    </Column>

    <Typography.Header variant='header3'>3. Without Labels</Typography.Header>
    <Column>
      <Row css={{gap: '1em'}}>
        <Checkbox />
        <Checkbox defaultSelected />
        <Checkbox isDisabled />
        <Checkbox defaultSelected isDisabled />
        <Checkbox isIndeterminate defaultSelected />
        <Checkbox isIndeterminate isDisabled defaultSelected />
      </Row>
      <Row css={{gap: '1em'}}>
        <Checkbox variant='rounded' />
        <Checkbox variant='rounded' defaultSelected />
        <Checkbox variant='rounded' isDisabled />
        <Checkbox variant='rounded' defaultSelected isDisabled />
        <Checkbox variant='rounded' isIndeterminate defaultSelected />
        <Checkbox
          variant='rounded'
          isIndeterminate
          isDisabled
          defaultSelected
        />
      </Row>
    </Column>

    <Typography.Header variant='header3'>4. HTML forms</Typography.Header>
    <Column>
      <Row>
        <Checkbox name='newsletter' value='subscribe'>
          Subscribe
        </Checkbox>
      </Row>
    </Column>
  </Column>
)

export default Variants
