import { format } from 'date-fns';

export const normalizeData = data => data.map(launch => {
    const date = format(new Date(launch.launch_date_local), 'dd/MM/yyyy');
    const payload = launch.rocket.second_stage.payloads[0];
    const payloadMass = payload.payload_mass_kg || payload.payload_mass_lbs;

    return { date, payloadMass };
});