const express = require('express');
const router = express.Router();

const connection = require('../airtable');
const mapColumns = require('../utils/mapColumns');

router.get('/', (req, res) => {
  connection('Deadlines').select().all().then((deadlines) => {
    res.json({
      deadlines: deadlines.map(deadline => ({
        id: deadline.id,
        ...mapColumns(deadline.fields, 'Deadlines')
      }))
    });
  });
});

module.exports = router;