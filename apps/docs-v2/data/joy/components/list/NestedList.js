import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Switch from '@mui/joy/Switch';

export default function NestedList() {
  const [small, setSmall] = React.useState(false);
  return (
    <Box>
      <Switch
        size="sm"
        checked={small}
        onChange={(event) => setSmall(event.target.checked)}
        endDecorator={
          <Typography level="body2">Toggle small nested list</Typography>
        }
        sx={{ mb: 2 }}
      />
      <List
        variant="outlined"
        size={small ? 'sm' : undefined}
        sx={{
          width: 200,
          bgcolor: 'background.body',
          borderRadius: 'sm',
          boxShadow: 'sm',
        }}
      >
        <ListItem nested>
          <ListSubheader>Category 1</ListSubheader>
          <List>
            <ListItem>
              <ListItemButton>Subitem 1</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Subitem 2</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem nested>
          <ListSubheader>Category 2</ListSubheader>
          <List>
            <ListItem>
              <ListItemButton>Subitem 1</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Subitem 2</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}
