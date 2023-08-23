import {Chip, Column, Typography} from '@comfortdelgro/react-compass'

const Default: React.FC = () => {
  return (
    <Column>
      <Typography.Label>Basic Chip</Typography.Label>
      <Chip>Basic Chip</Chip>
      <Typography.Label>Close button</Typography.Label>
      <Chip
        hasCloseButton
        onCloseClick={() => {
          console.log('Close button click')
        }}
      >
        Close button
      </Chip>
      <Typography.Label>Errored Chip</Typography.Label>
      <Chip hasCloseButton isErrored>
        Errored Chip
      </Chip>
    </Column>
  )
}

export default Default
