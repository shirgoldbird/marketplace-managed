function swap(obj){
  var ret = {};
  for (var key in obj) {
    ret[obj[key]] = key;
  }
  return ret;
}

const PROP_TO_AIRTABLE_MAP = {
  vendors: {
    otherWebsites: 'Secondary Websites',
    country: 'Country',
    paymentTypes: 'What forms of payment do you plan on accepting?',
    vendingExperience: 'What is your vending experience?',
    companyType: 'Company Type',
    legalName: 'Legal Name',
    city: 'City',
    state: 'State/Province/Region',
    merchTypes: 'What types of goods are you selling?',
    website: 'Primary Website',
    primaryMerchTypes: 'What do you consider to be your primary type of goods?',
    otherContactInfo: 'Please list any other ways by which we can reach you.',
    boothName: 'Booth Name',
    phoneNumber: 'Phone Number',
    address2: 'Address Line 2',
    zipCode: 'ZIP/Postal Code',
    address1: 'Address Line 1',
    additionalMerchInfo: 'Feel free to use this space to provide any additional information on your selection of goods.',
    email: 'Email Address',
    remainingBadges: 'Remaining Badges',
    badgeAmountDue: 'Badge Amount Due',
    applicationStatus: 'Application Status'
  },
  badges: {

  },
  sales_tax_info: {

  },
  documents: {
    name: 'Name',
    url: 'Link',
    notes: 'Notes',
    attachments: 'Attachments'
  },
  deadlines: {
    name: 'Name',
    dueDate: 'Due Date',
    notes: 'Notes',
    exhibitor_type: 'Exhibitor Type'
  },
  emails: {

  }
}

const AIRTABLE_TO_PROP_MAP = {
  vendors: swap(PROP_TO_AIRTABLE_MAP.vendors),
  badges: swap(PROP_TO_AIRTABLE_MAP.vendors),
  sales_tax_info: swap(PROP_TO_AIRTABLE_MAP.vendors),
  documents: swap(PROP_TO_AIRTABLE_MAP.vendors),
  deadlines: swap(PROP_TO_AIRTABLE_MAP.vendors),
  emails: swap(PROP_TO_AIRTABLE_MAP.vendors)
}

function mapColumns(obj = {}, table = 'vendors', toJS = true) {
  const sanitizedTable = table.replace(' ', '_').toLowerCase();
  const tableMap = (toJS ? AIRTABLE_TO_PROP_MAP : PROP_TO_AIRTABLE_MAP)[sanitizedTable];
  const newObj = {};

  if (!tableMap) {
    console.error(`Table ${table} not found in map, returning original object`);
    return obj;
  }

  Object.keys(obj).map(item => {
    if (tableMap[item]) {
      newObj[(tableMap[item])] = obj[item];
    } else {
      newObj[item] = obj[item];
    }
    return true;
  });

  return newObj;
}


module.exports = mapColumns;
