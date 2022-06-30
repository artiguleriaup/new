import Header from './components/Header';
import Gallery from './components/Gallery';
import Galleryimage from './components/Galleryimage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>

      <div className='container'>
        <Routes>
             <Route exact path="/" element={<Gallery/>}/>
             <Route exact path="/addphoto" element={<Galleryimage/>}/>
             <Route exact path="/login" element={<Login/>}/>
             <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
