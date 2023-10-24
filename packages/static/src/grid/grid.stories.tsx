import {Meta} from '@storybook/react'
import React from 'react'
import Grid from './index'

export const Default: React.FC = () => {
  const box = (
    <div
      style={{
        padding: '16px',
        borderRadius: '4px',
        textAlign: 'center',
        color: '#ede9f9',
        fontWeight: '700',
        backgroundColor: '#47b0b0',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      Box
    </div>
  )
  return (
    <div style={{padding: '3rem'}}>
      <section>
        <h3>Fluid grids</h3>
        Fluid grids use columns that scale and resize content. A fluid grid's
        layout can use breakpoints to determine if the layout needs to change
        dramatically.
        <h3>How it works:</h3>
        <ol>
          <li>It uses CSS's Flexible Box module for high flexibility.</li>
          <li>There are two types of layout: containers and items.</li>
          <li>
            Item widths are set in percentages, so they're always fluid and
            sized relative to their parent element.
          </li>
          <li>
            Items have padding to create the spacing between individual items.
          </li>
          <li>There are five grid breakpoints: xs, sm, md, lg, and xl.</li>
          <li>
            Integer values can be given to each breakpoint, indicating how many
            of the 12 available columns are occupied by the component when the
            viewport width satisfies the breakpoint constraints.
          </li>
        </ol>
        <h3>Default breakpoints</h3>
        <ol>
          <li>xs, extra-small: 0px</li>
          <li>sm, small: 600px</li>
          <li>md, medium: 900px</li>
          <li>lg, large: 1200px</li>
          <li>xl, extra-large: 1536px</li>
        </ol>
      </section>
      <h3>Example: </h3>
      <Grid spacing='sm' alignItems='center'>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          {box}
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          {box}
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          {box}
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          {box}
        </Grid.Item>
      </Grid>
    </div>
  )
}

const meta = {
  title: 'Example/Grid',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
