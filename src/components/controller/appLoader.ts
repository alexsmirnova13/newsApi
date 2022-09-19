import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '5c72513adc4c48bfbde36ebf0b79ac52', // получите свой ключ https://newsapi.org/
            // apiKey: ''
        });
    }
}

export default AppLoader;
