import React from 'react'

type TCharacterProps = {
    id: string;
    image: string;
    name: string;
    gender: string;
    species: string;
    status: string;
    created: string;
};

type CharactersGridProps = {
    characters: TCharacterProps[];
};

const CharactersGrid: React.FC<CharactersGridProps> = ({ characters }) => {
    return (
        <>
            {characters.map(({
                id,
                image,
                name,
                gender,
                species,
                status,
                created,
            }) => (
                <div className="w-8/12 mx-auto" key={id}>
                    <a
                        href="#"
                        className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={image}
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
            ))}
        </>
    )
}

export default CharactersGrid