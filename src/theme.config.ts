export const THEME_CONFIG: App.Locals["config"] = {
  /** blog title */
  title: "講評世界",
  /** your name */
  author: "DHARMIK",
  /** website description */
  desc: "Hallo meine freunde!",
  /** your deployed domain */
  website: "https://blog.dharmik.me",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/dhrmkj",
    },
    {
      name: "discord",
      href: "https://discord.com/users/1103331985239322635",
    },
    {
      name: "twitter",
      href: "https://x.com/dhrmkj",
    },
    {
      name: "instagram",
      href: "https://instagram.com/dhrmkj",
    },
  ],
  /** your header info */
  header: {
    twitter: "@dhrmkj",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "About",
      href: "dharmik.me",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [{ name: "胡适", path: "hu-shi" }],
  /** your comment provider */
  comments: {
    disqus: {
      // please change this to your disqus shortname
      shortname: "typography-astro",
    },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  },
};
