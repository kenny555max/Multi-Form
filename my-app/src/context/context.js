import React, { useState, createContext } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [step, setStep] = useState(0);
    const [fields, setFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: "",
    });

    const handleChange = (e) => {
        setFields({...fields, [e.target.name]: e.target.value})
    }

    return <GlobalContext.Provider value={{
            step,
            setStep,
            fields,
            setFields,
            handleChange,
        }}>
            { children }
        </GlobalContext.Provider>
}

export default GlobalContext;