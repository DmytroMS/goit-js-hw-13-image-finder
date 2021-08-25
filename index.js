import NewApiService from './src/apiService';
import cardsTpl from './templetes/cards.hbs';




const refs = {
    searchForm: document.querySelector('.js-search-form'),
    gallery: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector('[data-action="Load-more"]'),
}

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const newApiService = new NewApiService();



function onSearch(e) {
    e.preventDefault();
   // cleanUpGalleryContainer();
    newApiService.query = e.currentTarget.elements.query.value.trim();
    newApiService.resetPage();
    newApiService.fetchArticle().then(cards => {
        // если поставить очистку контейнера в этом then то сначала будет поиск новых картинок, а потом очистка старых и рендер новых
        cleanUpGalleryContainer();  
        cardsRender(cards)}
   );
    
}



function onLoadMore() {
      newApiService.fetchArticle().then(cardsRender);
}

function cardsRender(cards) {
    refs.gallery.insertAdjacentHTML('beforeend', cardsTpl(cards));
}

function cleanUpGalleryContainer() {
    refs.gallery.innerHTML = '';
}