import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator, {
  listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import InboxIcon from '@mui/icons-material/Inbox';
import Label from '@mui/icons-material/Label';
import People from '@mui/icons-material/People';
import Info from '@mui/icons-material/Info';
import Star from '@mui/icons-material/Star';

export default function ExampleGmailList() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box sx={{ py: 2, pr: 2, width: 320 }}>
      <List
        aria-label="Sidebar"
        sx={{
          // ...applyRadiusOnEdges({ target: 'deepest' | 'nested' }),
          '--ListItem-paddingLeft': '0px',
          '--ListItemDecorator-size': '64px',
          '--ListItemDecorator-color': (theme) => theme.vars.palette.text.secondary,
          '--ListItem-minHeight': '32px',
          '--List-nestedInsetStart': '13px',
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: 'flex-end',
            pr: '18px',
          },
          '& [role="button"]': {
            borderRadius: '0 20px 20px 0',
          },
        }}
      >
        <ListItem>
          <ListItemButton
            selected={index === 0}
            variant={index === 0 ? 'soft' : 'plain'}
            color={index === 0 ? 'danger' : undefined}
            onClick={() => setIndex(0)}
          >
            <ListItemDecorator>
              <InboxIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Inbox</ListItemContent>
            <Typography level="body2" sx={{ fontWeight: 'bold', color: 'inherit' }}>
              1,950
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 1}
            variant={index === 1 ? 'soft' : 'plain'}
            color={index === 1 ? 'neutral' : undefined}
            onClick={() => setIndex(1)}
          >
            <ListItemDecorator>
              <Star fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Starred</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem nested>
          <ListItemButton
            selected={index === 2}
            variant={index === 2 ? 'soft' : 'plain'}
            color={index === 2 ? 'info' : undefined}
            onClick={() => setIndex(2)}
          >
            <ListItemDecorator>
              <ArrowDropDown fontSize="lg" />
              <Label fontSize="lg" />
            </ListItemDecorator>
            Categories
          </ListItemButton>
          <List>
            <ListItem>
              <ListItemButton
                selected={index === 3}
                variant={index === 3 ? 'soft' : 'plain'}
                color={index === 3 ? 'primary' : undefined}
                onClick={() => setIndex(3)}
              >
                <ListItemDecorator>
                  <People fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Social</ListItemContent>
                <Typography level="body2">4,320</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={index === 4}
                variant={index === 4 ? 'soft' : 'plain'}
                color={index === 4 ? 'warning' : undefined}
                onClick={() => setIndex(4)}
              >
                <ListItemDecorator>
                  <Info fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Updates</ListItemContent>
                <Typography level="body2">22,252</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}
