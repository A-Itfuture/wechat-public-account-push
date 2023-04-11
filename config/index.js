export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_ID: "",

  // 公众号APP_SECRET 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_SECRET: "",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "主人",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oeMBj6smI6peN4c4qpIibh2CfsTk",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "0lvLOfHoG-nsIIGxSMouF9ysxOyVw6yLZootXZ2HPyA",
      // 所在省份
      province: "北京",
      // 所在城市
      city: "北京",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://cn.bing.com/images/trending?form=Z9LH"
    }, 
    {
      name: "小叶同学，早上好", 
      id: "oeMBj6lltlSI6X2sEH1eEauFqLKw",
      useTemplateId: "0lvLOfHoG-nsIIGxSMouF9ysxOyVw6yLZootXZ2HPyA",
      province: "陕西",
      city: "渭南",
      openUrl: "https://cn.bing.com/images/trending?form=Z9LH"
    }, 
    
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjV1glIuCXo4Csr23aXWEio1iP74sZJ7IQEES95lDsg6c4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oeMBj6smI6peN4c4qpIibh2CfsTk",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "陕西",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "渭南",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "节日", "name": "生理期", "year": "2023", "date": "04-19"},
//     {"type": "节日", "name": "生理期", "year": "2020", "date": "11-11"},
//     {"type": "节日", "name": "生理期", "year": "2020", "date": "12-11"},
    //     {"type": "节日", "name": "生理期", "year": "2020", "date": "01-10"},
    {"type": "生日", "name": "小叶同学", "year": "1999", "date": "04-20"},
    {"type": "节日", "name": "恋爱纪念日", "year": "2020", "date": "03-05"},
    {"type": "生日", "name": "小王同学", "year": "1998", "date": "04-04"},
//     {"type": "节日", "name": "被搭讪纪念日", "year": "2020", "date": "02-03"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2020-03-05"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2023-07-01"},
    // 退伍日, 不用可以删掉
    {"keyword": "ex_day", date: "2022-08-31"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "叶杰杰，你是我爷",
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "叶杰杰女士，你是我爷",
      "遇见你，就好像捡到了100斤的运气",
      "杰杰爷，你是我爷",
      "承蒙你出现，够我欢喜好几年。",
      "我想和你过面朝大海，春暖花开的日子，余生都有你。",
      "怕无归期，怕空欢喜，怕来者不是你。",
      "叶杰杰宝贝，你是我爷",
      "只要你还在我身后，我就可以微笑着与世界为敌。",
      "一辈子和你在一起，才叫将来，换了别人，那叫将就。",
      "我只有两个心愿，你在身边，在你身边。",
      " 我贪恋的人间烟火，不偏不倚，全部是你。",
      "我发现你不适合谈恋爱，适合结婚。"
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
