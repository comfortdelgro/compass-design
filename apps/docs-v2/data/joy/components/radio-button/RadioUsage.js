import * as React from 'react';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';

export default function RadioUsage() {
  return (
    <JoyUsageDemo
      componentName="Radio"
      data={[
        {
          propName: 'variant',
          knob: 'radio',
          defaultValue: 'soft',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },
        {
          propName: 'color',
          knob: 'color',
          defaultValue: 'primary',
        },
        {
          propName: 'size',
          knob: 'radio',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          propName: 'orientation',
          knob: 'radio',
          options: ['vertical', 'horizontal'],
          defaultValue: 'vertical',
        },
      ]}
      renderDemo={({ orientation, ...props }) => (
        <FormControl>
          <FormLabel>Pizza crust</FormLabel>
          <RadioGroup
            orientation={orientation}
            defaultValue="1"
            name="radio-button-usage"
            sx={{ mt: 1 }}
          >
            <Radio label="Regular crust" value="1" {...props} />
            <Radio label="Deep dish" value="2" {...props} />
            <Radio label="Thin crust" value="3" {...props} disabled />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
