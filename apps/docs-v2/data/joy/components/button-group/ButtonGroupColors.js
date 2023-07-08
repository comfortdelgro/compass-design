import * as React from 'react';

import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';

export default function ButtonGroupColors() {
  const [variant, setVariant] = React.useState('outlined');
  const createOnClick = (value) => () => {
    setVariant(value);
  };
  return (
    <Stack spacing={1} alignItems="center">
      <ButtonGroup variant={variant} size="sm" aria-label="neutral button group">
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="primary"
        aria-label="primary button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="info"
        aria-label="info button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="danger"
        aria-label="danger button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="success"
        aria-label="success button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
      <ButtonGroup
        variant={variant}
        size="sm"
        color="warning"
        aria-label="warning button group"
      >
        <Button onClick={createOnClick('outlined')}>Outlined</Button>
        <Button onClick={createOnClick('plain')}>Plain</Button>
        <Button onClick={createOnClick('soft')}>Soft</Button>
        <Button onClick={createOnClick('solid')}>Solid</Button>
      </ButtonGroup>
    </Stack>
  );
}
