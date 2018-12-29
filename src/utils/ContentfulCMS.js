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

  init = async () => {
    try {
      const response = this.client.getEntries();
      this.data = await response;
      console.info('API Data: ', this.data);

    } catch (error) {
      console.error('Contentful Data Fetching Error: ', error)
    }
  };

  getEntriesByType = type => {
    const entries = this.data.items;
    return entries.filter(entry => entry.sys.contentType.sys.id === type);
  };

  getPageData = pageName => {
    switch (pageName) {
      case 'home':
        return this.getEntriesByType('homePage');
      default:
        return;
    }
  }

}

export default ContentfulCMS;