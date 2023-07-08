import * as React from 'react';
import BrandingProvider from 'docs/src/BrandingProvider';
import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import Avatar from '@mui/joy/Avatar';
import Badge, { BadgeProps } from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';

export default function BadgeAlignment() {
  const [anchorOrigin, setAnchorOrigin] = React.useState<BadgeProps['anchorOrigin']>(
    {
      vertical: 'top',
      horizontal: 'right',
    },
  );
  const jsx = `
<Badge
  anchorOrigin={{
    vertical: '${anchorOrigin?.vertical}',
    horizontal: '${anchorOrigin?.horizontal}',
  }}
>
`;
  return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
      <Box sx={{ p: 5, position: 'relative', display: 'inline-block' }}>
        <Badge anchorOrigin={anchorOrigin} badgeInset="14%">
          <Avatar size="lg" src="/static/images/avatar/2.jpg" />
        </Badge>
        <IconButton
          color="neutral"
          size="sm"
          aria-label="top left"
          onClick={() => setAnchorOrigin({ vertical: 'top', horizontal: 'left' })}
          sx={{ borderRadius: 'xl', position: 'absolute', top: 0, left: 0 }}
        >
          <ArrowDownward sx={{ transform: 'rotate(-45deg)' }} />
        </IconButton>
        <IconButton
          color="neutral"
          size="sm"
          aria-label="top right"
          onClick={() => setAnchorOrigin({ vertical: 'top', horizontal: 'right' })}
          sx={{ borderRadius: 'xl', position: 'absolute', top: 0, right: 0 }}
        >
          <ArrowDownward sx={{ transform: 'rotate(45deg)' }} />
        </IconButton>
        <IconButton
          color="neutral"
          size="sm"
          aria-label="bottom right"
          onClick={() => setAnchorOrigin({ vertical: 'bottom', horizontal: 'left' })}
          sx={{ borderRadius: 'xl', position: 'absolute', bottom: 0, left: 0 }}
        >
          <ArrowUpward sx={{ transform: 'rotate(45deg)' }} />
        </IconButton>
        <IconButton
          color="neutral"
          size="sm"
          aria-label="bottom left"
          onClick={() =>
            setAnchorOrigin({ vertical: 'bottom', horizontal: 'right' })
          }
          sx={{ borderRadius: 'xl', position: 'absolute', bottom: 0, right: 0 }}
        >
          <ArrowUpward sx={{ transform: 'rotate(-45deg)' }} />
        </IconButton>
      </Box>
      <BrandingProvider mode="dark">
        <HighlightedCode
          code={jsx}
          language="jsx"
          sx={{ minWidth: 300, textAlign: 'left' }}
        />
      </BrandingProvider>
    </Box>
  );
}
