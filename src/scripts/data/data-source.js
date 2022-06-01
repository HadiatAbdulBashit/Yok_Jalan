import data from '../../../DATA.json';

class DataSource {
  static search(keyword) {
    return new Promise((resolve, reject) => {
      const filteredDestination = data.destinations.filter(destination => destination.nama.toUpperCase().includes(keyword.toUpperCase()));
      if (filteredDestination.length) {
        resolve(filteredDestination);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
