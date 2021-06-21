import React from 'react';
import { noScrollbarsClassName } from 'react-remove-scroll-bar';
import HomeLoader from './assets/loader.gif';
const Loader = () => {
        return(
        <div className={noScrollbarsClassName} >
            <img src={HomeLoader} className={'loader'} alt=''></img>
        </div>
        )
}

export default Loader;
