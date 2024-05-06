import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { CharactersGridProps } from '../Types';
import { getStatusColor } from '../utils';

const CharactersTable: React.FC<CharactersGridProps> = ({ characters }) => {

    return !characters ? (
        <Spinner />
    ) : (
        <div className="mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Origin
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map(
                        ({
                            id,
                            image,
                            name,
                            gender,
                            location,
                            species,
                            status,
                            created,
                        }) => {
                            return (
                                <tr
                                    key={id + name}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                ><th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src={image}
                                            alt={name}
                                        />
                                        <div className="ps-3">
                                            <div className=" text-white">
                                                <Link className="antialiased hover:text-yellow-400" to={`/${id}`}> {name}</Link>
                                            </div>
                                            <div className="font-normal text-gray-500">
                                                {created.replace(/^(\d{4}-\d{2}-\d{2}).*/, "$1")}
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">{gender}</td>
                                    <td className="px-6 py-4">{species}</td>
                                    <td className="px-6 py-4">{location?.name}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor(status)} me-2`}></div>
                                            {status}
                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CharactersTable;

