/* eslint-disable no-console */
const express = require('express');
const config = require('../../config');
const fetch = require("node-fetch");
const router = express.Router();
const arrayUtils = require('./utils-module').Array; 

  /**
 * GET: Specific product by name
 */
router.get('/beerbyname', async (req, res) => {
  try {
    const fullProductName = req.query.productName;
    
    const beerSearchUrl = `https://api.untappd.com/v4/search/beer?q=${fullProductName}&client_secret=${config.UNTAPPD_API_SECRET}&client_id=${config.UNTAPPD_API_CLIENTID}`;
    fetch(beerSearchUrl, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      
    if (arrayUtils.notEmpty(data.response.beers.items)) {
      const beerId = data.response.beers.items[0].beer.bid;
      const beerInfoUrl = `https://api.untappd.com/v4/beer/info/${beerId}?client_secret=${config.UNTAPPD_API_SECRET}&client_id=${config.UNTAPPD_API_CLIENTID}`;
      fetch(beerInfoUrl, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(data => {
        res.json(data.response.beer)
      })
    } else {
      res.sendStatus(500);
    }
    })
    .catch(console.log)
  } catch (err) {
      return res.sendStatus(500).json('Something wrong in the request');
  }
  });


module.exports = router;