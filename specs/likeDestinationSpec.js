/* eslint-disable no-undef */
import FavoriteDestinationIdb from '../src/scripts/data/favorite-destination-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Liking A Destination', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the destination has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({ id: 1 });

    expect(document.querySelector('[aria-label="tambahkan ke favorit"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the destination has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({ id: 1 });

    expect(document.querySelector('[aria-label="hapus dari favorit"]')).toBeFalsy();
  });

  it('should be able to like the destination', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({ id: 1 });

    document.querySelector('#favbutton').dispatchEvent(new Event('click'));
    const destination = await FavoriteDestinationIdb.getDestination(1);

    expect(destination).toEqual({ id: 1 });

    FavoriteDestinationIdb.deleteDestination(1);
  });

  it('should not add a destination again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({ id: 1 });

    await FavoriteDestinationIdb.putDestination({ id: 1 });
    document.querySelector('#favbutton').dispatchEvent(new Event('click'));
    expect(await FavoriteDestinationIdb.getAllDestination()).toEqual([{ id: 1 }]);

    FavoriteDestinationIdb.deleteDestination(1);
  });

  it('should not add a destination when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithDestination({});

    document.querySelector('#favbutton').dispatchEvent(new Event('click'));

    expect(await FavoriteDestinationIdb.getAllDestination()).toEqual([]);
  });
});
