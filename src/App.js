import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import ViewAll from './Components/ViewAll';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route  path="/" element={<AddProduct/>}/>
    <Route  path="/view" element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
