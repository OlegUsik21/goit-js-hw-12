import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImages } from "./js/pixabay-api";
import { galleryTemplate, showLoader, hideLoader } from "./js/render-functions";

const lightBox = new SimpleLightbox('.gallery a', {});

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loaderBtn = document.querySelector(".loader");
const loadBtn = document.querySelector(".load")

let page;
let userValue;
let maxPages;

function errorMessage(message) {
    iziToast.show({
        message,
    });
}

function pageScroll() {
    const formItem = document.querySelector(".list-item");
    const height = formItem.getBoundingClientRect().height;
    window.scrollBy({
        top: height,
        left: 0,
        behavior: "smooth",
    });
}

function status() {
    if (page >= maxPages) {
        hideLoader(loaderBtn);
        hideLoader(loadBtn);
        errorMessage("We're sorry, but you've reached the end of search results.");
    }
}

form.addEventListener("submit", formSubmit);

async function formSubmit(event) {
    event.preventDefault();

    hideLoader(loadBtn);
    gallery.innerHTML = "";

    userValue = form.elements.search.value.trim();
    if (!userValue) return
    page = 1;
    showLoader(loaderBtn);

    try {
        const data = await getImages(userValue, page);
        if (!data.hits.length) {
            errorMessage("Sorry, there are no images matching your search query. Please try again!")
            hideLoader(loaderBtn);
            return;
        }

        const markup = galleryTemplate(data.hits);
        gallery.innerHTML = markup;
        maxPages = Math.ceil(data.totalHits / 15);
    } catch (error) { errorMessage(error) };

    lightBox.refresh()
    hideLoader(loaderBtn);
    showLoader(loadBtn);
    status();
}

loadBtn.addEventListener("click", loadClick);

async function loadClick() {
    hideLoader(loadBtn);
    showLoader(loaderBtn);
    page += 1;

         try {
    const data = await getImages(userValue, page);
    const markup = galleryTemplate(data.hits);
    gallery.insertAdjacentHTML("beforeend", markup);
    } catch (error) { errorMessage("We're sorry, but you've reached the end of search results.") };
    
    lightBox.refresh()
    hideLoader(loaderBtn);
    showLoader(loadBtn);
    pageScroll();
    status();
}