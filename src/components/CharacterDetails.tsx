import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { TCharacterProps } from '../Types';
import useCharacters from '../hooks/useCharacters';
import Spinner from './Spinner';

const CharacterDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [singleCharacter, setSingleCharacter] =
        useState<TCharacterProps>();

    const { error, loading, data } = useCharacters();

    const NavigateTo = () => <Navigate to="/error404" replace />;

    useEffect(() => {
        if (data) {
            // eslint-disable-next-line no-unsafe-optional-chaining
            const { results } = data.characters;
            console.log(results)
            const singleChar = results?.find(
                (el: TCharacterProps) => el.id === id
            );
            singleChar && setSingleCharacter(singleChar);
        }
    }, [data, id]);

    if (error)
        return (
            <p className="w-full text-2xl antialiased text-red-500">
                Error : {error.message}
            </p>
        );

    if (singleCharacter === undefined) {
        NavigateTo();
    }

    return loading ? (
        <Spinner />
    ) : (
        <div className="flex flex-col items-center justify-center h-screen gap-3 text-white text-bold">
            <h1 className="text-green-500">
                Character Details for ID: {id}
            </h1>
            <p className="text-2xl antialiased text-bold text-amber-300">
                {singleCharacter?.name}
            </p>
            <img
                className="w-40 h-40 transition border-2 border-red-400 border-solid rounded-full hover:border-4 hover:border-red-600"
                src={singleCharacter?.image}
                alt={singleCharacter?.name}
            ></img>
        </div>
    );
};

export default CharacterDetails;
