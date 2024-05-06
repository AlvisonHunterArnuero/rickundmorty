type TlocationKeys = {
    name: string,
    dimension: string,
}


export type TCharacterProps = {
    id: string | number;
    image: string;
    name: string;
    gender: string;
    species: string;
    status: string;
    location?: TlocationKeys;
    created: string;
    data?: object;
};

export type CharactersGridProps = {
    characters: TCharacterProps[];
};
