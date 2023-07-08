import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import {alpha} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import {useTranslate} from 'utils/i18n'

const sourcePrefix = `${process.env.SOURCE_CODE_REPO}/tree/v${process.env.LIB_VERSION}`

function layouts(t) {
  return [
    {
      title: t('dashboardTitle'),
      description: t('dashboardDescr'),
      src: '/static/images/templates/dashboard.png',
      href: '/material-ui/getting-started/templates/dashboard/',
      source: `${sourcePrefix}/docs/data/getting-started/templates/dashboard`,
    },
    {
      title: t('signInTitle'),
      description: t('signInDescr'),
      src: '/static/images/templates/sign-in.png',
      href: '/material-ui/getting-started/templates/sign-in/',
      source: `${sourcePrefix}/docs/data/getting-started/templates/sign-in`,
    },
    {
      title: t('signInSideTitle'),
      description: t('signInSideDescr'),
      src: '/static/images/templates/sign-in-side.png',
      href: '/material-ui/getting-started/templates/sign-in-side/',
      source: `${sourcePrefix}/docs/data/getting-started/templates/sign-in-side`,
    },
    {
      title: t('signUpTitle'),
      description: t('signUpDescr'),
      src: '/static/images/templates/sign-up.png',
      href: '/material-ui/getting-started/templates/sign-up/',
      source: `${sourcePrefix}/docs/data/getting-started/templates/sign-up`,
    },
    {
      title: t('blogTitle'),
      description: t('blogDescr'),
      src: '/static/images/templates/blog.png',
      href: '/material-ui/getting-started/templates/blog/',
      source: `${sourcePrefix}/docs/data/getting-started/templates/blog`,
    },
    {
      title: t('checkoutTitle'),
      description: t('checkoutDescr'),
      src: '/static/images/templates/checkout.png',
      href: '/material-ui/getting-started/templates/checkout/',
      source: `${sourcePrefix}/docs/data/getting-started/templates/checkout`,
    },
    {
      title: t('albumTitle'),
      description: t('albumDescr'),
      src: '/static/images/templates/album.png',
      href: '/material-ui/getting-started/templates/album/',
      source: `${sourcePrefix}/docs/data/getting-started/templates/album`,
    },
    {
      title: t('stickyFooterTitle'),
      description: t('stickyFooterDescr'),
      src: '/static/images/templates/sticky-footer.png',
      href: '/material-ui/getting-started/templates/sticky-footer/',
      source: `${sourcePrefix}/docs/data/getting-started/templates/sticky-footer`,
    },
  ]
}

function Templates() {
  const t = useTranslate()

  return (
    <Grid container spacing={2} sx={{pt: 2, pb: 4}}>
      {layouts(t).map((layout) => (
        <Grid item xs={12} sm={4} sx={{flexGrow: 1}} key={layout.title}>
          <Card
            sx={(theme) => ({
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              px: 2,
              pt: 2,
              pb: 1,
              gap: 1.5,
              borderRadius: 1,
              backgroundColor: `${alpha(theme.palette.grey[50], 0.4)}`,
              borderColor: 'divider',
            })}
            variant='outlined'
          >
            <CardMedia
              component='a'
              href={layout.href}
              image={layout.src}
              title={layout.title}
              rel='nofollow'
              target='_blank'
              sx={(theme) => ({
                height: 0,
                pt: '65%',
                borderRadius: 0.5,
                bgcolor: 'currentColor',
                border: '1px solid',
                borderColor: 'grey.100',
                color: 'grey.100',
              })}
            />
            <CardContent sx={{flexGrow: 1, p: 0}}>
              <Typography
                component='h2'
                variant='h6'
                fontWeight={600}
                gutterBottom
              >
                {layout.title}
              </Typography>
              <Typography component='p' variant='body2' color='text.secondary'>
                {layout.description}
              </Typography>
            </CardContent>
            <CardActions sx={{p: 0, ml: -1}}>
              <Button component='a' href={layout.source} size='small'>
                {t('sourceCode')}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Templates
