// @flow

declare type ApiMovieType = {
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

declare type StoreMoviesDataType = {
    data: ApiMovieType[],
    total: number
}

declare type ApiMoviesResponse = {
    data: StoreMoviesDataType
}

declare type StoreLoadingStatusType = {
    isLoading: boolean,
    error: string | null
}

declare type StoreMovieType = {
    data: ApiMovieType,
    loadStatus: StoreLoadingStatusType
}

declare type StoreMoviesType = {
    data: ApiMovieType[],
    loadStatus: StoreLoadingStatusType
}

declare type StoreSearchType = {
    filter: string,
    text: string
}

declare type StoreResultsType = {
    sort: string
}

declare type StoreStateType = {
    movie: StoreMovieType,
    movies: StoreMoviesType,
    spinner: boolean,
    search: StoreSearchType,
    results: StoreResultsType,
}

declare type LoadStatusAction = {
    type: string,
    error?: string | null
};

declare type MovieDataActionType = {
    type: string,
    data?: MovieDataActionType | null
}

declare type MovieIdActionType = {
    type: string,
    id?: number | null
}

declare type MoviesActionDataType = {
    type: string,
    data?: ApiMovieType[],
    total: number
}


declare type StoreResultsStateType = {
    sort: string
}


declare type ResultsActionType = {
    type: string,
    value: string
}
