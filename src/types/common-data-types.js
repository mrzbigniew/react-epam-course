// @flow

export type ApiMovieType = {

}

export type ApiMoviesResponse = {
    data: {
        data: ApiMovieType[],
        total: number
    }
}

export type StoreMovieType = {

}

export type StoreMoviesType = {

}

export type StoreSpinnerType = {

}

export type StoreSearchType = {

}

export type StoreResultsType = {

}

export type StoreStateType = {
    movie: StoreMovieType,
    movies: StoreMoviesType,
    spinner: StoreSpinnerType,
    search: StoreSearchType,
    results: StoreResultsType,
}
