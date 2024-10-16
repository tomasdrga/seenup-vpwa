export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export enum MessageType {
  system = 'system',
  user = 'user'
}
export enum ChannelType {
  public = 'public',
  private = 'private'
}

export interface Message {
  id: number
  text: string
  userName: string
  profilePic: string
  timestamp: Date
  type: MessageType
}

export interface User {
  userName: string
  profilePic: string
}

export interface Command {
  name: string;
  description: string;
}

export interface Channel {
  type: ChannelType,
  name: string,
  users: User[]
}

export interface Server {
  name: string;
  channels: Channel[];
}
