import React, { useState, useEffect, useContext  } from "react";
import { Context } from "../store/appContext";

const Planets = ()=>{
    
    const {store, actions} = useContext(Context)
    console.log(store.planets)
    return(
        <>
        {
            store.planets.map((element, index)=>{
                return(
                    <>
                    <h1>{element.name}</h1>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                      }}
                    
                    />
                    
                    </>
                )

            })
        }
        
        
        </>
        
        
    )
}

export default Planets
