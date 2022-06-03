import data from '../../../DATA.json';

class DataSourceSearch {
  static show(keyword) {
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

export default DataSourceSearch;
