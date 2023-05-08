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
          href: 'https://platform.openai.com/',
        },
        {
          label: '官方Chat',
          href: 'https://chat.openai.com/',
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
      href: "点击链接加入群聊【ai prompt】：http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=8iL4Va8YaqNyrbdifhEOD0biZx8l2tWY&authKey=TNyKaORGJ0wwCuiwy6BDBlI1MnHM4JTZVJpf9uP%2BT0%2FH5QgW5yrtoK5zKXVhe8xX&noverify=0&group_code=125800040",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "点击链接加入群聊【ai prompt】：http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=8iL4Va8YaqNyrbdifhEOD0biZx8l2tWY&authKey=TNyKaORGJ0wwCuiwy6BDBlI1MnHM4JTZVJpf9uP%2BT0%2FH5QgW5yrtoK5zKXVhe8xX&noverify=0&group_code=125800040",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = zhNavbar;
