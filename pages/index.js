import { useState } from 'react';
import LaunchesGraphContainer from '../components/LaunchesGraphContainer';
import Button from '../components/Button';

const Home = () => {
    const [units, setUnits] = useState('kg');

    const toggleMassUnits = () => {
        setUnits(prevUnit => prevUnit === 'kg' ? 'lbs' : 'kg');
    };

    return (
        <>
            <h1>Welcome to SpaceX launches 🚀 visualisation tool</h1>
            <Button onClick={toggleMassUnits}>Toggle mass units (kg / lbs)</Button>
            <LaunchesGraphContainer units={units}/>
        </>
    );
};

export default Home;