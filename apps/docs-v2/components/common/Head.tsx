import NextHead from 'next/head'
import {useRouter} from 'next/router'
import * as React from 'react'
import {useTranslate} from 'utils/i18n'

// #major-version-switch
const HOST = 'https://mui.com'

interface HeadProps {
  card?: string
  children?: React.ReactNode
  description: string
  largeCard?: boolean
  title: string
  type?: string
}

export default function Head(props: HeadProps) {
  const t = useTranslate()
  const {
    card = '/static/social-previews/default-preview.jpg',
    children,
    description = t('strapline'),
    largeCard = true,
    title = t('headTitle'),
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
      <meta name='twitter:site' content='@MUI_hq' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={preview} />
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
