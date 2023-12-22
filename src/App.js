import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Aboutpage from './Pages/Aboutpage';
import Contactpage from './Pages/Contactpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<Aboutpage/>}/>
            <Route path='/contact' element={<Contactpage/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
