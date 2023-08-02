import React from 'react'
import Layout from './index'

export const Default: React.FC = () => {
  return (
    <Layout direction='row'>
      <Layout flex={1}>column 1</Layout>
      <Layout flex={1}>column 2</Layout>
    </Layout>
  )
}
