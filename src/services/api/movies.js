const endpoint = 'http://react-cdp-api.herokuapp.com/ ';

const queryTag = (strings, ...values) => values[1] ? values.join('?') : values[0];

const generateQueryString = params => (
    params ? Object.keys(params)
    .filter(key => params[key])
    .map(key => [key, params[key].toString().trim()].join('='))
    .join('&') : ''
);

export const fetchMovies = params => fetch(
    queryTag `${endpoint}${generateQueryString(params)}`, {
        method: 'GET',
        mode: 'cros'
    }
)

export const fetchMovie = id => fetch(
    `${endpoint}${id}`, {
        method: 'GET',
        mode: 'cros'
    }
)
