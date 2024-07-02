import NextHead from 'next/head'
import {useRouter} from 'next/router'
import * as React from 'react'
import {getStaticPath} from 'utils'

const HOST = 'https://comfortdelgro.github.io/compass-design'

interface HeadProps {
  card?: string
  children?: React.ReactNode
  description: string
  largeCard?: boolean
  title: string
  type?: string
}

export default function Head(props: HeadProps) {
  const {
    card = getStaticPath('/static/social-previews/default-preview.jpg'),
    children,
    description = 'React Compass provides a simple, customizable, and accessible library of React components.',
    largeCard = true,
    title = 'React Compass: A popular React UI framework',
    type = 'website',
  } = props
  const router = useRouter()
  const preview = card.startsWith('http') ? card : `${HOST}${card}`

  return (
    <NextHead>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='twitter:card'
        content={largeCard ? 'summary_large_image' : 'summary'}
      />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={`${HOST}${router.asPath}`} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={preview} />
      <meta property='og:ttl' content='604800' />
      <meta name='docsearch:version' content='master' />

      {children}
    </NextHead>
  )
}
