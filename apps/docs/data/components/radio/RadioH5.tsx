import {Column, Divider, Radio, Typography} from '@comfortdelgro/react-compass'

const H5RadioData = [
  {label: 'General'},
  {label: 'App issue'},
  {label: 'Booking issue'},
  {label: 'Payment'},
  {label: 'Promo code issue', disabled: true},
  {label: 'Vehicle condition'},
]

export default function RadioH5VariantDocs() {
  return (
    <Column>
      <Radio.Group css={{padding: 0}}>
        {H5RadioData.map(({label, disabled = false}, index) => (
          <Radio
            key={index}
            variant='h5'
            label={label}
            value={index.toString()}
            isDisabled={disabled}
          />
        ))}
      </Radio.Group>

      <Divider css={{marginBlock: '$4'}} />

      <Typography.Header variant='header4'>
        With <code>inputPosition="right"</code>
      </Typography.Header>
      <Radio.Group css={{padding: 0}}>
        {H5RadioData.map(({label, disabled = false}, index) => (
          <Radio
            key={index}
            variant='h5'
            label={label}
            description={
              label +
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam eaque nulla in! Magni fugiat aliquid atque accusantium culpa, eos, nostrum, facilis eius sint incidunt ipsam excepturi praesentium. Natus, iusto?'
            }
            value={index.toString()}
            inputPosition='right'
            isDisabled={disabled}
          />
        ))}
      </Radio.Group>
    </Column>
  )
}
