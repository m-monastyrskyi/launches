import { format } from 'date-fns';

export const normalizeData = data => data.map(launch => {
    const date = format(new Date(launch.launch_date_local), 'dd/MM/yyyy');
    const payloadMass = launch.rocket.second_stage.payloads[0].payload_mass_kg;

    return { date, payloadMass };
});