import { useLaunches } from '../../hooks/useLaunches';
import LaunchesGraph from './LaunchesGraph';

const LaunchesGraphContainer = () => {
    const { data, error, isFetching } = useLaunches();

    if ( isFetching ) {
        return <h1>Loading...</h1>;
    }

    if ( error ) {
        return <>
            <h1>Sorry, something went wrong...</h1>
            <pre>{error.message}</pre>
        </>;
    }

    return <LaunchesGraph data={data}/>;
};

export default LaunchesGraphContainer;