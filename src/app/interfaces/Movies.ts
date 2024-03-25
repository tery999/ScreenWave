
export interface Movies {
    _id?: string,
    name: string,
    genre: string,
    year: number,
    picture: string,
    summary: string,
    actors: string,
    director: string,
    ownerId?: string,
    comments?: string[],
}