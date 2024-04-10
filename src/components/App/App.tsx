import React, {useState} from 'react';
import './App.module.scss';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
export const App = () => {
        const [count, setCount] = useState<number>(0);
        const increment = () => setCount(prev => prev + 1 );
    return (
            <div>
                <Link to={'/about'}>About</Link>
                <br/>
                <Link to={'/shop'}>Shop</Link>
                <h1>{count}</h1>
                <button className={classes.button} onClick={increment}>inc</button>
                <div>Hello World!</div>
                <About/>
                <Outlet/>
            </div>
    );
};