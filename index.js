import NewApiService from './src/apiService';




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
    newApiService.query = e.currentTarget.elements.query.value.trim();
    newApiService.fetchArticle();   
}



function onLoadMore() {
      newApiService.fetchArticle();
}

// console.log(newApiService);
// function fetchPictures() {
  
// const URL = 'https://pixabay.com/api/';
// const API_KEY = '23079700-bbc75e3a6b7c3c448487aea29';
   
    
// fetch(`${URL}?image_type=photo&orientation=horizontal&q=dog&page=1&per_page=12&key=${API_KEY}`)
//     .then(r => r.json())
//     .then(console.log) 

// }

// fetchPictures();