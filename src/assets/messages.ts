import { ref } from 'vue';
import { Message, MessageType} from 'components/models';
import { matej, tomas } from 'assets/users';

export const allMessages = ref<Message[]>([
  { id: 1, text: 'Caukoo', user: matej, timestamp: new Date('2024-02-01T10:00:00'), type: MessageType.user },
  { id: 2, text: 'Serusky', user:tomas, timestamp: new Date('2024-02-01T10:02:00'), type: MessageType.user },
  { id: 3, text: '@Tomas Kedy ideme lietat', user: matej,timestamp: new Date('2024-02-01T10:04:00'), type: MessageType.user },
  { id: 4, text: '@Matej Neviem musim robit wtech',user: tomas, timestamp: new Date('2024-02-01T10:08:00'), type: MessageType.user },
  { id: 5, text: 'Tryhardiiiiik', user: matej, timestamp: new Date('2024-02-03T10:10:00'), type: MessageType.user },
  { id: 6, text: 'Drz hubu', user: tomas, timestamp: new Date('2024-02-03T10:20:00'), type: MessageType.user },
  { id: 7, text: 'Nechce sa ti?', user: matej,timestamp: new Date('2024-02-03T10:30:00'), type: MessageType.user },
  { id: 8, text: 'Fakt nemám cas', user: tomas, timestamp: new Date('2024-02-03T10:31:00'), type: MessageType.user },
  { id: 9, text: 'Dobre, nechajme to na budúci týždeň', user: matej,timestamp: new Date('2024-02-03T10:34:00'), type: MessageType.user },
  { id: 10, text: 'Ok, uvidíme', user: tomas, timestamp: new Date('2024-02-03T10:40:00'), type: MessageType.user },
  { id: 11, text: 'Ale ak budes mat cas skôr, daj vediet.', user: matej,timestamp: new Date('2024-02-03T10:45:00'), type: MessageType.user },
  { id: 12, text: 'Dobre, ozvem sa ti.', user: tomas, timestamp: new Date('2024-02-03T10:47:00'), type: MessageType.user },
  { id: 13, text: 'Super, drž sa!', user: matej,timestamp: new Date('2024-02-03T10:50:00'), type: MessageType.user },
  { id: 14, text: 'Ty tiež, cauko', user: tomas, timestamp: new Date('2024-02-03T11:40:00'), type: MessageType.user },
  { id: 15, text: 'Maj sa!', user: matej,timestamp: new Date('2024-02-03T12:00:00'), type: MessageType.user },
  { id: 16, text: 'Zatial', user: tomas, timestamp: new Date('2024-02-03T12:30:00'), type: MessageType.user },
  { id: 17, text: 'Cauko', user: matej,timestamp: new Date('2024-02-03T12:31:00'), type: MessageType.user },
  { id: 18, text: 'Caaau, tak čo? Kedy ideme lietať? :D', user: matej,timestamp: new Date('2024-03-01T09:00:00'), type: MessageType.user },
  { id: 19, text: 'Zase začínaš... :D', user: tomas, timestamp: new Date('2024-03-01T09:05:00'), type: MessageType.user },
  { id: 20, text: 'No čo, už by to chcelo.', user: matej,timestamp: new Date('2024-03-01T09:10:00'), type: MessageType.user },
  { id: 21, text: 'Musím dokončiť projekt, mám deadline do piatku :(', user: tomas, timestamp: new Date('2024-03-01T09:12:00'), type: MessageType.user },
  { id: 22, text: 'Okeeej, tak si tryhardík aj naďalej 😆', user: matej,timestamp: new Date('2024-03-01T09:15:00'), type: MessageType.user },
  { id: 23, text: 'Po piatku si nájdeme čas, sľubujem', user: tomas, timestamp: new Date('2024-03-01T09:18:00'), type: MessageType.user },
  { id: 24, text: 'Dobre, držím ťa za slovo.', user: matej,timestamp: new Date('2024-03-01T09:20:00'), type: MessageType.user },
  { id: 25, text: 'A čo ty? Čo máš nové?', user: tomas, timestamp: new Date('2024-03-01T09:22:00'), type: MessageType.user },
  { id: 26, text: 'Nič extra, klasika robota, tréning... a čakám na to lietanie!', user: matej,timestamp: new Date('2024-03-01T09:25:00'), type: MessageType.user },
  { id: 27, text: 'Haha, dobre teda, dohodneme sa po piatku.', user: tomas, timestamp: new Date('2024-03-01T09:30:00'), type: MessageType.user },
  { id: 28, text: 'Platí! Maj sa zatiaľ!', user: matej,timestamp: new Date('2024-03-01T09:32:00'), type: MessageType.user },
  { id: 29, text: 'Čaukooo', user: tomas, timestamp: new Date('2024-03-01T09:35:00'), type: MessageType.user },
])
