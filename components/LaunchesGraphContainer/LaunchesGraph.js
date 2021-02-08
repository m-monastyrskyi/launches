import {
    Bar, BarChart, Brush, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts';
import { normalizeData } from '../../utils/utils';

const LaunchesGraph = ({ data, units }) => {
    const normalizedData = normalizeData(data);

    return (
        <div style={{ width: '100%', height: 500 }}>
            <ResponsiveContainer>
                <BarChart
                    data={normalizedData}
                    margin={{
                        top: 20, right: 30, left: 30, bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5"/>
                    <XAxis dataKey="date" tickSize={10} minTickGap={25}/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }}/>
                    <ReferenceLine y={0} stroke="#000"/>
                    <Brush dataKey="name" travellerWidth={10} height={30} stroke="#07C3C4" y={460}/>
                    <Bar dataKey="payloadMass" name={`Payload mass (${units})`} fill="#008C8D"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LaunchesGraph;