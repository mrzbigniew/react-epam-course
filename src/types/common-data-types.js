// @flow

export type ApiMovieType = {
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    genres: string[],
    runtime: number
}

export type ApiMoviesResponse = {
    data: {
        data: ApiMovieType[],
        total: number
    }
}

export type StoreLoadingStatusType = {
    islLading: boolean,
    error: string
}

export type StoreMovieType = {
    data: ApiMovieType,
    loadStatus: StoreLoadingStatusType
}

export type StoreMoviesType = {
    data: ApiMovieType[],
    loadStatus: StoreLoadingStatusType
}

export type StoreSearchType = {
    filter: string,
    text: string
}

export type StoreResultsType = {
    sort: string
}

export type StoreStateType = {
    movie: StoreMovieType,
    movies: StoreMoviesType,
    spinner: boolean,
    search: StoreSearchType,
    results: StoreResultsType,
}
