import React from 'react'
import { Metric } from './Metric'

export const ContentRowMovies = () => {
    const metrics=[
        {
            title:"Movies" ,
            color:"primary",
            icon:"fa-film"
        },
        {
            title:"Users" ,
            color:"success",
            icon:"fa-user" 

        },
        {
            title:"Awards" ,
            color:"warning",
            icon:"fa-award"
        }
    ]
    return (
        <div className="row">
      {      
    metrics.map((metric,i)=>(
        <Metric {...metric}/>
    ))
}
    
 
    

   </div>
  )
}
