import { useQuery } from 'react-query';
import { gql, request } from 'graphql-request';

export function useLaunches(units){
    const url = 'https://api.spacex.land/graphql/';
    const query = gql`
        query {
            launchesPast(limit: 100) {
                id
                launch_date_local
                rocket {
                    second_stage {
                        payloads {
                            payload_mass_${units}
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
