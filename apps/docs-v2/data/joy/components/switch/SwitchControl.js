import * as React from 'react';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Switch from '@mui/joy/Switch';

export default function SwitchControl() {
  const [checked, setChecked] = React.useState(false);
  return (
    <FormControl
      orientation="horizontal"
      sx={{ width: 300, justifyContent: 'space-between' }}
    >
      <Box>
        <FormLabel>Show captions</FormLabel>
        <FormHelperText sx={{ mt: 0 }}>All languages available.</FormHelperText>
      </Box>
      <Switch
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        color={checked ? 'success' : 'neutral'}
        variant="outlined"
        endDecorator={checked ? 'On' : 'Off'}
        slotProps={{
          endDecorator: {
            sx: {
              minWidth: 24,
            },
          },
        }}
      />
    </FormControl>
  );
}
