import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import type {StoryDecorator} from '@ladle/react'
import React from 'react'
import Icon from '../icon'
import {Column, Row} from '../utils/components'
import Textfield from './index'

export const Select = (
  <input
    value={'+64'}
    style={{
      fontSize: '0.8em',
      lineHeight: '1em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      appearance: 'none',
      border: 'none',
      width: '3rem',
    }}
  />
)

export const Variants: React.FC = () => (
  <Column>
    <Row>
      <Textfield placeholder='Enter your name' />
    </Row>

    <h3>With Label</h3>
    <Row>
      <Textfield label='Name' placeholder='Enter your name' />
    </Row>

    <h3>With Helper Text</h3>
    <Row>
      <Textfield
        label='Name'
        placeholder='Enter your name'
        helperText='Helper Text'
      />
    </Row>

    <h3>Error</h3>
    <Row>
      <Textfield
        errored
        value='Wrong Value'
        label='Name'
        placeholder='Enter your name'
        helperText='Use Helper Text for Errors'
      />
    </Row>

    <h3>With Icons</h3>
    <Row>
      <Textfield
        label='Name'
        leftIcon={<Icon icon={faUser} />}
        placeholder='Enter your name'
      />
      <Textfield
        label='Name'
        rightIcon={<Icon icon={faChevronDown} />}
        placeholder='Enter your name'
      />
      <Textfield
        label='Name'
        leftIcon={<Icon icon={faUser} />}
        rightIcon={<Icon icon={faChevronDown} />}
        placeholder='Enter your name'
      />
    </Row>

    <h3>Disabled</h3>
    <Row>
      <Textfield label='Name' placeholder='Enter your name' isDisabled />
      <Textfield
        label='Name'
        leftIcon={<Icon icon={faUser} />}
        placeholder='Enter your name'
        isDisabled
      />
      <Textfield
        label='Name'
        rightIcon={<Icon icon={faChevronDown} />}
        placeholder='Enter your name'
        isDisabled
      />
      <Textfield
        label='Name'
        leftIcon={<Icon icon={faUser} />}
        rightIcon={<Icon icon={faChevronDown} />}
        placeholder='Enter your name'
        isDisabled
      />
    </Row>
    <h3>Prefix</h3>
    <Row>
      <Textfield
        label='Name'
        prefix={Select}
        placeholder='Enter your phone number'
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
