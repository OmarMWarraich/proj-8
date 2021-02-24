import gql from 'graphql-tag'

export const QUERY_LAUNCH = gql`
    query Launches{
        launches {
            flight_number
            mission_name
            upcoming
            details
            launch_year
            launch_date_local
            launch_success
            links{
              flickr_images
            }
            rocket{
                rocket_name
            }
            launch_site{
                site_name
            }
        }
    }
`
