import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import type {StoryDecorator} from '@ladle/react'
import {Column, Row} from '../utils/components'
import Input from './input'

export const Variants: React.FC = () => (
  <Column>
    <Row>
      <Input placeholder='Enter your name' />
    </Row>

    <h3>With Label</h3>
    <Row>
      <Input label='Name' placeholder='Enter your name' />
    </Row>

    <h3>With Helper Text</h3>
    <Row>
      <Input
        label='Name'
        placeholder='Enter your name'
        helperText='Helper Text'
      />
    </Row>

    <h3>Error</h3>
    <Row>
      <Input
        errored
        value='Wrong Value'
        label='Name'
        placeholder='Enter your name'
        helperText='Use Helper Text for Errors'
      />
    </Row>

    <h3>With Icons</h3>
    <Row>
      <Input label='Name' leftIcon={faUser} placeholder='Enter your name' />
      <Input
        label='Name'
        rightIcon={faChevronDown}
        placeholder='Enter your name'
      />
      <Input
        label='Name'
        leftIcon={faUser}
        rightIcon={faChevronDown}
        placeholder='Enter your name'
      />
    </Row>

    <h3>Disabled</h3>
    <Row>
      <Input label='Name' placeholder='Enter your name' disabled />
      <Input
        label='Name'
        leftIcon={faUser}
        placeholder='Enter your name'
        disabled
      />
      <Input
        label='Name'
        rightIcon={faChevronDown}
        placeholder='Enter your name'
        disabled
      />
      <Input
        label='Name'
        leftIcon={faUser}
        rightIcon={faChevronDown}
        placeholder='Enter your name'
        disabled
      />
    </Row>
  </Column>
)

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
