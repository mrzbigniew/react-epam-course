const endpoint = 'http://react-cdp-api.herokuapp.com/';

const queryTag = (strings, ...values) => {
    const value = values[2] ? `${values[0]}${values[1]}?${values[2]}` : `${values[0]}${values[1]}`;
    return value;
};

const generateQueryString = params => (
    params ? Object.keys(params)
    .filter(key => params[key])
    .map(key => [key, params[key].toString().trim()].join('='))
    .join('&') : ''
);

export const fetchData = ({path, params}) => fetch(
    queryTag`${endpoint}${path}${generateQueryString(params)}`, {
        method: 'GET',
        mode: 'cros'
    }
);

export const fetchMovies = params => fetchData({path: 'movies', params});

export const fetchMovie = id => fetchData({path: `movies/${id}`});
