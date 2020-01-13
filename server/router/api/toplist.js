/* eslint-disable no-console */
const express = require('express');
const config = require('../../config');
const fetch = require("node-fetch");
/* const toplistService = require('../../integration/toplist-services'); */
const router = express.Router();

/**
 * GET: Toplist
 */
router.get('/', async (req, res) => {
  try {
    let url = `https://api-extern.systembolaget.se/product/v1/product/search?SubCategory=Öl`
    fetch(url, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': config.SYSTEMBOLAGET_KEY,
      }
    })
    .then(res => res.json())
    .then((data) => {
      let beers = data.Hits
      console.log(data.Metadata)
      res.json(beers);
    })
    .catch(console.log)
  } catch (err) {
      return res.sendStatus(500);
  }
  });
/* function filter_beer(event){
  return event.Category == "Öl"
} */


module.exports = router;