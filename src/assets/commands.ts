import { Command } from 'src/components/models';

export const commands: Command[] = [
  { name: '/invite nickName', description: 'Invite a user to the channel' },
  { name: '/revoke nickName', description: 'Remove a user from the channel' },
  { name: '/join channelName', description: 'Join a channel (if the channel doesn\'t exist, it is automatically created)' },
  { name: '/kick nickName', description: 'Remove a user from the channel'},
  { name: '/quit command', description: 'Close the channel'},
  { name: '/cancel', description: 'Cancel subscription from the channel'},
  { name: '/list', description: 'View a list of channel members'},
  { name: '@nickname', description: 'Address message to specific user '}
];
