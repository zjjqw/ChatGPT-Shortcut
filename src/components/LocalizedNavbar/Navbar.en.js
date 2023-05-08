const enNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      href: 'https://chat.aiprm.top',
      label: 'ChatGPT',
      target: '_blank',
      position: 'left',
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=8iL4Va8YaqNyrbdifhEOD0biZx8l2tWY&authKey=TNyKaORGJ0wwCuiwy6BDBlI1MnHM4JTZVJpf9uP%2BT0%2FH5QgW5yrtoK5zKXVhe8xX&noverify=0&group_code=125800040",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=8iL4Va8YaqNyrbdifhEOD0biZx8l2tWY&authKey=TNyKaORGJ0wwCuiwy6BDBlI1MnHM4JTZVJpf9uP%2BT0%2FH5QgW5yrtoK5zKXVhe8xX&noverify=0&group_code=125800040",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = enNavbar;
