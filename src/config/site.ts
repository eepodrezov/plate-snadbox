export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Plate Test Project',
  description:
    'Rich-text editor components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'First Test',
      href: '/firstTest',
    },
  ],
  links: {
    twitter: 'https://twitter.com/zbeyens',
    github: 'https://github.com/udecode/plate',
    docs: 'https://platejs.org',
  },
};
