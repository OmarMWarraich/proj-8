import React, { useEffect } from  'react'
import { useLaunchesQuery } from '../../generated/graphql'

import Launch from './launch'
import Loading from '../loader/loading'
import useLocalStorage from '../localStorage/index'
export default function  LaunchFunction(){
    const {data, loading, error } = useLaunchesQuery()
    const [DarkTheme ,setDarkTheme] = useLocalStorage('', true)
    console.log("data lunch " , DarkTheme)

      useEffect(()=>{
            if(data ? data : null){
              setDarkTheme(data)
            }
      },[setDarkTheme , data ])



      if(loading ){
        return <Loading/>
      }


      if (error || !data){
       return (
         <div>

           <Launch data={DarkTheme}/>
         </div>
       )
      }


       else
    return (
     <div>
    <Launch data={data} />

      </div>

    )
}
