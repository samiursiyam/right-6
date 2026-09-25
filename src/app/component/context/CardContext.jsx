'use client'
import React, { createContext, useState } from 'react';


export const CardContext = createContext({})



const CardProvider = ({children}) => {

    const [plan , setPlan] =useState([]);
    const [saved , setSaved] = useState([]);

    const shareData = {
        plan, setPlan, saved ,setSaved,
    }


    return (
        <div>
            <CardContext.Provider value={shareData}> {children}</CardContext.Provider>
        </div>
    );
};

export default CardProvider;