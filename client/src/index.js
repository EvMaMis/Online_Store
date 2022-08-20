import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import ClothStore from "./store/ClothStore";

export const Context = createContext(null)
const cont = document.getElementById('root')
const root = ReactDOM.createRoot(cont)

root.render(
    <Context.Provider value={{
        user: new UserStore(),
        cloth: new ClothStore(),
    }}>
        <App />
    </Context.Provider>
);
