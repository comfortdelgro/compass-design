/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import useClipboardCopy from 'docs/src/modules/utils/useClipboardCopy';
import { styled, extendTheme, Shadow } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import LightMode from '@mui/icons-material/LightModeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';
import Check from '@mui/icons-material/CheckCircle';

const Table = styled('table')(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.vars.palette.divider,
  borderRadius: theme.vars.radius.md,
  borderCollapse: 'separate',
  borderSpacing: 0,
  width: '100%',
  overflowY: 'scroll',
  th: {
    textAlign: 'left',
    padding: 12,
    position: 'sticky',
    top: 0,
    zIndex: 1,
    ...theme.variants.soft.neutral,
  },
  td: {
    verticalAlign: 'top',
    padding: '8px 12px',
  },
  tr: {
    '&:hover': {
      backgroundColor: theme.vars.palette.background.level1,
    },
    '&:first-of-type': {
      '& td': { paddingTop: 6 },
    },
  },
}));
const defaultTheme = extendTheme();

export default function ShadowThemeViewer() {
  const { copy, isCopied } = useClipboardCopy();
  const tokens = Object.keys(defaultTheme.shadow) as Array<keyof Shadow>;
  const formatShadowLayers = (shadow: string) =>
    React.Children.toArray(
      shadow
        .split(', ')
        .reduce<Array<React.ReactNode>>(
          (result, curr, index, array) =>
            array.length - 1 !== index
              ? [...result, `${curr},`, <br />]
              : [...result, curr],
          [],
        ),
    );
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      <Sheet
        variant="solid"
        color="success"
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: `translateX(-50%) translateY(${
            isCopied ? '-0.5rem' : 'calc(100% + 0.5rem)'
          })`,
          transition: '0.3s',
          p: 0.5,
          px: 0.75,
          borderRadius: 'xs',
          boxShadow: 'sm',
          zIndex: 1,
        }}
      >
        <Typography level="body3" textColor="inherit" startDecorator={<Check />}>
          Copied
        </Typography>
      </Sheet>
      <Table>
        <thead>
          <tr>
            <th>
              <Typography fontSize="sm">Token</Typography>
            </th>
            <th>
              <Typography fontSize="sm">Value</Typography>
            </th>
            <th>
              <Typography fontSize="sm" startDecorator={<LightMode />}>
                Light
              </Typography>
            </th>
            <th>
              <Typography fontSize="sm" startDecorator={<DarkMode />}>
                Dark
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token}>
              <td>
                <Typography fontSize="sm">{token}</Typography>
              </td>
              <td>
                <Link
                  component="button"
                  color="neutral"
                  textColor="inherit"
                  textAlign="left"
                  fontSize="xs"
                  fontFamily="code"
                  letterSpacing="sm"
                  onClick={() => copy(token)}
                >
                  {formatShadowLayers(defaultTheme.shadow[token])}
                </Link>
              </td>
              <td data-joy-color-scheme="light">
                <Sheet
                  variant="outlined"
                  sx={{
                    width: 64,
                    height: 64,
                    boxShadow: (theme) => theme.shadow[token],
                    borderRadius: 'xs',
                    mr: 2,
                  }}
                />
              </td>
              <td data-joy-color-scheme="dark">
                <Sheet
                  variant="outlined"
                  sx={{
                    width: 64,
                    height: 64,
                    boxShadow: (theme) => theme.shadow[token],
                    borderRadius: 'xs',
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}
