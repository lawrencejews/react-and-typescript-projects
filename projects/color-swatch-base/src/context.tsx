import * as React from 'react';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';

interface RGBcontextType extends RGBColorType{
    dispatch: React.Dispatch<AdjustmentAction>
}
export const RGBContext = React.createContext<RGBcontextType | null>({} as RGBcontextType);

export const RGBContextProvider = ({ children } : { children:React.ReactNode}) => {
    const [rgb, dispatch] = React.useReducer, (reducer, {
        red: 0,
        green: 0,
        blue: 0
    });
    return <RGBContext.Provider value={ ...rgb, dispatch}>
         {children}
     </RGBContext.Provider>
}