import React from 'react'
import { useLaunhDetailQuery } from '../../generated/graphql'
import LaunchDet from './launchdet'
import LaunchDetLocal from './launchesLocalData'
import SingleLoading from '../loader/singleLoader'
import { useParams } from 'react-router-dom'
import useLocalStorage from '../localStorage/index'

interface ParamTypes {
    id: string
  }

// router

const LaunchDetFunction = () => {
  const [DarkTheme ] = useLocalStorage('', true)
   console.log("data from local" , DarkTheme);

  const { id } = useParams<ParamTypes>()
    const { data, loading, error  } = useLaunhDetailQuery({variables : { id : id }})
    console.log("data lunches id  " , id)

    let FilterData = DarkTheme.launches.filter((item:any)=>{
     if(item.flight_number === Number(id) )
     {
        return item
     }
     return item
    })


    console.log("data" , FilterData)

    let obj = Object.assign({} , ...FilterData)




    if (loading){
        return <SingleLoading />
    }
    if(error || !data){
      return (
        <LaunchDetLocal data={obj} />
      )
    }

    return (

    <LaunchDet data={data} />
    )
    }

export default LaunchDetFunction