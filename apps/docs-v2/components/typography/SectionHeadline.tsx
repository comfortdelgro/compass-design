import Typography from '@mui/material/Typography'
import * as React from 'react'

interface SectionHeadlineProps {
  description?: React.ReactNode
  id?: string
  overline: React.ReactNode
  title: React.ReactNode
}

export default function SectionHeadline(props: SectionHeadlineProps) {
  const {description, id, overline, title} = props
  return (
    <React.Fragment>
      <Typography id={id} component='h2' fontWeight='bold' variant='body2'>
        {overline}
      </Typography>
      {typeof title === 'string' ? (
        <Typography
          variant='h2'
          sx={(theme) => ({
            color: 'primaryDark.900',
          })}
        >
          {title}
        </Typography>
      ) : (
        title
      )}
      {description && (
        <Typography
          sx={(theme) => ({
            mt: 1,
            mb: 2,
            maxWidth: 450,
            color: 'grey.800',
          })}
        >
          {description}
        </Typography>
      )}
    </React.Fragment>
  )
}
