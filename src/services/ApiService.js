import axios from "axios";

const SYSTEMBOLAGET_ALLBEER = "/api/systembolaget/beer-list";
const UNTAPPD_GETBYNAME = "/api/untappd/beerbyname";


class ApiService {
  /**
   * Gets all the beers and returns them
   */
  static getAllBeers() {
    return axios.get(SYSTEMBOLAGET_ALLBEER).then(function(response) {
      return {
        ...response
      };
    });
  }

  static fetchUntappdRating(fullProductName) {
    return axios.get(UNTAPPD_GETBYNAME, {
      params: {
        productName: fullProductName,
      }
    })
    .then(function(response) {
      return {
        ...response
    }
    })
  }
}
export default ApiService;
