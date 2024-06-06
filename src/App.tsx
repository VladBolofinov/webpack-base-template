import { type FC, Suspense } from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from '@/pages/shop/Shop.lazy';
import imgPng from '@/assets/imgpng.png';
import imgJpg from '@/assets/imgjpg.jpg';
import IconSvg from '@/assets/imgsvg.svg';

export const App: FC = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <img width={125} height={125} src={imgPng} alt="imgPNG"/>
            <img width={125} height={125} src={imgJpg} alt="imgJPG"/>
            <div><IconSvg width={125} height={125}/></div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<LazyAbout/>}/>
                    <Route path={'/'} element={<LazyShop/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
