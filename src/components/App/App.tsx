import React, {useState} from 'react';
import './App.module.scss';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import imgPng from '@/assets/imgpng.png';
import imgJpg from '@/assets/imgjpg.jpg';
import IconSvg from '@/assets/imgsvg.svg';

function todo(a:number) {
    console.log(a);
}
export const App = () => {
        const [count, setCount] = useState<number>(0);
        const increment = () => setCount(prev => prev + 1 );
        todo(5);
    return (
        <div>
            <img width={125} height={125} src={imgPng} alt="imgPNG"/>
            <img width={125} height={125} src={imgJpg} alt="imgJPG"/>
            <div>
                <IconSvg width={125} height={125}/>
            </div>
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