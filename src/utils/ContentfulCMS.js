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
        resolve();
      } catch (error) {
        console.error('Contentful Data Fetching Error: ', error);
        reject(error);
      }
    })
  };

  getEntriesByType = type => {
    return this.data.items.filter(entry => entry.sys.contentType.sys.id === type);
  };

  getEntryByPage = pageName => {
    const [ entry ] = this.data.items.filter(entry => entry.sys.contentType.sys.id === pageName);
    return entry.fields;
  };

  getPageData = pageName => {
    switch (pageName) {
      case 'home':
        return this.getEntryByPage('home');
      case 'film':
        return this.getEntryByPage('film');
      case 'photography':
        return this.getEntryByPage('photography');
      case 'awards':
        return this.getEntryByPage('awards');
      case 'contact':
        return this.getEntryByPage('contact');
      default:
        return 'Page Does Not Exist';
    }
  };

}

export default ContentfulCMS;
