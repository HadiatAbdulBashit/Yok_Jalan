/* eslint-disable no-undef */
import FavoriteDestinationIdb from '../src/scripts/data/favorite-destination-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Destination', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteDestinationIdb.putDestination({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteDestinationIdb.deleteDestination(1);
  });

  it('should display unlike widget when the destination has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({ id: 1 });

    expect(document.querySelector('[aria-label="hapus dari favorit"]')).toBeTruthy();
  });

  it('should not display like widget when the destination has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({ id: 1 });

    expect(document.querySelector('[aria-label="tambahkan ke favorit"]')).toBeFalsy();
  });

  it('should be able to remove liked destination from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({ id: 1 });

    document.querySelector('[aria-label="hapus dari favorit"]').dispatchEvent(new Event('click'));

    expect(await FavoriteDestinationIdb.getAllDestination()).toEqual([]);
  });

  it('should not throw error if the unliked destination is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({ id: 1 });

    await FavoriteDestinationIdb.deleteDestination(1);

    document.querySelector('[aria-label="hapus dari favorit"]').dispatchEvent(new Event('click'));

    expect(await FavoriteDestinationIdb.getAllDestination()).toEqual([]);
  });
});
