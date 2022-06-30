import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithDestination = async (destination) => {
  await LikeButtonPresenter.init({
    FavoriteButtonContainer: document.querySelector('#likeButtonContainer'),
    destination,
  });
};

export { createLikeButtonPresenterWithDestination };
