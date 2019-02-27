import initialState from '../store/initialState';

const fetchCount = (state = initialState.fetchCount, action) => {
  switch (action.type) {
    case 'INCREASE_FETCH_COUNTER':
      return ++state;
    case 'DECREASE_FETCH_COUNTER':
      return --state;
    default:
      return state;
  }
};

export default fetchCount
