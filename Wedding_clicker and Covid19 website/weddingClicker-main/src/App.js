import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import About from './components/Routes/About';
import Blogs from './components/Routes/Blogs';
import CheckOut from './components/Routes/CheckOut';
import Home from './components/Routes/Home';
import Services from './components/Routes/Services';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/checkout' element={
        <RequireAuth>
          <CheckOut/>
        </RequireAuth>}>
        </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
