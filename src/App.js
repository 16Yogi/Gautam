import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
