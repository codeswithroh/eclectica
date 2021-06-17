import React, {useState,useEffect} from 'react';
import './style/App.css';
import Home from './Home.js';
import Load from './Loader.js';
function App() {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(false);
        setTimeout(() => {
            setLoad(true);
        }, 3500);
    }, [])
  return (
    <div className="App">
    {
       load? <Home />:<Load />
    }
    </div>
  );
}

export default App;