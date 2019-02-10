import ContentfulCMS from './ContentfulCMS';

const contentfulCMS = new ContentfulCMS({
  space       : process.env.CONTENTFUL_SPACE_ID,
  accessToken : process.env.CONTENTFUL_ACCESS_TOKEN
});

export default {
  install(Vue) {
    Vue.prototype.$cms = contentfulCMS;
  }
};
