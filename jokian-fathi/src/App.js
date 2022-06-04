
import {Routes, Route, HashRouter} from 'react-router-dom'
import Sertifikat from './pages/Sertifikat';
import Subscribe from './pages/Subscribe';
import Voucher from './pages/Voucher';
import Contact from './pages/Contact';
import Signup from "./components/Signup";
import LoginPage from "./pages/LoginPage";
import Chats from "./pages/Chats";
import Kelas from "./pages/Kelas";
import Category  from "./pages/Category";
import Landing from "./pages/Landing";

function App() {
  return (
  <HashRouter>
    <Routes>
      <Route path ='/' element = {<Landing/>} exact/>
      <Route path ='/login' element = {<LoginPage/>}/>
      <Route path = '/signup' element = {<Signup/>} />
      <Route path = '/chats' element = {<Chats/>}/>
      <Route path = '/kelas' element = {<Kelas/>} />
      <Route path = '/category' element = {<Category/>} />
      <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='/sertifikat' element={<Sertifikat/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/voucher' element={<Voucher/>}/>
    </Routes>
  </HashRouter>
      
  );
}

export default App;
