const messages = {
  en: {
    message: {
      hello: 'hello',
      minwt:'minwt'
    }
  },
  tw: {
    message: {
      hello: '壓鑄機製造的最佳選擇',
      minwt:'梅問題'
    }
  },
  cn: {
    message: {
      hello: '哈啰',
      minwt:'梅问题'
    }
  },
  jp: {
    message: {
      hello: 'ハロー',
      minwt:'メイウンディー'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', 
  messages,
})
new Vue({ i18n }).$mount('#wrap')