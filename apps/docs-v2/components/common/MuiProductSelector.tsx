import Box, {BoxProps} from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import {alpha} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ROUTES from 'docs/src/route'
import Link from 'next/link'
import * as React from 'react'
import PageContext from './PageContext'

interface ProductSubMenuProp extends BoxProps {
  icon: React.ReactNode
  name: React.ReactNode
  description: React.ReactNode
  chip?: React.ReactNode
}

function ProductSubMenu(props: ProductSubMenuProp) {
  const {icon, name, description, chip, sx = [], ...other} = props
  return (
    <Box
      {...other}
      sx={[
        {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={[
          (theme) => ({
            '& circle': {
              fill: (theme.vars || theme).palette.grey[100],
            },
          }),
          (theme) =>
            theme.applyDarkStyles({
              '& circle': {
                fill: (theme.vars || theme).palette.primaryDark[700],
              },
            }),
        ]}
      >
        {icon}
      </Box>
      <Box sx={{flexGrow: 1}}>
        <Typography color='text.primary' variant='body2' fontWeight='700'>
          {name}
        </Typography>
        <Typography color='text.secondary' variant='body2'>
          {description}
        </Typography>
      </Box>
      {chip}
    </Box>
  )
}

const products = [
  {
    name: 'Material UI',
    href: ROUTES.materialDocs,
    id: 'material-ui',
  },
]

export default function MuiProductSelector() {
  const pageContext = React.useContext(PageContext)

  return (
    <React.Fragment>
      <Box
        component='li'
        role='none'
        sx={(theme) => ({
          p: 2,
          pr: 3,
          borderBottom: '1px solid',
          borderColor: 'grey.100',
          ...theme.applyDarkStyles({
            borderColor: alpha(theme.palette.primary[100], 0.08),
          }),
        })}
      >
        <Box sx={{ml: '36px', pl: 2, pt: 1.5, position: 'relative'}}>
          <Stack
            direction={{xs: 'column', sm: 'row'}}
            alignItems='flex-start'
            spacing={1}
            sx={{
              '& > .MuiChip-root': {
                position: 'initial',
                '&:hover': {
                  '& .product-description': {
                    opacity: 1,
                  },
                },
              },
            }}
          >
            {products.map((product) => (
              <Chip
                key={product.name}
                color={
                  pageContext.productId === product.id ? 'default' : undefined
                }
                variant={
                  pageContext.productId === product.id ? 'filled' : 'outlined'
                }
                component={Link}
                href={product.href}
                label={product.name}
                clickable
                size='small'
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  )
}
