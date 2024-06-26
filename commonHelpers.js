import{a as v,S,i as q}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&h(f)}).observe(document,{childList:!0,subtree:!0});function l(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(r){if(r.ep)return;r.ep=!0;const s=l(r);fetch(r.href,s)}})();async function p(e,t){return(await v.get("https://pixabay.com/api/",{params:{key:"44402114-eddf09e8e038ad1f496236950",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}function $(e){return`<li class="gallery-item">
      <a href="${e.largeImageURL}"><img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
        <ul class="gallery-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes">${e.likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views">${e.views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments">${e.comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads">${e.downloads}</p>
          </li>
        </ul>
    </li>`}function y(e){return e.map(t=>$(t)).join("")}function u(e){e.classList.remove("loader-hidden")}function o(e){e.classList.add("loader-hidden")}const g=new S(".gallery a",{}),L=document.querySelector(".form"),m=document.querySelector(".gallery"),a=document.querySelector(".loader"),i=document.querySelector(".load");let n,c,w;function d(e){q.show({message:e})}function M(){const t=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:t,left:0,behavior:"smooth"})}function b(){n>=w&&(o(a),o(i),d("We're sorry, but you've reached the end of search results."))}L.addEventListener("submit",O);async function O(e){if(e.preventDefault(),o(i),m.innerHTML="",c=L.elements.search.value.trim(),!!c){n=1,u(a);try{const t=await p(c,n);if(!t.hits.length){d("Sorry, there are no images matching your search query. Please try again!"),o(a);return}const l=y(t.hits);m.innerHTML=l,w=Math.ceil(t.totalHits/15)}catch(t){d(t)}g.refresh(),o(a),u(i),b()}}i.addEventListener("click",P);async function P(){o(i),u(a),n+=1;try{const e=await p(c,n),t=y(e.hits);m.insertAdjacentHTML("beforeend",t)}catch{d("We're sorry, but you've reached the end of search results.")}g.refresh(),o(a),u(i),M(),b()}
//# sourceMappingURL=commonHelpers.js.map
