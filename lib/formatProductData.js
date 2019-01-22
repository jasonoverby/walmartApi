const decode = require('unescape');

const formatProductData = (str) => {
  // convert html entites to text
  const decodedStr = decode(str);
  const regexForSurroundingQuotes = new RegExp(/(^"|"$)/, 'g');
  const regexforExtraQuotes = new RegExp(/"{2,}/, 'g');
  return decodedStr.replace(regexForSurroundingQuotes, '')
    .replace(regexforExtraQuotes, '"');
};

module.exports = formatProductData;
