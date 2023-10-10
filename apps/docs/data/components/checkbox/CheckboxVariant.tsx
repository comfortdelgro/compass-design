import {Checkbox, Column, Row, Typography} from '@comfortdelgro/react-compass'
// import {Checkbox as StaticCheckbox} from '@comfortdelgro/static'

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

    {/* <Typography.Header variant='header3'>1. Default</Typography.Header>
    <Column>
      <StaticCheckbox isSelected={false}>Unselected</StaticCheckbox>
      <StaticCheckbox isSelected>Selected</StaticCheckbox>
      <StaticCheckbox isDisabled>Unselected (disabled)</StaticCheckbox>
      <StaticCheckbox isSelected isDisabled>
        Selected (disabled)
      </StaticCheckbox>
      <StaticCheckbox isIndeterminate isSelected>
        Indeterminate
      </StaticCheckbox>
      <StaticCheckbox isIndeterminate isDisabled isSelected>
        Indeterminate (disabled)
      </StaticCheckbox>
      <StaticCheckbox isSelected isReadOnly>
        Read ony
      </StaticCheckbox>
    </Column>

    <Typography.Header variant='header3'>2. Rounded</Typography.Header>
    <Column>
      <StaticCheckbox variant='rounded' isSelected={false}>
        Unselected
      </StaticCheckbox>
      <StaticCheckbox variant='rounded' isSelected>
        Selected
      </StaticCheckbox>
      <StaticCheckbox variant='rounded' isDisabled>
        Unselected (disabled)
      </StaticCheckbox>
      <StaticCheckbox variant='rounded' isSelected isDisabled>
        Selected (disabled)
      </StaticCheckbox>
      <StaticCheckbox variant='rounded' isIndeterminate isSelected>
        Indeterminate
      </StaticCheckbox>
      <StaticCheckbox variant='rounded' isIndeterminate isDisabled isSelected>
        Indeterminate (disabled)
      </StaticCheckbox>
    </Column>

    <Typography.Header variant='header3'>3. Without Labels</Typography.Header>
    <Column>
      <Row css={{gap: '1em'}}>
        <StaticCheckbox />
        <StaticCheckbox defaultSelected />
        <StaticCheckbox isDisabled />
        <StaticCheckbox defaultSelected isDisabled />
        <StaticCheckbox isIndeterminate defaultSelected />
        <StaticCheckbox isIndeterminate isDisabled defaultSelected />
      </Row>
      <Row css={{gap: '1em'}}>
        <StaticCheckbox variant='rounded' />
        <StaticCheckbox variant='rounded' defaultSelected />
        <StaticCheckbox variant='rounded' isDisabled />
        <StaticCheckbox variant='rounded' defaultSelected isDisabled />
        <StaticCheckbox variant='rounded' isIndeterminate defaultSelected />
        <StaticCheckbox
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
        <StaticCheckbox name='newsletter' value='subscribe'>
          Subscribe
        </StaticCheckbox>
      </Row>
    </Column> */}
  </Column>
)

export default Variants
