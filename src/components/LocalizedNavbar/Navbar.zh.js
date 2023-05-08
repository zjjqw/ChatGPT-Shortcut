const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://aiprm.top",
      label: "Aiprm",
      position: "left",
    },
    {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        
        {
          label: '高级提示词',
          href: 'https://aiprm.top/t/prm',
        },
        {
          label: 'api入口',
          href: 'https://platform.openai.com',
        },
        {
          label: '官方Chat',
          href: 'https://chat.openai.com',
        },
        {
          label: "ChatGPT-Next-Web",
          href: "https://github.com/Yidadaa/ChatGPT-Next-Web",
        },
      ],
    },
    {
      to: "https://chat.aiprm.top",
      label: "在线体验",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "http://2t8.cn/Hvh6D",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "http://2t8.cn/Hvh6D",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = zhNavbar;
