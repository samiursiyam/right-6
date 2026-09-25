'use client'
import React, { createContext, useState } from 'react';

export const CardContext = createContext({});

const CardProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    // Plan theke delete korar function
    const removeFromPlan = (id) => {
        console.log("Context: Removing from Plan, ID:", id);
        setPlan((prevPlan) => 
            // item.id ba item._id duitai check kora hoyeche
            prevPlan.filter((item) => item.id !== id && item._id !== id)
        );
    };

    // Saved theke delete korar function
    const removeFromSaved = (id) => {
        console.log("Context: Removing from Saved, ID:", id);
        setSaved((prevSaved) => 
            prevSaved.filter((item) => item.id !== id && item._id !== id)
        );
    };

    const shareData = {
        plan, 
        setPlan, 
        saved, 
        setSaved,
        removeFromPlan,   
        removeFromSaved   
    };

    return (
        <CardContext.Provider value={shareData}>
            {children}
        </CardContext.Provider>
    );
};

export default CardProvider;