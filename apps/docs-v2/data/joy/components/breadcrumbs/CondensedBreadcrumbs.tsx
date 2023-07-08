import FolderIcon from '@mui/icons-material/Folder';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

export default function CondensedBreadcrumbs() {
  const [condensed, setCondensed] = React.useState<boolean>(true);
  const [navigationItems, setNavigationItems] = React.useState<string[]>([
    'Programs',
    'Files',
    'Services',
  ]);

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumbs">
      {condensed ? (
        <Button
          size="sm"
          onClick={() => {
            setNavigationItems((prev) => ['Root', 'Home', ...prev]);
            setCondensed(false);
          }}
          variant="plain"
          color="info"
        >
          •••
        </Button>
      ) : null}
      {navigationItems.map((item: string) => (
        <Link
          // The `preventDefault` is for demonstration purposes, generally, you don't need it in your application
          onClick={(event) => event.preventDefault()}
          underline="hover"
          color="info"
          href="/"
          fontSize="inherit"
        >
          <FolderIcon sx={{ mr: 0.5 }} fontSize="inherit" color="inherit" />
          {item}
        </Link>
      ))}
      <Typography fontSize="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
        <FolderIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        bablo.txt
      </Typography>
    </Breadcrumbs>
  );
}
