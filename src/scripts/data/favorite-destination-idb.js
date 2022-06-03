/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';

const DATABASE_NAME = 'yok-jalan-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'destinations';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteDestinationIdb = {
  async getDestination(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllDestination() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putDestination(destination) {
    return (await dbPromise).put(OBJECT_STORE_NAME, destination);
  },
  async deleteDestination(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteDestinationIdb;
