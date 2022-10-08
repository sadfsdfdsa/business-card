import { ExperienceItem, Link } from '../types'

export const contactLinks: Link[] = [
  {
    text: 'telegram',
    href: 'https://telegram.me/karanarqq',
    ymEvent: 'click-telegram',
  },
  {
    text: 'github',
    href: 'https://github.com/sadfsdfdsa',
    ymEvent: 'click-github',
  },
  {
    text: 'career',
    href: 'https://career.habr.com/karanarqq',
    ymEvent: 'click-career',
  },
  {
    text: 'habr',
    href: 'https://habr.com/ru/users/karanarqq/posts/',
    ymEvent: 'click-habr',
  },
  {
    text: 'linkedin',
    href: 'https://www.linkedin.com/in/karanarqq/',
    ymEvent: 'click-linkedin',
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    name: 'sidekick browser',
    position: 'senior frontend developer',
    tags: ['Typescript', 'Svelte', 'Chromium', 'Node.js', 'NestJS'],
    site: 'https://www.meetsidekick.com',
  },
  {
    name: 'ozon',
    position: 'senior frontend developer',
    tags: ['Javascript', 'Typescript', 'Vue.js', 'Postcss', 'RxJS'],
    site: 'https://www.ozon.ru',
  },
  {
    name: 'tada.team',
    position: 'middle frontend developer',
    tags: ['Typescript', 'Vue.js', 'WebSockets', 'WebRTC', 'Electron'],
    site: 'https://tada.team',
  },
  {
    name: 'get-net',
    position: 'junior frontend developer',
    tags: ['Javascript', 'Vue.js', 'Lua', 'Tarantool', 'Nginx'],
    site: 'https://www.get-net.ru/en',
  },
]
