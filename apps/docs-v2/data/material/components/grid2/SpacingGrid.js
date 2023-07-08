import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        pt: 2,
        '&& pre': { margin: 0 },
      }}
    >
      <Grid container justifyContent="center" spacing={spacing}>
        {[0, 1, 2].map((value) => (
          <Grid key={value}>
            <Paper
              sx={{
                height: 140,
                width: 100,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Paper sx={{ p: 2 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">spacing</FormLabel>
          <RadioGroup
            name="spacing"
            aria-label="spacing"
            value={spacing.toString()}
            onChange={handleChange}
            row
          >
            {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Paper>
      <HighlightedCode code={jsx} language="jsx" />
    </Box>
  );
}
