const siteMetadata = {
  title: `智星未来的小屋`,
  author: "青玉白露",
  headerTitle: "智星未来的小屋",
  description: "记录分享日常学习的软硬件技术内容",
  language: "zh-cn",
  buildTime: "2024-10-23 10:14:12", // 建站时间
  theme: "system", // system, dark or light
  siteUrl: "https://aistar.cool",
  siteRepo: "https://github.com/zS1m/nextjs-contrails",
  siteLogo: "/static/images/logo.png",
  socialBanner:
    "https://chev.contrails.space:12650/images/2024/06/10/848fc6c438b5fe8321029b6b00d120f7.png",
  mastodon: "https://mastodon.social/@mastodonuser",
  email: "chaosspades@gmail.com",
  github: "https://github.com/zS1m",
  twitter: "https://twitter.com/Twitter",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  linkedin: "https://www.linkedin.com",
  juejin: "https://juejin.cn/user/3171446982457687/posts",
  locale: "zh-CN",
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    baiduAnalytics: {
      baiduAnalyticsId: process.env.BAIDU_ANALYTICS_ID,
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: "buttondown",
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: "giscus", // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: "pathname", // supported options: pathname, url, title
      reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: "0",
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: "light",
      // theme when dark mode
      darkTheme: "transparent_dark",
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: "",
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: "en",
    },
  },
  search: {
    provider: "kbar", // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: "search.json", // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
};

export default siteMetadata;
