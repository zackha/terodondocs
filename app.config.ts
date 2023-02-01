export default defineAppConfig({
  docus: {
    title: "Rays",
    description: "The best place to start your documentation.",
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
    footer: {
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
