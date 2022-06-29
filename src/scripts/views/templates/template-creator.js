const createItemTemplate = (destination) => `
    <div class="col" data-aos="flip-right" data-aos-offset="-700">
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
  <div class="col" data-aos="zoom-out" data-aos-offset="-500">
    <div class="bgimg" style='background-image: url("${destination.pictureId}");'>
        <div class="caption">
          <h1><span class="border">${destination.nama}</span></h1>
        </div>
    </div>
    <div class="mt-3">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col-md-8" data-aos="zoom-in-right" data-aos-offset="-800">
          <h2 class="text-muted">Deskripsi</h2>
          <p>${destination.deskripsi}</p>
        </div>
        <div class="col-md-4">
          <div class="row" data-aos="zoom-in-left" data-aos-offset="-800">
            <div class="col-1">
              <i class="fa-solid fa-location-dot theme-color"></i>
            </div>
            <div class="col">
              <p>${destination.alamat}</p>
            </div>
          </div>
          <div class="row" data-aos="zoom-in-left" data-aos-offset="-850">
            <div class="col-1">
              <i class="fa-solid fa-star theme-color"></i>
            </div>
            <div class="col">
              <p>${destination.rating}</p>
            </div>
          </div>
          <div class="row" data-aos="zoom-in-left" data-aos-offset="-850">
            <div class="col-1">
              <i class="fa-solid fa-phone theme-color"></i>
            </div>
            <div class="col">
              <p>${destination.cp}</p>
            </div>
          </div>
          <div class="row" data-aos="zoom-in-left" data-aos-offset="-850">
            <div class="col-1">
              <i class="fa-solid fa-table-list theme-color"></i>
            </div>
            <div class="col">
              <p>${destination.kategori}</p>
            </div>
          </div>          
        </div>
      </div>
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
  <div class='container text-center' data-aos="zoom-in-up" data-aos-offset="-830">
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
