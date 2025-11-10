/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  theme: { mode: 'auto', enableUserChange: true },
  lang: 'en-US',
  site: 'https://optinux.me',
  avatar: '/banner.png',
  title: "optinux' space",
  description: 'my very own digital purgatory 🙂‍↕️',
  lastModified: false,
  readTime: true,
  footer: {
    copyright: '>anywhere somewhere',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/optinux/'
    },
]
});