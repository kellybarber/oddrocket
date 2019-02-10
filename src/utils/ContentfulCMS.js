import * as contentful from 'contentful';

class ContentfulCMS {
  constructor({ space, accessToken }) {
    this.client = contentful.createClient({
      space,
      accessToken
    });

    this.data = {};
  }

  init = () => new Promise( async (resolve, reject) => {
    try {
      await this.getEntryByType('mainHeader');
      resolve();
    } catch (error) {
      console.error('Contentful Data Fetching Error: ', error);
      reject(error);
    }
  });

  getData = key => {
    if (this.data[key]) return this.data[key];
    return undefined;
  };

  getEntryById = async id => {
    try {
      const { fields = null } = await this.client.getEntry(id);
      return fields;
    } catch (error) {
      console.error('Get Entry By Id Error: ', error);
    }
  };

  getEntryByType = contentId => new Promise( async (resolve, reject) => {
    try {
      const { items : [ item ] } = await this.client.getEntries({ 'content_type' : contentId });
      this.data[contentId] = this.cleanData(item);
      resolve();
    } catch (error) {
      console.error('Get Entry By Type Error: ', error);
      reject(error);
    }
  });

  getEntriesByType = contentId => new Promise( async (resolve, reject) => {
    try {
      const { items } = await this.client.getEntries({ 'content_type' : contentId });
      this.data[contentId] = items.map(item => this.cleanData(item));
      resolve();
    } catch (error) {
      console.error('Get Entries By Type Error: ', error);
      reject(error);
    }
  });

  cleanData = data => {
    let workingData = data;

    if (!!workingData.sys && !!workingData.fields) {
      workingData = { id: data.sys.id, ...data.fields }
    }

    for (const key in workingData) {
      const value = workingData[key];
      if (!!value.sys && !!value.fields) {
        workingData = { ...workingData, [key] : { id: value.sys.id, ...value.fields }};
      } else if (Array.isArray(value)) {
        const arrayData = value.map(item => ({ id: item.sys.id, ...item.fields }));
        workingData = { ...workingData, [key] : arrayData};
      }
    }

    return workingData;
  };

  setPageData = async pageName => {
    switch (pageName) {
      case 'home':
        return await this.getEntryByType('home');
      case 'work':
        return await this.getEntryByType('work');
      case 'film':
        return await this.getEntriesByType('film');
      case 'contact':
        return await this.getEntryByType('contact');
      default:
        return 'Page Does Not Exist';
    }
  };
}

export default ContentfulCMS;
