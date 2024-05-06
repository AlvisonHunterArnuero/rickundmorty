export const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
        case 'alive':
            return 'bg-green-500';
        case 'dead':
            return 'bg-gray-500';
        default:
            return 'bg-yellow-500';
    }
};