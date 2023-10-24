import {Meta} from '@storybook/react'
import React from 'react'
import NoSsr from '.'

export const Basic: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function LargeTree(): any {
    return Array.from(new Array(5000)).map((_, index) => (
      <span key={index}>.</span>
    ))
  }
  const [state, setState] = React.useState({
    open: false,
    defer: false,
  })
  return (
    <div>
      <h3>
        1. No-SSR is a component that prevents rendering its children on the
        server. It has various uses:
      </h3>

      <ul>
        <li>
          It's helpful when dealing with dependencies that don't support
          server-side rendering (SSR).
        </li>
        <li>
          It improves the initial loading time by only rendering the visible
          content.
        </li>
        <li>
          It reduces server rendering workload and can improve performance.
        </li>
        <li>It allows for service degradation during heavy server load.</li>
        <li>
          With the "defer" option, it prioritizes essential content for quicker
          interactivity.
        </li>
      </ul>

      <h3>2. Delay client-side rendering</h3>
      <p>
        No-SSR can be used to delay rendering certain components on the client
        side. This is useful when you want the rest of the application to load
        before dealing with complex or data-heavy components.
      </p>
      <h5>Click these 2 buttons for the demo</h5>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          gap: '3rem',
        }}
      >
        <button
          type='button'
          onClick={() =>
            setState({
              open: !state.open,
              defer: false,
            })
          }
        >
          {'Render NoSsr defer="false"'}
        </button>
        <button
          type='button'
          onClick={() =>
            setState({
              open: !state.open,
              defer: true,
            })
          }
        >
          {'Render NoSsr defer="true"'}
        </button>
      </div>
      <br />
      <br />
      <div style={{width: 300, display: 'flex', flexWrap: 'wrap'}}>
        {state.open ? (
          <React.Fragment>
            <div>Outside NoSsr</div>
            <NoSsr defer={state.defer}>
              .....Inside NoSsr
              <LargeTree />
            </NoSsr>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/No Ssr',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
