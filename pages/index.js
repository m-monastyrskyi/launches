import { useState } from 'react';
import LaunchesGraphContainer from '../components/LaunchesGraphContainer';
import Button from '../components/Button';
import styles from '../styles/Home.module.css'

const Home = () => {
    const [units, setUnits] = useState('kg');

    const toggleMassUnits = () => {
        setUnits(prevUnit => prevUnit === 'kg' ? 'lbs' : 'kg');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to SpaceX launches 🚀 visualisation tool</h1>
            <Button onClick={toggleMassUnits}>Toggle mass units (kg / lbs)</Button>
            <LaunchesGraphContainer units={units}/>
        </div>
    );
};

export default Home;