import React from 'react'
import './loading.css'
import Skeleton from "react-loading-skeleton";
export default function Loading() {


    return (
        <section>
            <div className="App">

            <div className='heading-space'>
            <Skeleton height={30} width={`30%`} />

                </div>

                <ul className="list">
                    {Array(9)
                        .fill({ start: 0, end: 100 })
                        .map((item, index) => (
                            <li className="card" key={index} >
                                    <div className='launch-margin'>
                                        <div className='launch-mission' style={{ paddingTop: '10px' }}>
                                        <span className='sp-one'>
                                            <Skeleton circle={true} height={30} width={30} style={{ marginRight: '10px', color: 'grey' }} />
                                           </span>
                                           <span className='sp-two'>
                                           <Skeleton height={30} width={`50%`} />


                                           </span>
                                        </div>
                                        <div className='launch-site'>
                                            <Skeleton height={30} width={`100%`} />
                                        </div>
                                        <div className='launch-site'>
                                            <Skeleton height={30} width={`60%`} />

                                        </div>
                                        <div className='launch-status'>
                                            <Skeleton height={30} width={`50%`} />

                                        </div>
                                        <div className='launch-btu' style={{ marginBottom: '30px' }}>
                                            <Skeleton height={35} width={`40%`} />

                                        </div>
                                    </div>
                            </li>
                        ))}
                </ul>


            </div>
        </section>
    )
}