import {Box, Grid, Typography} from '@comfortdelgro/react-compass'
import DocsAppCustomLayout from 'components/layouts/DocsAppCustomLayout'
import {usePageProps} from 'contexts/PageProps'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect} from 'react'
import {getStaticPath} from 'utils'
import styles from './styles/overview.module.css'

const introduces = [
  {
    title: 'Colors',
    description:
      'It distinguishes our brand and it creates consistent experience.',
    image: getStaticPath('/static/images/overview/intro-1.png'),
    url: '/foundation/colors',
  },
  {
    title: 'Elevations',
    description:
      'Elevations are layered surface that forms the foundation of UI.',
    image: getStaticPath('/static/images/overview/intro-2.png'),
    url: '/getting-started/colors',
  },
  {
    title: 'Iconography',
    description:
      'Icons are visual representation of commands or common actions.',
    image: getStaticPath('/static/images/overview/intro-3.png'),
    url: '/foundation/iconography',
  },
  {
    title: 'Typography',
    description:
      'It is our system of fonts. each font conveys the sentiment to assist.',
    image: getStaticPath('/static/images/overview/intro-4.png'),
    url: '/foundation/typography',
  },
  {
    title: 'Illustrations',
    description: 'It help convey complex ideas in a simple way.',
    image: getStaticPath('/static/images/overview/intro-5.png'),
    url: '/foundation/colors',
  },
  {
    title: 'Logo’s',
    description:
      'It distinguishes our brand and it creates consistent experience.',
    image: getStaticPath('/static/images/overview/intro-6.png'),
    url: '/foundation/colors',
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
        style={{
          position: 'relative',
        }}
      >
        <Image
          className='hero-background'
          src={getStaticPath('/static/images/overview/banner-overview.png')}
          alt='Big hero banner'
          sizes='100vw'
          width={0}
          height={0}
        />
        <Box
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '80px var(--cdg-spacing-6)',
          }}
        >
          <Box>
            <Typography.Header className={styles.headerTypography}>
              Foundation
            </Typography.Header>
            <Typography.Header
              variant='header4'
              className={styles.header4Typography}
            >
              Foundations inform the basis of any great user interface, from
              accessibility standards to essential patterns for layout and
              interaction.
            </Typography.Header>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          padding: 'var(--cdg-spacing-5) var(--cdg-spacing-16)',
          width: '100%',
        }}
      >
        <Grid spacing='sm' alignItems='center' style={{width: '100%'}}>
          {introduces.map((introduce, index) => (
            <Grid.Item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              key={index}
              css={{
                flexGrow: 1,
                minWidth: 0,
              }}
            >
              <Link href={introduce.url} style={{textDecoration: 'none'}}>
                <Box
                  style={{backgroundImage: `url('${introduce.image}')`}}
                  className={styles.box}
                >
                  <Box
                    style={{
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.75rem',
                      background: 'rgba(0, 0, 0, 0.31)',
                      backdropFilter: 'blur(50px)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      height: '40%',
                    }}
                  >
                    <Box
                      css={{
                        flexGrow: 1,
                        minWidth: 0,
                      }}
                    >
                      <Typography.Header
                        variant='header5'
                        style={{
                          textAlign: 'center',
                          fontSize: '1.25rem',
                          color: 'white',
                          marginBottom: 'var(--cdg-spacing-2)',
                        }}
                      >
                        {introduce.title}
                      </Typography.Header>
                      <Typography.Body
                        variant='body2'
                        style={{
                          textAlign: 'center',
                          fontSize: '0.875rem',
                          color: 'white',
                          fontWeight: '400',
                          marginBottom: 'var(--cdg-spacing-2)',
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
