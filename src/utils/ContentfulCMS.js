import * as contentful from 'contentful';

class ContentfulCMS {
  constructor({ spaceID, accessToken }) {
    this.spaceID = spaceID;
    this.accessToken = accessToken;

    this.client = contentful.createClient({
      space       : this.spaceID,
      accessToken : this.accessToken
    });
  }

  init = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = this.client.getEntries();
        this.data = await response;
        // console.log(this.client.getEntry("UXqHMJShAAyOGUU2so0OS"));
        // console.log(this.client.getEntries({ 'content_type' : 'home' }));
        resolve();
      } catch (error) {
        console.error('Contentful Data Fetching Error: ', error);
        reject(error);
      }
    })
  };

  // getEntryById = async id => {
  //   const { fields = null } = await this.client.getEntry(id);
  //   return fields;
  // };
  //
  // getEntryByType = contentId => {
  //
  // };


  getEntryByType = type => {
    const [ entry = {} ] = this.data.items.filter(entry => entry.sys.contentType.sys.id === type);
    return entry.fields;
  };

  getEntriesByType = type => {
    return this.data.items.filter(entry => entry.sys.contentType.sys.id === type);
  };

  cleanData = data => {
    let cleanedData;

    for (const key in data) {
      const value = data[key];
      if (Array.isArray(value)) {
        const cleaned = value.map(item => ({ id: item.sys.id, ...item.fields }));
        cleanedData = { ...data, [key] : [ ...cleaned ]};
      }
    }

    return cleanedData;
  };

  getPageData = pageName => {
    switch (pageName) {
      case 'home':
        return this.getEntryByType('home');
      case 'work':
        return this.cleanData(this.getEntryByType('work'));
      case 'photography':
        return this.getEntryByType('photography');
      case 'awards':
        return this.getEntryByType('awards');
      case 'contact':
        return this.getEntryByType('contact');
      default:
        return 'Page Does Not Exist';
    }
  };

}

export default ContentfulCMS;
