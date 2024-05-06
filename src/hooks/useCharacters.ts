import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../gqlQueries';

export const useCharacters = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-only',
    });

    return { loading, error, data }
}

export default useCharacters