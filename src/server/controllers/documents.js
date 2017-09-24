const express = require('express');
const router = express.Router();

const connection = require('../airtable');
const mapColumns = require('../utils/mapColumns').mapColumns;

router.get('/', (req, res) => {
  connection('Documents').select().all().then((records) => {
    res.json({
      documents: records.map(record => ({
        id: record.id,
        ...record.fields
      }))
    });
  });
});

module.exports = router;