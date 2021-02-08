import { useEffect } from 'react';
import { useLaunches } from '../../hooks/useLaunches';
import LaunchesGraph from './LaunchesGraph';
import { useQueryClient } from 'react-query';

const LaunchesGraphContainer = ({ units = 'kg' }) => {
    const queryClient = useQueryClient();
    const { data, error, isFetching } = useLaunches(units);

    useEffect(() => {
        queryClient.fetchQuery('launches');
    }, [units]);

    if ( isFetching ) {
        return <h1>Loading...</h1>;
    }

    if ( error ) {
        return <>
            <h1>Sorry, something went wrong...</h1>
            <pre>{error.message}</pre>
        </>;
    }

    return <LaunchesGraph data={data} units={units}/>;
};

export default LaunchesGraphContainer;