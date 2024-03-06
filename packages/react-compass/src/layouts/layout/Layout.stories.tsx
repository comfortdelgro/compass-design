import type {Meta} from '@storybook/react'
import React from 'react'
import Layout from './layout'

export const Basic: React.FC = () => {
  return (
    <div style={{padding: '20px'}}>
      <Layout direction='column'>
        <Layout>Col 1</Layout>
        <Layout>Col 2</Layout>
        <Layout>Col 3</Layout>
      </Layout>
    </div>
  )
}

export const Row: React.FC = () => {
  return (
    <div style={{padding: '20px'}}>
      <Layout direction='row'>
        <Layout>Col 1</Layout>
        <Layout>Col 2</Layout>
        <Layout>Col 3</Layout>
      </Layout>
    </div>
  )
}

const wrapperStyle = {height: '100px', border: '1px solid rgba(0,0,0,0.1)'}

export const Align: React.FC = () => {
  return (
    <Layout style={{padding: '20px', gap: '20px'}}>
      <Layout direction='row' align='start-start' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='center-start' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='end-start' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='start-center' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='center-center' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='end-center' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='start-end' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='center-end' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='end-end' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
    </Layout>
  )
}

const meta = {
  title: 'Example/Layout',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
