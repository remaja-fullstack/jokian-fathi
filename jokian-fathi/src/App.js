
import './App.css';
import {Routes, Route, HashRouter} from 'react-router-dom'
import Sertifikat from './pages/Sertifikat.js'
// import Sertifikat from './pages/Sertifikat'
// import Sertifikat from './pages/Sertifikat'
// import Sertifikat from './pages/Sertifikat'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<Sertifikat/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
