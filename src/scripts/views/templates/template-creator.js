const createItemTemplate = (destination) => `
    <div class="col">
      <div class="card shadow m-2 bg-light border-5 border-light">
        <div class="item-header">
          <img data-src="${destination.pictureId}" class="card-img-top img-fluid item-image lazyload" alt="Gambar ${destination.nama}" loading="lazy">
          <div class="item-header-rating rounded-start">
              <p class="mb-0">⭐️<span class="rating-score">${destination.rating}</span></p>
          </div>
        </div>
        <div class="card-body">
          <h4><a class="card-title" href="${`/#/detail/${destination.id}`}">${destination.nama}</a></h4>
          <p class="card-text">${destination.deskripsi}</p>
        </div>
      </div>
    </div>
  `;

const createDetailTemplate = (destination) => `
  <div class="col">
    <div class="bgimg" style='background-image: url("${destination.pictureId}");opacity: 0.9;'>
        <div class="caption">
            <span class="border">${destination.nama}</span>
        </div>
    </div>
    <div class="pt-3">
          <p class="lead text-muted">Deskripsi</p>
          <p class="lead">${destination.deskripsi}</p>
          <p class="lead text-muted">Alamat</p>
          <p class="lead">${destination.alamat}</p>
          <p class="lead text-muted">Rating</p>
          <p class="lead">${destination.rating}</p>
          <p class="lead text-muted">Kategori</p>
          <p class="lead">${destination.kategori}</p>
          <p class="lead text-muted">No Telepon</p>
          <p class="lead">${destination.cp}</p>
    </div>
    <div class="bgimg" style='background-image: url("${destination.pictureId}");'>
    </div>
  </div>
`;

const createFavoritButton = () => `
  <button aria-label="tambahkan ke favorit" id="favbutton" class="fav">
  <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnFavoritButton = () => `
  <button aria-label="hapus dari favorit" id="favbutton" class="fav">
  <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>  
`;

const noData = () => `
  <div class='container text-center'>
    <picture>
      <source media="(max-width: 600px)" srcset="./images/vector/nodata-small.png" class="img-fluid rounded">
      <img src="./images/vector/nodata.png" alt="no-data" id="no-data" class="img-fluid rounded">
    </picture>
  </div>
`;

export {
  createItemTemplate,
  createDetailTemplate,
  createFavoritButton,
  createUnFavoritButton,
  noData,
};
