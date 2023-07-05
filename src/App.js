import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  /* To be changed according to when the error is occuring */
  const [isError, setIsError] = useState(true);
  const handleError = () => {
    setIsError(!isError);
  }
  useEffect(() => {
    if (isError === true) {
      const interval = setTimeout(() =>{
        setIsError(false);
      },3000);
      return () => clearInterval(interval);
    }
  },[isError])
  return (
    <Router>
      <Routes>
        <Route path='/signup' Component={Signup}/><Link></Link>
        <Route path='/login' Component={Login}/>
      </Routes>
    </Router>
  );
}

export default App;