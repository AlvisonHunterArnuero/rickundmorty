import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_CHARACTERS } from '../gqlQueries';
import CharactersGrid from './CharactersGrid';

const CharactersWrapper: React.FC = () => {
    const [characters, setCharacters] = useState([]);

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-only',
    });

    useEffect(() => {
        if (data) {
            // eslint-disable-next-line no-unsafe-optional-chaining
            const { results } = data.characters;
            setCharacters(results);
        }
    }, [data]);

    if (error) return <p className="text-red-500 text-2xl text- w-full antialiased">Error : {error.message}</p>;

    return loading ? (
        <p className="text-yellow-300 text-2xl text- w-full antialiased">Loading...</p>
    ) : (
        <CharactersGrid characters={characters} />
    );
};

export default CharactersWrapper;
