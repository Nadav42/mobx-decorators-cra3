import React, { useContext } from "react";

const StoreContext = React.createContext();

export const StoreProvider = ({ store, children }) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStoreContext = () => {
    return useContext(StoreContext);
};