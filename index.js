import NewApiService from './src/apiService';
import cardsTpl from './templetes/cards.hbs';
import LoadMoreBtn from './src/load-more-Btn';


const refs = {
    searchForm: document.querySelector('.js-search-form'),
    gallery: document.querySelector('.js-gallery'),
 //   loadMoreBtn: document.querySelector('[data-action="Load-more"]'),
}

refs.searchForm.addEventListener('submit', onSearch);


const newApiService = new NewApiService();
const loadMoreBtn = new LoadMoreBtn(
    {
        selector: '[data-action="Load-more"]',
        hidden: true,
    }
);

loadMoreBtn.refs.button.addEventListener('click', onLoadMore);



function onSearch(e) {
    e.preventDefault();
   // cleanUpGalleryContainer();
    newApiService.query = e.currentTarget.elements.query.value.trim();
    if (newApiService.query === '') {
        return alert('уточните запрос');
    }
    loadMoreBtn.show();
    loadMoreBtn.disable();
    newApiService.resetPage();
    newApiService.fetchArticle().then(cards => {
        // если поставить очистку контейнера в этом then то сначала будет поиск новых картинок, а потом очистка старых и рендер новых
        cleanUpGalleryContainer();  
        cardsRender(cards);
        loadMoreBtn.enable();
    });  
}

function onLoadMore() {
    loadMoreBtn.disable();
    newApiService.fetchArticle().then(cards => {
        cardsRender(cards);
        loadMoreBtn.enable();
    });
}

function cardsRender(cards) {
    refs.gallery.insertAdjacentHTML('beforeend', cardsTpl(cards));
}

function cleanUpGalleryContainer() {
    refs.gallery.innerHTML = '';
}