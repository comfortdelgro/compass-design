import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Typography from '@mui/joy/Typography';

export default function ButtonColors() {
  const [variant, setVariant] = React.useState('solid');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1,
        }}
      >
        <Button size="md" variant={variant} color="primary">
          Primary
        </Button>
        <Button size="md" variant={variant} color="neutral">
          Neutral
        </Button>
        <Button size="md" variant={variant} color="danger">
          Danger
        </Button>
        <Button size="md" variant={variant} color="info">
          Info
        </Button>
        <Button size="md" variant={variant} color="success">
          Success
        </Button>
        <Button size="md" variant={variant} color="warning">
          Warning
        </Button>
      </Box>
      <Sheet
        sx={{
          background: 'transparent',
          pl: 4,
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography
          level="body2"
          fontWeight="xl"
          id="variant-label"
          textColor="text.primary"
          mb={1}
        >
          Variant:
        </Typography>
        <RadioGroup
          size="sm"
          aria-labelledby="variant-label"
          name="variant"
          value={variant}
          onChange={(event) => setVariant(event.target.value)}
        >
          <Radio label="Solid" value="solid" />
          <Radio label="Soft" value="soft" />
          <Radio label="Outlined" value="outlined" />
          <Radio label="Plain" value="plain" />
        </RadioGroup>
      </Sheet>
    </Box>
  );
}
