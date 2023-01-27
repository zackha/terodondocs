export default defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      twitter: "nuxtstudio",
      github: "nuxt-themes/docus",
      facebook: "",
      instagram: "",
      youtube: "",
      medium: ""
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      title: "",
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fixed: true,
      fluid: true
    },
    github: {
      dir: ".docs/content",
      branch: "main",
      repo: "docus",
      owner: "nuxt-themes",
      edit: true
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      iconLinks: [
        {
          href: "https://nuxt.com",
          icon: "IconNuxtLabs",
          label: "Nuxt"
        }
      ],
      fluid: true
    }
  },
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    },
    h1: {
      icon: ""
    },
    h2: {
      icon: ""
    },
    h3: {
      icon: ""
    },
    h4: {
      icon: ""
    },
    h5: {
      icon: ""
    },
    h6: {
      icon: ""
    }
  }
})
