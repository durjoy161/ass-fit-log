"use client";
import React, { createContext, useState } from 'react';

export const GymContext = createContext({
    addPlan: [],
    setaddPlan: () => { },
    saveGym: [],
    setsaveGym: () => { },
});
const GymProvider = ({ children }) => {
    const [addPlan, setaddPlan] = useState([]);
    const [saveGym, setsaveGym] = useState([]);
    const sharedata = {
        addPlan,
        setaddPlan,
        saveGym,
        setsaveGym
    }
    return (
        <GymContext.Provider value={sharedata}>{children}</GymContext.Provider>
    );
};

export default GymProvider;