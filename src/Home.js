import './style/MyStyle.css';
import React, {useState,useEffect} from 'react';
import HomeVid from './assets/home.gif';
import HomeVid2 from './assets/home2.gif';
import { noScrollbarsClassName } from 'react-remove-scroll-bar';
const Home = () => {
    const [isDisplay,setIsDisplay] = useState(true);
    useEffect(() => {    
        setTimeout(() => {
            setIsDisplay(false);
        }, 7000);
    },[])
        return(
        <>
        <div className={noScrollbarsClassName}>
            <div className={isDisplay?'show':'hide'}>
                <img src={HomeVid} className={'homeimage'}></img>
            </div>
            
            <div className={isDisplay?'hide':'show'}>
                <img src={HomeVid2} className={'homeimage'}></img>
                
            </div>
             
        </div>
        </>
        )

}

export default Home;
