import { useEffect, useState } from 'react';
import useCharacters from '../hooks/useCharacters';
import Spinner from './Spinner';
import CharactersTable from './CharactersTable';

const CharactersWrapper: React.FC = () => {
    const [characters, setCharacters] = useState([]);

    const { error, loading, data } = useCharacters();

    useEffect(() => {
        if (data) {
            // eslint-disable-next-line no-unsafe-optional-chaining
            const { results } = data.characters;
            setCharacters(results);
        }
    }, [data]);

    if (error)
        return (
            <p className="w-full text-2xl antialiased text-red-500 text-">
                Error : {error.message}
            </p>
        );

    return loading ? (
        <Spinner />
    ) : (
        <CharactersTable characters={characters} />
    );
};

export default CharactersWrapper;
