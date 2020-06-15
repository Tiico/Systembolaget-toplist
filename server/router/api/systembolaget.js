/* eslint-disable no-console */
const express = require('express');
const config = require('../../config');
const fetch = require("node-fetch");
const router = express.Router();

/**
 * GET: List of systembolaget beers
 */
router.get('/beer-list', async (req, res) => {
  const key = process.env.SYSTEMBOLAGET_KEY || config.SYSTEMBOLAGET_KEY;
  try {
    let url = `https://api-extern.systembolaget.se/product/v1/product/search?SubCategory=Öl`
    fetch(url, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
      }
    })
    .then(res => res.json())
    .then((data) => {
      let beers = data.Hits
      res.json(beers);
    })
    .catch(console.log)
  } catch (err) {
      return res.sendStatus(500);
  }
  });

module.exports = router;