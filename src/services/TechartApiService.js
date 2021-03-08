/**
 * Just a helper class to communicate with external Techart API
 */
class TechartApiService {
  apiBase = 'https://data.techart.ru/lab/json/';

  /**
   * Just a service method to get a response from an API.
   * If there is a connection error, or result is not 'ok', then we can
   * catch the Promise reject and do smth.
   * If there is no error, then result is ok and we can do smth with message
   * 
   * @param {object} formData 
   * @returns {Promise<string>}
   */
  getResponse = (formData) => {
    const {
      building,
      floors,
      material,
      sizes: { x, y },
    } = formData;

    const url = `${this.apiBase}?building=${building}&height=${floors}&material=${material}&sizex=${x}&sizey=${y}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.result !== 'ok') {
          throw new Error(data.message);
        }
        return data.message;
      });
  }
}

export default TechartApiService;