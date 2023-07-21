import {
  Button,
  Tooltip,
  TooltipTrigger,
  Typography,
} from '@comfortdelgro/react-compass'
import SvgDarkMode from 'components/icons/SvgDarkMode'
import SvgLightMode from 'components/icons/SvgLightMode'

export default function ThemeModeToggle(props: {
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <>
      <TooltipTrigger>
        <Button
          variant='primary'
          onClick={() => {
            props.onChange(!props.checked)
          }}
          css={{
            border: '1px solid white',
            height: 34,
            width: 34,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props.checked ? <SvgDarkMode /> : <SvgLightMode />}
        </Button>
        <Tooltip css={{background: '$gray40'}}>
          <Typography.Label>
            {props.checked ? 'Turn on the light' : 'Turn off the light'}
          </Typography.Label>
        </Tooltip>
      </TooltipTrigger>
    </>
  )
}
