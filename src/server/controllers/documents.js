const express = require('express');
const router = express.Router();

const connection = require('../airtable');
const mapColumns = require('../utils/mapColumns');

router.get('/', (req, res) => {
  connection('Documents').select().all().then((records) => {
    res.json({
      documents: records.map(record => ({
        id: record.id,
        ...mapColumns(record.fields, 'Documents')
      }))
    });
  });
});

module.exports = router;