import {Box, styled, Typography} from '@comfortdelgro/react-compass'
import * as React from 'react'
import Slide from '../../animation/Slide'

const ratio = 900 / 494

const Image = styled('img', {
  display: 'block',
  width: 450,
  height: 450 / ratio,
  border: '6px solid',
  borderColor: '$gray50',
  borderRadius: '12px',
  objectFit: 'cover',
  boxShadow: '0px 4px 20px rgba(61, 71, 82, 0.25)',
})

const Anchor = styled('a', {
  display: 'inline-block',
  position: 'relative',
  transition: '0.3s',
  '&:hover, &:focus': {
    '& > div': {
      opacity: 1,
    },
  },
})

const linkMapping = {
  minimal: 'https://mui.com/store/items/minimal-dashboard/',
  theFront: 'https://mui.com/store/items/the-front-landing-page/',
  miro: 'https://mui.com/store/items/mira-pro-react-material-admin-dashboard/',
  flexy: 'https://mui.com/store/items/flexy-react-admin-dashboard/',
  berry: 'https://mui.com/store/items/berry-react-material-admin/',
  webbee: 'https://mui.com/store/items/webbee-landing-page/',
}
const brands = Object.keys(linkMapping) as Array<keyof typeof linkMapping>

type TemplateBrand = (typeof brands)[number]

const StoreTemplateLink = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<{
    brand: TemplateBrand
  }>
>(function StoreTemplateLink({brand, ...props}, ref) {
  return (
    <Anchor ref={ref} href={linkMapping[brand]} target='_blank' {...props}>
      {props.children}
      <Box
        css={{
          transition: '0.3s',
          borderRadius: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
          top: 0,
          left: 0,
          bgcolor: '#3468bfba',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography.Link css={{textAlign: 'center', color: 'white'}}>
          Go to link
        </Typography.Link>
      </Box>
    </Anchor>
  )
})

const StoreTemplateImage = React.forwardRef<
  HTMLImageElement,
  {brand: TemplateBrand} & Omit<JSX.IntrinsicElements['img'], 'ref'>
>(function StoreTemplateImage({brand, ...props}, ref) {
  return (
    <Image
      ref={ref}
      src={`/static/branding/store-templates/template-${
        Object.keys(linkMapping).indexOf(brand) + 1
      }light.jpg`}
      alt=''
      {...props}
    />
  )
})

export function PrefetchStoreTemplateImages() {
  function makeImg(mode: string, num: number) {
    return {
      loading: 'lazy' as const,
      width: '900',
      height: '494',
      src: `/static/branding/store-templates/template-${num}${mode}.jpg`,
    }
  }
  return (
    <Box
      css={{
        width: 0,
        height: 0,
        position: 'fixed',
        zIndex: -1,
        top: -1000,
        '& > img': {
          position: 'absolute',
        },
      }}
    >
      {[...Array(6)].map((_, index) => (
        <React.Fragment key={index}>
          <img alt='' {...makeImg('light', index + 1)} />
          <img alt='' {...makeImg('dark', index + 1)} />
        </React.Fragment>
      ))}
    </Box>
  )
}

export function StoreTemplatesSet1({disableLink}: {disableLink?: boolean}) {
  function renderTemplate(brand: TemplateBrand) {
    if (disableLink) {
      return <StoreTemplateImage brand={brand} />
    }
    return (
      <StoreTemplateLink brand={brand}>
        <StoreTemplateImage brand={brand} />
      </StoreTemplateLink>
    )
  }
  return (
    <Slide animationName='template-slidedown'>
      <Box>{renderTemplate(brands[4])}</Box>
      <Box>{renderTemplate(brands[2])}</Box>
      <Box>{renderTemplate(brands[0])}</Box>
    </Slide>
  )
}

export function StoreTemplatesSet2({
  disableLink,
}: {
  disableLink?: boolean
  keyframes?: string
}) {
  function renderTemplate(brand: TemplateBrand) {
    if (disableLink) {
      return <StoreTemplateImage brand={brand} />
    }
    return (
      <StoreTemplateLink brand={brand}>
        <StoreTemplateImage brand={brand} />
      </StoreTemplateLink>
    )
  }
  return (
    <Slide animationName='template-slideup'>
      <Box>{renderTemplate(brands[1])}</Box>
      <Box>{renderTemplate(brands[3])}</Box>
      <Box>{renderTemplate(brands[5])}</Box>
    </Slide>
  )
}

export default function StoreTemplatesBanner() {
  return (
    <Box
      css={{
        mx: 0,
        my: 0,
        height: 500,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        css={{
          height: '100%',
          position: 'relative',
          perspective: '1000px',
        }}
      >
        <Box
          css={{
            left: '40%',
            position: 'absolute',
            zIndex: -1,
            display: 'flex',
            transform:
              'translateX(-40%) rotateZ(-30deg) rotateX(8deg) rotateY(8deg)',
            transformOrigin: 'center center',
          }}
        >
          <StoreTemplatesSet1 />
          <StoreTemplatesSet2 />
        </Box>
      </Box>
    </Box>
  )
}
