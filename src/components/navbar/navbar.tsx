import React from 'react'
import './styles.css'

import spacex from '../assets/spacex.png'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div>
                <Link to='/'>
                    <span>
                        <img src={spacex} alt="spacex" height='100px' width='300px' />
                    </span>
                </Link>
            </div>
        </div>
    )
}
