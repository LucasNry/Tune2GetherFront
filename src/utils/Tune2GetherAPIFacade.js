import axios from "axios";

export class Tune2GetherAPIFacade {
  #API_URL = "http://localhost:8080";

  async getuniversalLinkFromId(id) {
    try {
      const response = await axios.get(`${this.#API_URL}/link?id=${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getLinksFromServiceURL(serviceUrl) {
    try {
      const response = await axios.get(
        `${this.#API_URL}/music?l=${serviceUrl}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
