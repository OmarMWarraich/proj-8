import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import { Link } from 'react-router-dom'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
interface Props {
    data: LaunchesQuery
}



const Launch: React.FC<Props> = ({ data }) => {

    const displayData = data.launches?.map((launch, index) => {
        return (

            <div key={index} className='launch-box'>
                <div className='launch-margin'>
                    <div className='launch-mission'>
                        <span className='sp-one'>{`${launch?.flight_number}. `}</span>
                        <Link to={`launch/${launch?.flight_number}`}>
                            <span className='sp-two'>Mission: {launch?.mission_name}</span>
                        </Link>
                    </div>
                    <div className='launch-site'>
                        <span className='sp-one'>LaunchSite: </span><span>{launch?.launch_site?.site_name}</span>
                    </div>
                    <div className='launch-site'>
                        <span className='sp-one'>Launch year: </span><span>{launch?.launch_year}</span>
                    </div>
                    <div className='launch-status'>
                        <span className='sp-one'>status: <span className={launch?.launch_success ? 'true' : 'false'}>{launch?.launch_success ? 'sucessful' : 'failed'}</span></span>
                    </div>
                    <div className='launch-btu'>
                        <Link to={`/launch/${launch?.flight_number}`}>
                            <button className='btn btn-info'>
                                <span>details</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className='display-div-launch'>
            <div className='heading-space'>
                <h1>Launches</h1>
            </div>
            <div className='display-data-launch'>
                {displayData}
            </div>
            <div>

            </div>
        </div >
    )
}
export default Launch;