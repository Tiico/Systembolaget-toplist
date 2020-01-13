/* eslint-disable no-console */
const config = require('../config');
const fetch = require("node-fetch");

class ToplistService {
  static async getToplist() {
    try {
      let url = `https://api-extern.systembolaget.se/product/v1/product/search?SearchQuery="Lagunitas Maximus IPA"`
      fetch(url, {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': config.SYSTEMBOLAGET_KEY,
        }
      })
      .then(res => res.json())
      console.log("hello")
      .then((data) => {
        console.log(data)
        return data;
      })
      .catch(console.log)
    } catch (err) {
        return err;
    }
  }
}

module.exports = ToplistService;