import axios from "axios";
import { TRACK, PLAYLIST } from "../constants/SharedItemTypes";

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

  async getLinksFromServiceURL(serviceUrl, sharedItemType) {
    let endpoint;
    switch (sharedItemType) {
      case PLAYLIST:
        endpoint = "playlist";
        break;
      case TRACK:
      default:
        endpoint = "music";
    }
    try {
      const response = await axios.get(
        `${this.#API_URL}/${endpoint}?l=${serviceUrl}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getUserInfo(email, password) {
    const response = await axios.post(
      `${this.#API_URL}/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    return response;
  }

  async signUp(username, email, password, preferredService) {
    return await axios.post(`${this.#API_URL}/signup`, {
      username,
      email,
      password,
      preferredService,
    });
  }

  async logOut() {
    await axios.get(`${this.#API_URL}/logout`, { withCredentials: true });
  }
}
