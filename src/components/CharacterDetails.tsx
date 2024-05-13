import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TCharacterProps } from '../Types';
import useCharacters from '../hooks/useCharacters';
import Spinner from './Spinner';
import { getStatusColor } from '../utils';

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

        <div style={{
            backgroundImage: `linear-gradient(rgba(30, 151, 164, 0.9), rgba(15, 8, 2, 0.9)), url(${singleCharacter?.image})`,
        }} className='bg-cover bg-fixed flex flex-col w-screen h-screen items-center justify-center' >
            <div className='flex flex-col w-screen h-screen items-center justify-center' >
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={singleCharacter?.image}
                        alt={singleCharacter?.name} />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h4 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                Name: </span>
                            {" "}{singleCharacter?.name}</h4>

                        <div className="mb-4 mx-2 text-base font-normal text-gray-900 dark:text-orange-300 md:text-base">
                            <span className="text-transparent bg-clip-text bg-gradient-to-t to-orange-600 from-yellow-400">
                                Location: </span>
                            {" | "}{singleCharacter?.location?.name}</div>
                        <p>
                            <div className="flex items-center justify-center text-yellow-300">
                                {singleCharacter && <div
                                    className={`mx-4 h-2.5 w-2.5 rounded-full ${getStatusColor(singleCharacter?.status)} me-2`}></div>}
                                Status: {singleCharacter?.status}  <span className='ml-4 text-sky-400'>Gender: {singleCharacter?.gender}</span>
                            </div>
                        </p>

                    </div>
                </a>
                <Link to="/" className="my-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Back to Characters
                    </span>
                </Link>
            </div >
        </div>
    );
};

export default CharacterDetails;
