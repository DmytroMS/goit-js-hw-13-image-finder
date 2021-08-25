export default class NewApiService {
    constructor() {
        this.searchQuery = '';
    }

    fetchArticle() {
    const URL = 'https://pixabay.com/api/';
    const API_KEY = '23079700-bbc75e3a6b7c3c448487aea29';
   
    
   fetch(`${URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=1&per_page=12&key=${API_KEY}`)
    .then(r => r.json())
    .then(console.log)  

    }
    
    get query() {
        return this.searchQuery;
    }
    
    set query(newQuery) {
        this.searchQuery = newQuery; 
    }
}

// function fetchPictures() {
  
// const URL = 'https://pixabay.com/api/';
// const API_KEY = '23079700-bbc75e3a6b7c3c448487aea29';
   
    
// fetch(`${URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
//     .then(r => r.json())
//     .then(console.log) 

// }

// fetchPictures(dog);