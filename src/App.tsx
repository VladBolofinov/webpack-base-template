import React, { type FC, Suspense, useState } from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from '@/pages/shop/Shop.lazy';
import imgPng from '@/assets/imgpng.png';
import imgJpg from '@/assets/imgjpg.jpg';
import IconSvg from '@/assets/imgsvg.svg';

export const App: FC = () => {
    const [count, setCount] = useState<number>(0);
    const increment = (): void => { setCount(prev => prev + 1); };
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <img width={125} height={125} src={imgPng} alt="imgPNG"/>
            <img width={125} height={125} src={imgJpg} alt="imgJPG"/>
            <div><IconSvg width={125} height={125}/></div>
            <h1>{count}</h1>
            <button onClick={increment}>inc</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<LazyAbout/>}/>
                    <Route path={'/'} element={<LazyShop/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
