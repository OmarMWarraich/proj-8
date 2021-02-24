import gql from 'graphql-tag'

export const QUERY_LAUNCHDET = gql`
    query LaunhDetail($id : String){
        launch(id : $id){
            flight_number
            details
            mission_name
            launch_date_local
            launch_success
            launch_site{
                site_name
            }
            rocket{
                rocket_name
            }
            links{
                flickr_images
                video_link
            }
        }
    }
`