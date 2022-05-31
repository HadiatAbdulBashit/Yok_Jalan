const createItemTemplate = (destination) => `
    <div class="col">
      <div class="card m-2 border-0 rounded-5 bg-secondary bg-opacity-25 ">
        <div class="item-header">
          <img src="${destination.pictureId}" class="card-img-top img-fluid item-image" alt="Gambar ${destination.nama}" loading="lazy">
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
  <div class="row">
    <h2 class="text-center mb-5">${destination.nama}</h2>
    <div class="col-md-4">
      <img src="${destination.pictureId}" alt="logo" class="img-fluid rounded">
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col">
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
      </div>
    </div>
  </div>
`;

export { createItemTemplate, createDetailTemplate };
