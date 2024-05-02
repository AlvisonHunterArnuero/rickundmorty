import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_CHARACTERS } from '../gqlQueries';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-only',
    });

    useEffect(() => {
        if (data) {
            // eslint-disable-next-line no-unsafe-optional-chaining
            const { results } = data.characters;
            console.log(data);
            setCharacters(results);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    type characterProps = {
        image: string;
        id: string;
        name: string;
        gender: string;
        species: string;
        status: string;
        created: string;
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return characters.map(
        ({
            image,
            id,
            name,
            gender,
            species,
            status,
            created,
        }: characterProps) => (
            <div className="w-full mx-auto" key={id}>
                <a
                    href="#"
                    className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={`${image}`}
                        alt={name}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Created: {created.substring(0, 10)} | Species: {species}{' '}
                            | GENDER: {gender === '♂' ? 'Male' : '♀'} | Status:{' '}
                            {status}
                        </p>
                    </div>
                </a>
            </div>
        )
    );
};

export default Characters;
