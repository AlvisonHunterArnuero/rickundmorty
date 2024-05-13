type TlocationKeys = {
    name: string,
    dimension: string,
}

type Tepisode = {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    created: string;
    characters: {
        name: string;
        image: string;
        id: string;
    };
};

type Torigin = {
    id: string;
    name: string;
    dimension: string;
};

export type TCharacterProps = {
    id: string | number;
    image: string;
    name: string;
    gender: string;
    species: string;
    episode: Tepisode;
    status: string;
    location?: TlocationKeys;
    created: string;
    origin: Torigin;
    data?: object;
};

export type CharactersGridProps = {
    characters: TCharacterProps[];
};
