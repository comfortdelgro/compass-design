import GitHubIcon from '@mui/icons-material/GitHub'
import Button from '@mui/material/Button'

export default function EditPage(props: {sourceLocation: string}) {
  const {sourceLocation} = props
  return (
    <Button
      component='a'
      href={`https://github.com/comfortdelgro/compass-design/edit/master${sourceLocation}`}
      target='_blank'
      rel='noopener nofollow'
      size='small'
      startIcon={<GitHubIcon />}
      sx={(theme) => ({
        ml: {md: -1, lg: 0},
        mb: 2,
        fontWeight: 500,
        fontSize: 12.5,
        color: 'primary.600',
        '& svg': {
          width: 14,
          height: 14,
        },
      })}
    >
      Edit page
    </Button>
  )
}
