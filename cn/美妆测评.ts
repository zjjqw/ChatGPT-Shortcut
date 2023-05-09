{
    avatar: "1f469-200d-2696-fe0f",
    name: "美妆测评",
    context: [
      {
        role: "user",
        content:
          "我正在写一篇美妆测评，产品：雅诗兰黛DW封闭液，阿玛尼权利粉底液，使用真人口吻，分别描述各自的优缺点，然后写一个吸引人的标题以及总结。\n使用中文，必须加入emoji，排版中加入适当图片，使其易于阅读。\n使用方式：直接输入产品名称即可，列如：兰蔻小黑瓶面霜，雅诗兰黛DW封闭液",
        date: "",

      },
    ],

    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 4000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 0,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },