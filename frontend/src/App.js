import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products.js';
import FilterMenu from './components/FilterMenu.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/postSearch' element={<Products />}></Route>
        <Route path='/filter' element={<FilterMenu/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
