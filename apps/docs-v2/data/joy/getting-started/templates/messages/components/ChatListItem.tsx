import * as React from 'react';
import Box from '@mui/joy/Box';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/joy/ListItemButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import AvatarWithStatus from './AvatarWithStatus';
import { ChatProps, MessageProps, UserProps } from '../types';
import { toggleMessagesPane } from '../utils';

type ChatListItemProps = ListItemButtonProps & {
  id: string;
  unread?: boolean;
  sender: UserProps;
  messages: MessageProps[];
  selectedChatId?: string;
  setSelectedChat: (chat: ChatProps) => void;
};

export default function ChatListItem({
  id,
  sender,
  messages,
  selectedChatId,
  setSelectedChat,
}: ChatListItemProps) {
  const selected = selectedChatId === id;
  return (
    <React.Fragment>
      <ListItem>
        <ListItemButton
          onClick={() => {
            toggleMessagesPane();
            setSelectedChat({ id, sender, messages });
          }}
          selected={selected}
          variant={selected ? 'soft' : 'plain'}
          color="neutral"
          sx={{
            flexDirection: 'column',
            alignItems: 'initial',
            gap: 1,
            fontWeight: 'normal',
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <AvatarWithStatus online={sender.online} src={sender.avatar} />
            <Box sx={{ flex: 1 }}>
              <Typography fontSize="sm" fontWeight="lg">
                {sender.name}
              </Typography>
              <Typography level="body2">{sender.username}</Typography>
            </Box>
            <Box sx={{ lineHeight: 1, textAlign: 'right' }}>
              <Typography level="body2" display={{ xs: 'none', md: 'block' }} noWrap>
                5 mins ago
              </Typography>
              {messages[0].unread && (
                <CircleIcon sx={{ fontSize: 10 }} color="primary" />
              )}
            </Box>
          </Stack>
          <Typography
            level="body2"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {messages[0].content}
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListDivider sx={{ margin: 0 }} />
    </React.Fragment>
  );
}
