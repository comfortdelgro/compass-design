import * as React from 'react';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

export default function GroupMenu() {
  const SIZES = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
  const [size, setSize] = React.useState('Medium');
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        ref={buttonRef}
        id="group-demo-button"
        aria-controls={'group-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(!open);
        }}
        endDecorator={<ArrowDropDown />}
      >
        Size
      </Button>
      <Menu
        id="group-menu"
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
        aria-labelledby="group-demo-button"
        sx={{ minWidth: 160, '--ListItemDecorator-size': '24px' }}
      >
        <MenuItem
          onClick={() => {
            const nextIndex = SIZES.indexOf(size) - 1;
            const value = nextIndex < 0 ? SIZES[SIZES.length - 1] : SIZES[nextIndex];
            setSize(value);
            handleClose();
          }}
        >
          Smaller
        </MenuItem>
        <MenuItem
          onClick={() => {
            const nextIndex = SIZES.indexOf(size) + 1;
            const value = nextIndex > SIZES.length - 1 ? SIZES[0] : SIZES[nextIndex];
            setSize(value);
            handleClose();
          }}
        >
          Larger
        </MenuItem>
        <ListDivider />
        <ListItem nested>
          <List aria-label="Font sizes">
            {SIZES.map((item: string) => (
              <MenuItem
                key={item}
                role="menuitemradio"
                aria-checked={item === size ? 'true' : 'false'}
                onClick={() => {
                  setSize(item);
                  handleClose();
                }}
              >
                <ListItemDecorator>
                  {item === size && <ArrowRight />}
                </ListItemDecorator>{' '}
                {item}
              </MenuItem>
            ))}
          </List>
        </ListItem>
      </Menu>
    </div>
  );
}
