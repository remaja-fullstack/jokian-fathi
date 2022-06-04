
import {Routes, Route, HashRouter} from 'react-router-dom'
import Sertifikat from './pages/Sertifikat';
import Subscribe from './pages/Subscribe';
import Voucher from './pages/Voucher';
import Contact from './pages/Contact';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path='/' element={<Voucher/>} exact/>
        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='/sertifikat' element={<Sertifikat/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/voucher' element={<Voucher/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
