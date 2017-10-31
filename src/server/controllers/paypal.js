const express = require('express');
const router = express.Router();

const paypal = require('paypal-rest-sdk');
require ('../paypalConfiguration');

router.get('/', (req, res) => {
  paypal.invoice.search({
    "recipient_first_name": "Sheva",
    "total_count_required": true
  }, function (error, results) {
    if (error) {
      throw error;
    } else {
      console.log("Invoice Search Response");
      console.log(results);
    }
  });
  // paypal.invoice.list(function (error, invoices) {
  //   if (error) {
  //       throw error;
  //   } else {
  //       console.log("List invoices Response");
  //       console.log(JSON.stringify(invoices));
  //   }
  // });
});

module.exports = router;
