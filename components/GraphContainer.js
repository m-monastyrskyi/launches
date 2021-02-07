import { useLaunches } from '../hooks/useLaunches';

const GraphContainer = () => {
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

    return (
        <code>
            {JSON.stringify(data)}
        </code>
    );
};

export default GraphContainer;