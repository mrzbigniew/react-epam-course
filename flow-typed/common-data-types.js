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

declare type ApiMoviesResponse = {
    data: {
        data: ApiMovieType[],
        total: number
    }
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
    error?: string
};

declare type MovieDataActionType = {
    action: string,
    data?: MovieDataActionType
}

declare type MovieIdActionType = {
    action: string,
    id?: number
}
