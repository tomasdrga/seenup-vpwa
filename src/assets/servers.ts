import { ChannelType, Server } from 'components/models';
import { users } from 'assets/users';

export const servers: Server[] = [
  {
    id: 1, 
    uuid: 'c8a023ed',
    name: 'SeenUp Server',
    channels: [
      { id: 1, uuid: '62e0d22a', type: ChannelType.public, name: 'General', users: users.value },
      { id: 2, uuid: '4a618c6b', type: ChannelType.public, name: 'StandUp', users: users.value },
      { id: 3, uuid: '00bc77c9', type: ChannelType.private, name: 'Projects', users: users.value }
    ],
  },

  {
    id: 2, 
    uuid: '45ab8530',
    name: 'Server 2',
    channels: [
      { id: 1, uuid: '62e0d22a', type: ChannelType.public, name: 'General', users: users.value },
      { id: 2, uuid: '4a618c6b', type: ChannelType.public, name: 'StandUp', users: users.value },
      { id: 3, uuid: '00bc77c9', type: ChannelType.private, name: 'Projects', users: users.value }
    ],
  }
];

export function addChannelToServer(serverId: number, newChannel: { id: number, uuid: string, type: ChannelType, name: string, users: typeof users.value }) {
  const server = servers.find(s => s.id === serverId);
  if (server) {
    server.channels.push(newChannel);
  } else {
    console.error(`Server with id ${serverId} not found`);
  }
}