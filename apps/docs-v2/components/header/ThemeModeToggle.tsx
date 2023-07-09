import Star from '@comfortdelgro/compass-icons/react/filled/star-filled'
import Verified from '@comfortdelgro/compass-icons/react/verified'
import {Button, Tooltip, TooltipTrigger} from '@comfortdelgro/react-compass'

export default function ThemeModeToggle(props: {
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <>
      <TooltipTrigger>
        <Button
          variant='primary'
          leftIcon={props.checked ? <Verified /> : <Star />}
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
            '.left': {
              marginRight: '0 !important',
            },
          }}
        ></Button>
        <Tooltip>
          {props.checked ? 'Turn on the light' : 'Turn off the light'}
        </Tooltip>
      </TooltipTrigger>
    </>
  )
}
