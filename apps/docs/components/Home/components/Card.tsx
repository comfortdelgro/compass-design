import {Box, Typography} from '@comfortdelgro/react-compass'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  description: string
  image: string
  textLink: string
  urlLink: string
  target: '_blank' | '_self' | '_parent' | '_top'
}

export default function Card(props: Props) {
  const {title, description, image, textLink, urlLink = '/', target} = props
  return (
    <Box
      css={{
        width: '100%',
        display: 'flex',
        borderRadius: 12,
        background: 'var(--cdg-color-background)',
        boxShadow:
          '0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px 0px rgba(0, 0, 0, 0.10)',
        '@media (max-width: 450px)': {
          h3: {
            fontSize: 18,
            lineHeight: '1.5em',
          },
          p: {
            fontSize: 14,
          },
          a: {
            fontSize: 14,
          },
        },
        '@media (max-width: 360px)': {
          img: {
            display: 'none',
          },
        },
      }}
    >
      <Image
        src={image}
        alt='design'
        width={131}
        height={131}
        style={{
          height: '100%',
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
      <Box
        css={{
          padding: 'var(--cdg-spacing-4) var(--cdg-spacing-3)',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Typography.Header variant='header3' css={{color: 'black'}}>
          {title}
        </Typography.Header>
        <Typography.Body variant='body2' css={{color: 'black'}}>
          {description}
        </Typography.Body>
        <Link href={urlLink} style={{textDecoration: 'none'}} target={target}>
          <Typography.Body
            variant='body2'
            css={{
              color: 'var(--colors-cdgBlue)',
              fontWeight: 'bold',
            }}
          >
            {textLink}
          </Typography.Body>
        </Link>
      </Box>
    </Box>
  )
}
