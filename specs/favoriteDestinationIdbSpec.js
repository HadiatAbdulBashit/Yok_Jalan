/* eslint-disable no-undef */
import { itActsAsFavoriteDestinationModel } from './contract/favoriteDestinationContract';
import FavoriteDestinationIdb from '../src/scripts/data/favorite-destination-idb';

describe('Favorite Destination Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteDestinationIdb.getAllDestination()).forEach(async (destination) => {
      await FavoriteDestinationIdb.deleteDestination(destination.id);
    });
  });

  itActsAsFavoriteDestinationModel(FavoriteDestinationIdb);
});
