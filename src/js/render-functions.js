export function imagesTemplate(image) {
    return `<li class="gallery-item">
      <a href="${image.largeImageURL}"><img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"></a>
        <ul class="gallery-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes">${image.likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views">${image.views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments">${image.comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads">${image.downloads}</p>
          </li>
        </ul>
    </li>`;
}

export function galleryTemplate(arr) {
    return arr.map(image => imagesTemplate(image)).join("");
}

export function showLoader(loader) {
    loader.classList.remove("loader-hidden");
}

export function hideLoader(loader) {
    loader.classList.add("loader-hidden");
}