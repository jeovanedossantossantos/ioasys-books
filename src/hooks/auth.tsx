import React, { createContext, useEffect, useState } from 'react';
import { api } from '../service/api';



type PropsSigin = {
    sigin: boolean;
    setSigin:React.Dispatch<
    React.SetStateAction<boolean>>;
    
}

const DEFAULT_VALUE = {
  
    sigin: false,
    setSigin:()=>{},
    
    
};

export const AuthContext = createContext<PropsSigin>(DEFAULT_VALUE);

const ContextProvider =  ({children}: any) => {
    const [sigin, setSigin] = useState(DEFAULT_VALUE.sigin)
    
    
    return(
        <AuthContext.Provider value={{sigin, setSigin}}>
        
            {children}
        </AuthContext.Provider>
    );
}

export default ContextProvider