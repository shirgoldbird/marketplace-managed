import Airtable from 'airtable';

const connection = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
}).base(process.env.REACT_APP_AIRTABLE_BASE);

export default connection;