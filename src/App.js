// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Shows from './pages/shows/shows';
import Contact from './pages/contact/contact';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/events' element={<Shows></Shows>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
