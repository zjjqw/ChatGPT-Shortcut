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
      href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ZMoZXvWdkpPNz8OWzCsG9CMd8VRKZQAi&authKey=8RsoR%2FV8bFn2KTqMr%2BJ%2FHFznZfv%2BPgYsQgAv1QUoieJ7JhshYP0m8VpqwYpFV5N9&noverify=0&group_code=181509991",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ZMoZXvWdkpPNz8OWzCsG9CMd8VRKZQAi&authKey=8RsoR%2FV8bFn2KTqMr%2BJ%2FHFznZfv%2BPgYsQgAv1QUoieJ7JhshYP0m8VpqwYpFV5N9&noverify=0&group_code=181509991",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = enNavbar;
