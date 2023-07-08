import * as React from 'react';
import Popper from '@mui/base/Popper';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';

const Popup = styled(Popper)({
  zIndex: 1000,
});

export default function MenuListComposition() {
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      setOpen(false);
    } else if (event.key === 'Escape') {
      if (buttonRef.current) {
        buttonRef.current?.focus();
      }
      setOpen(false);
    }
  };

  return (
    <div>
      <Button
        ref={buttonRef}
        id="composition-button"
        aria-controls={'composition-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(!open);
        }}
        sx={{ borderRadius: 0 }}
      >
        Open menu
      </Button>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={buttonRef.current}
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: 'md', bgcolor: 'background.body' }}
          >
            <MenuItem onClick={handleClose}>Single</MenuItem>
            <MenuItem onClick={handleClose}>1.15</MenuItem>
            <MenuItem onClick={handleClose}>Double</MenuItem>
            <MenuItem onClick={handleClose}>Custom: 1.2</MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}
