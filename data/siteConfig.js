module.exports = {
  siteTitle: 'Hillary on the web',
  siteDescription: 'Hello. I am not a dog, I swear.',
  authorName: 'Hillary Jeffrey',
  twitterUsername: 'DeputyHuman',
  authorAvatar: 'belle-ball.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `Hillary is human, or at least deputized to be one.`,
  siteUrl: 'https://www.hillaryjeffrey.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  // pathPrefix: '/hillaryjeffrey', // Note: it must *not* have a trailing slash.
  siteCover: 'pexels-miriam-espacio-110854.jpg', // file in content/images
  websiteCover: {
    name: 'Miriam Espacio',
    url: 'https://www.pexels.com/photo/blue-pink-and-white-andromeda-galaxy-way-110854/',
  },
  background_color: '#ffffff',
  theme_color: '#463591',
  display: 'standalone',
  icon: 'content/images/belle-ball.jpg',
  postsPerPage: 6,
  headerTitle: 'Hillary on the web',
  headerLinksIcon: 'belle-ball.jpg', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Recipes',
      url: '/recipes',
    },
    // {
    //   label: 'Github',
    //   url: 'https://github.com/hillaryj',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
        {
          label: 'Recipes',
          url: '/recipes',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Evil Hillary',
          url: 'https://www.evilhillary.com',
          rel: 'external',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/hillaryj',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/DeputyHuman',
          rel: 'external',
        },
      ],
    },
  ],
}
