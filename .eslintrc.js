module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'comma-spacing': [2, {'before': false, 'after': true}], // 逗号后带空格
    'indent': [2, 4], //缩进风格
    'linebreak-style': [2, 'windows'],  // 换行风格
    'quotes': [2, 'single'],  // 引号，单引号
    'no-extra-semi': 2, // 禁止不必要的分号
    'space-before-function-paren': [2, 'never'],  //禁止函数圆括号之前有一个空格

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
