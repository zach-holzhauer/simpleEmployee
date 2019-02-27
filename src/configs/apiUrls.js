import prodURLs from './apiUrls.prod';
import devURLs from './apiUrls.dev'

let apiUrls = {};
if (process.env.NODE_ENV === 'production') {
  apiUrls = {...prodURLs};
} else {
  apiUrls = {...devURLs}
}

export default apiUrls;

