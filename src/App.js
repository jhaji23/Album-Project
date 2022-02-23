// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  return (
   <>
     <BrowserRouter>
       <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/edit/:id" element={<Edit/>}></Route>
        </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
