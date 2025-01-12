const express = require('express');
const upload = require('./upload')
const uploadController = require('./uploadExelController')
const router = express.Router();

router.post('/', upload.single('file'), uploadController.uploadXlxs);


module.exports = router;