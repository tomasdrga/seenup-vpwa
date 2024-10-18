import { ChannelType, Server } from 'components/models';
import { users } from 'assets/users';

export const servers: Server[] = [
  {
    name: 'SeenUp Server',
    channels: [
      { type: ChannelType.public, name: 'General', users: users.value },
      { type: ChannelType.public, name: 'StandUp', users: users.value },
      { type: ChannelType.private, name: 'Projects', users: users.value }
    ],
  },

  {
    name: 'Server 2',
    channels: [
      { type: ChannelType.public, name: 'General', users: users.value },
      { type: ChannelType.public, name: 'StandUp', users: users.value },
      { type: ChannelType.private, name: 'Projects', users: users.value }
    ],
  }
];
