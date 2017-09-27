function swap(obj){
  var ret = {};
  for (var key in obj) {
    ret[obj[key]] = key;
  }
  return ret;
}

const AIRTABLE_TO_PROP_MAP = {
  vendors: {
    'Secondary Websites': 'otherWebsites',
    'Country': 'country',
    'What forms of payment do you plan on accepting?': 'paymentTypes',
    'What is your vending experience?': 'vendingExperience',
    'Company Type': 'companyType',
    'Legal Name': 'legalName',
    'City': 'city',
    'State/Province/Region': 'state',
    'What types of goods are you selling?': 'merchTypes',
    'Primary Website': 'website',
    'What do you consider to be your primary type of goods?': 'primaryMerchTypes',
    'Please list any other ways by which we can reach you.': 'otherContactInfo',
    'Booth Name': 'boothName',
    'Phone Number': 'phoneNumber',
    'Address Line 2': 'address2',
    'ZIP/Postal Code': 'zipCode',
    'Address Line 1': 'address1',
    'Feel free to use this space to provide any additional information on your selection of goods.': 'additionalMerchInfo',
    'Email Address': 'email',
    'Remaining Badges': 'remainingBadges',
    'Badge Amount Due': 'badgeAmountDue',
    'Application Status': 'applicationStatus'
  },
  badges: {

  },
  sales_tax_info: {

  },
  documents: {
    Name: 'name',
    Link: 'url',
    Notes: 'notes',
    Attachments: 'attachments'
  },
  deadlines: {
    Name: 'name',
    'Due Date': 'dueDate',
    Notes: 'notes',
    'Exhibitor Type': 'exhibitor_type'
  },
  emails: {

  }
}

const PROP_TO_AIRTABLE_MAP = {
  vendors: swap(AIRTABLE_TO_PROP_MAP.vendors),
  badges: swap(AIRTABLE_TO_PROP_MAP.vendors),
  sales_tax_info: swap(AIRTABLE_TO_PROP_MAP.vendors),
  documents: swap(AIRTABLE_TO_PROP_MAP.vendors),
  deadlines: swap(AIRTABLE_TO_PROP_MAP.vendors),
  emails: swap(AIRTABLE_TO_PROP_MAP.vendors)
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