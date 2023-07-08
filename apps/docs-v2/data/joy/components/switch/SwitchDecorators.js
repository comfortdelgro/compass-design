import * as React from 'react';
import Switch from '@mui/joy/Switch';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';

export default function SwitchDecorators() {
  const [dark, setDark] = React.useState(false);
  return (
    <Switch
      color={dark ? 'primary' : 'danger'}
      slotProps={{ input: { 'aria-label': 'dark mode' } }}
      startDecorator={
        <LocalFireDepartmentRoundedIcon
          sx={{ color: dark ? 'text.tertiary' : 'danger.600' }}
        />
      }
      endDecorator={
        <WavesRoundedIcon sx={{ color: dark ? 'primary.500' : 'text.tertiary' }} />
      }
      checked={dark}
      onChange={(event) => setDark(event.target.checked)}
    />
  );
}
