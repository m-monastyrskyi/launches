import { useQuery } from 'react-query';
import { gql, request } from 'graphql-request';

export function useLaunches(){
    const url = 'https://api.spacex.land/graphql/';
    const query = gql`
        query {
            launchesPast(limit: 100) {
                launch_date_local
                rocket {
                    second_stage {
                        payloads {
                            payload_mass_kg
                        }
                    }
                }
            }
        }`;

    return useQuery('launches', async () => {
        const { launchesPast } = await request(url, query);

        return launchesPast;
    });
}
