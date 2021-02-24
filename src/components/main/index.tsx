import React from 'react'
import pic1 from '../assets/pic1.jpg'
import './style.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return(
        <div>
            <div className="container">
           <div className="row">
               <div className="col-md-6">
                   <div className="heading">
                       <h1>SpaceX Rocket Launches Information</h1>
                   </div>
                   <div className="lunch-btn">
                       <Link to="/launches" className="btn btn-info">Rocket Launches</Link>
                   </div>
               </div>
               <div className="col-md-6">
                   <div className="pic">
                       <img src={pic1} alt="spacex-img"/>

                   </div>
               </div>
           </div>

            </div>
        </div>
    )
}

export default Home