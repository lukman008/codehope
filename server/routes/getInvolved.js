const express = require('express')
const router = express.Router()

// const programData = [];

router.get('/:program', async (req, res, next) => {
  try {
    let { program } = req.params;
  } catch (error) {
    let { message } = error;
    res.status(500).send(message);
  }
})

module.exports = router;
