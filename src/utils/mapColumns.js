// Takes an Exhibitor object from Airtable and renames the columns to something sane

export const airtableToJs = {
  "Secondary Websites": 'otherWebsites',
  "Country": 'country',
  "What forms of payment do you plan on accepting?": 'paymentTypes',
  "What is your vending experience?": 'vendingExperience',
  "Company Type": 'companyType',
  "Legal Name": 'legalName',
  "City": 'city',
  "State/Province/Region": 'state',
  "What types of goods are you selling?": 'merchTypes',
  "Primary Website": 'website',
  "What do you consider to be your primary type of goods?": 'primaryMerchTypes',
  "Please list any other ways by which we can reach you.": 'otherContactInfo',
  "Booth Name": 'boothName',
  "Phone Number": 'phoneNumber',
  "Address Line 2": 'address2',
  "ZIP/Postal Code": 'zipCode',
  "Address Line 1": 'address1',
  "Feel free to use this space to provide any additional information on your selection of goods.": 'additionalMerchInfo',
  "Email Address": 'email',
  "Remaining Badges": 'remainingBadges',
  "Badge Amount Due": 'badgeAmountDue',
  "Application Status": 'applicationStatus'
}

function swap(obj){
  var ret = {};
  for (var key in obj) {
    ret[obj[key]] = key;
  }
  return ret;
}

export const jsToAirtable = swap(airtableToJs);

export function mapColumns(obj, columnMap=airtableToJs) {
  let newObj = {};

  Object.keys(obj).map(item => {
    if (columnMap[item]) {
      newObj[(columnMap[item])] = obj[item];
    } else {
      newObj[item] = obj[item];
    }
    return true;
  });

  return newObj;
}
