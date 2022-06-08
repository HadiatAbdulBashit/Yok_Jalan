import FavoriteDestinationIdb from '../data/favorite-destination-idb';
import { createFavoritButton, createUnFavoritButton } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ FavoriteButtonContainer, destination }) {
    this._FavoriteButtonContainer = FavoriteButtonContainer;
    this._destinations = destination;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._destinations;

    if (await this._isDestinationExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDestinationExist(id) {
    const destination = await FavoriteDestinationIdb.getDestination(id);
    return !!destination;
  },

  _renderLike() {
    this._FavoriteButtonContainer.innerHTML = createFavoritButton();

    const favoriteButton = document.querySelector('#favbutton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteDestinationIdb.putDestination(this._destinations);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._FavoriteButtonContainer.innerHTML = createUnFavoritButton();

    const favoriteButton = document.querySelector('#favbutton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteDestinationIdb.deleteDestination(this._destinations.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
