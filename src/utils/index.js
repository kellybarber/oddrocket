import ContentfulCMS from './ContentfulCMS';

const contentfulCMS = new ContentfulCMS({
  spaceID     : 'cvhpm3t2b9ed',
  accessToken : '1295782f7d5460e938602838a4c8c3b44faaff0d1b7d8a84280f16e860a1cba9'
});

export default {
  install(Vue) {
    Vue.prototype.$cms = contentfulCMS;
  }
};
