import {Box, Grid, Typography} from '@comfortdelgro/react-compass'
import DocsAppCustomLayout from 'components/layouts/DocsAppCustomLayout'
import {usePageProps} from 'contexts/PageProps'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect} from 'react'

const introduces = [
  {
    title: 'Colors',
    description:
      'It distinguishes our brand and it creates consistent experience.',
    image: '/static/images/overview/intro-1.png',
    url: '/foundation/color',
  },
  {
    title: 'Elevations',
    description:
      'Elevations are layered surface that forms the foundation of UI.',
    image: '/static/images/overview/intro-2.png',
    url: '/foundation/color',
  },
  {
    title: 'Iconography',
    description:
      'Icons are visual representation of commands or common actions.',
    image: '/static/images/overview/intro-3.png',
    url: '/foundation/iconography',
  },
  {
    title: 'Typography',
    description:
      'It is our system of fonts. each font conveys the sentiment to assist.',
    image: '/static/images/overview/intro-4.png',
    url: '/foundation/typography',
  },
  {
    title: 'Illustrations',
    description: 'It help convey complex ideas in a simple way.',
    image: '/static/images/overview/intro-5.png',
    url: '/foundation/color',
  },
  {
    title: 'Logo’s',
    description:
      'It distinguishes our brand and it creates consistent experience.',
    image: '/static/images/overview/intro-6.png',
    url: '/foundation/color',
  },
]

export default function Page() {
  const {setPageProps} = usePageProps()

  // Overview not using any data of context, so clear it before loading
  useEffect(() => {
    setPageProps?.({})
  }, [])

  return (
    <DocsAppCustomLayout>
      <Box
        css={{
          position: 'relative',
        }}
      >
        <Image
          className='hero-background'
          src='/static/images/overview/banner-overview.png'
          alt='Big hero banner'
          sizes='100vw'
          width={0}
          height={0}
        />
        <Box
          css={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '80px $16',
          }}
        >
          <Box>
            <Typography.Header
              css={{
                color: '#6A1D0C',
                fontSize: '2.875rem',
                lineHeight: '69px',
                marginBottom: '$2',
                '@media screen and (max-width: 768px)': {
                  fontSize: '2rem',
                  lineHeight: '32px',
                },
              }}
            >
              Foundation
            </Typography.Header>
            <Typography.Header
              variant='header4'
              css={{
                fontSize: '1.125rem',
                color: '#6A1D0C',
                fontWeight: '400',
                width: '50%',
                marginBottom: '$2',
                '@media screen and (max-width: 768px)': {
                  width: '100%',
                },
              }}
            >
              Foundations inform the basis of any great user interface, from
              accessibility standards to essential patterns for layout and
              interaction.
            </Typography.Header>
          </Box>
        </Box>
      </Box>
      <Box css={{padding: '$5 $16', width: '100%'}}>
        <Grid spacing='sm' alignItems='center' style={{width: '100%'}}>
          {introduces.map((introduce, index) => (
            <Grid.Item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
              <Link href={introduce.url} style={{textDecoration: 'none'}}>
                <Box
                  css={{
                    backgroundImage: `url('${introduce.image}')`,
                    height: '275px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    boxShadow:
                      '0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px 0px rgba(0, 0, 0, 0.10)',
                    '&:hover': {
                      boxShadow:
                        '0px 4px 8px 0px rgba(0, 0, 0, 0.13), 0px 0.5px 1px 0px rgba(0, 0, 0, 0.10)',
                    },
                  }}
                >
                  <Box
                    css={{
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.75rem',
                      background: 'rgba(0, 0, 0, 0.31)',
                      backdropFilter: 'blur(50px)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                    }}
                  >
                    <Box>
                      <Typography.Header
                        variant='header5'
                        css={{
                          textAlign: 'center',
                          fontSize: '1.25rem',
                          color: 'white',
                          marginBottom: '$2',
                        }}
                      >
                        {introduce.title}
                      </Typography.Header>
                      <Typography.Body
                        variant='body2'
                        css={{
                          textAlign: 'center',
                          fontSize: '0.875rem',
                          color: 'white',
                          fontWeight: '400',
                          marginBottom: '$2',
                        }}
                      >
                        {introduce.description}
                      </Typography.Body>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Grid.Item>
          ))}
        </Grid>
      </Box>
    </DocsAppCustomLayout>
  )
}
