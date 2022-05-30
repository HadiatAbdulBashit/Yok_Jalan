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

export { createItemTemplate };
