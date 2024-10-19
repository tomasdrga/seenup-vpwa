import { Channel } from 'components/models';
import { users} from 'assets/users';
import { ChannelType } from 'components/models';
import { allMessages } from 'assets/messages';

export const allChannels: Channel[] = [
  { type: ChannelType.public, name: 'General', users: users.value, messages: allMessages.value},
  { type: ChannelType.public, name: 'StandUp', users: users.value, messages: allMessages.value},
  { type: ChannelType.private, name: 'Projects', users: users.value, messages: allMessages.value}
];

