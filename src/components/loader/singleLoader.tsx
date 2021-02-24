import React from 'react'
// import ReactLoading from 'react-loading'
import './loading.css'
import Skeleton from "react-loading-skeleton";

export default function SingleLoading() {

    return (
        <section>
            <div className="App">



                <ul className="list" style={{width:'100%'}}>

                    <li className="card" style={{width:'100%'}} >
                        <div className='item-margin'>
                                <div>
                                    <div className='item-mission' style={{ paddingTop: '10px' }}>
                                        <Skeleton circle={true} height={30} width={30} style={{ marginRight: '10px', color: 'grey' }} />
                                        <Skeleton height={30} width={`30%`} />
                                    </div>
                                    <div className='item-site'>
                                        <Skeleton height={30} width={`60%`} />
                                    </div>
                                    <div className='item-site'>
                                        <Skeleton height={30} width={`40%`} />
                                    </div>
                                    <div className='item-site'>
                                        <Skeleton height={30} width={`40%`} />

                                    </div>
                                    <div className='item-p'>
                                        <Skeleton height={40} width={`100%`} />

                                    </div>
                                    <div className='item-p'>
                                    <Skeleton height={30} width={`30%`} />
                                        </div>

                                </div>
                                </div>
                            </li>

                </ul>


            </div>
        </section>
    )
}
