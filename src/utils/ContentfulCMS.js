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

  getEntryByType = type => {
    const [ entry = {} ] = this.data.items.filter(entry => entry.sys.contentType.sys.id === type);
    return entry.fields;
  };

  getEntriesByType = type => {
    return this.data.items.filter(entry => entry.sys.contentType.sys.id === type);
  };

  getPageData = pageName => {
    switch (pageName) {
      case 'home':
        return this.getEntryByType('home');
      case 'work':
        return this.getEntryByType('work');
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