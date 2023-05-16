const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://chat.aiprm.top",
      label: "Chatgpt体验",
      position: "left",
    },
    {
      type: 'dropdown',
      label: 'ChatGPT 项目',
      position: 'left',
      items: [
        {
          label: "ChatGPT-Next-Web",
          href: "https://github.com/Yidadaa/ChatGPT-Next-Web",
        },

        {
          label: 'chatgpt-web',
          href: 'https://github.com/Chanzhaoyu/chatgpt-web',
        },
        {
          label: 'ChatGPT-Admin-Web',
          href: 'https://github.com/AprilNEA/ChatGPT-Admin-Web',
        },
        {
          label: 'chatgpt-web-plus',
          href: 'https://github.com/chatgpt-web-plus/free',
        },
        
      ],
    },
    {
      type: 'dropdown',
      label: 'Ai 商家',
      position: 'left',
      items: [
        {
          label: "小天的店铺",
          href: "https://fk.xt666.cc/",
        },

        {
          label: '汤姆的店铺',
          href: 'https://tomfk.top/',
        },
        {
          label: "店小王",
          href: "https://store.thew.one/",
        },
        {
          label: '卡商发布申请',
          href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=m55iSKX6PolEhjit-YcQcZ_KM3k3baFH&authKey=wJDWRCuA4A0kbUEurPWceYqan%2FmDtIwCi8ciDPlmHq2qQCIKFjg71Rk02iMISZgb&noverify=0&group_code=125800042',
        },
        {
          label: '自行判断',
          href: '#',
        },
        
      ],
    },
    {
      to: "https://chat.openai.com",
      label: "Chatgpt官网",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/rockbenben/ChatGPT-Shortcut",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=PFsjq1laajygOC3Bhb_1O8T7GpQBOtBo&authKey=Bo8Vbkz4Sa6%2BmOh%2F9wkWTOMa%2BCWpjdoa5Q4Hwk%2FqFVjO0rMnOH2yZ1HZr%2FQxO7Tn&noverify=0&group_code=299294863",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = zhNavbar;
