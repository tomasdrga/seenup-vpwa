import { Channel } from 'components/models';
import { users } from 'assets/users';
import { ChannelType } from 'components/models';

export const allChannels: Channel[] = [
  { type: ChannelType.public, name: 'General', users: users.value },
  { type: ChannelType.public, name: 'StandUp', users: users.value },
  { type: ChannelType.private, name: 'Projects', users: users.value }
];

