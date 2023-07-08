import * as React from 'react';
import Modal from '@mui/base/Modal';
import { Box, styled } from '@mui/system';

export default function ServerModal() {
  const rootRef = React.useRef(null);

  return (
    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
      ref={rootRef}
    >
      <StyledModal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        container={() => rootRef.current}
      >
        <Box sx={style}>
          <h2 id="server-modal-title">Server-side modal</h2>
          <span id="server-modal-description">
            If you disable JavaScript, you will still see me.
          </span>
        </Box>
      </StyledModal>
    </Box>
  );
}

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: inherit;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const style = (theme) => ({
  position: 'relative',
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#132F4C' : 'white',
  boxShadow: `0px 2px 8px ${theme.palette.mode === 'dark' ? '#000' : '#BCBCBC'}`,
});
