import axios from "axios";

const TOPLIST = "/api/toplist/systembolaget-beer";


class ToplistService {
  /**
   * Gets all the recipes and returns them
   */
  static getToplist() {
    return axios.get(TOPLIST).then(function(response) {
      // eslint-disable-next-line no-console
      return {
        ...response
      };
    });
  }
}
export default ToplistService;
