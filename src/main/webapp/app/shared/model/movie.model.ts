export interface IMovie {
    id?: number;
    movieName?: string;
    directorName?: string;
    year?: number;
}

export class Movie implements IMovie {
    constructor(public id?: number, public movieName?: string, public directorName?: string, public year?: number) {}
}
