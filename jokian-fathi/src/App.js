import { Route, Routes,HashRouter } from "react-router-dom";
import Signup from "./components/Signup";
import LoginPage from "./pages/LoginPage";
import Chats from "./pages/Chats";
import Kelas from "./pages/Kelas";
import Category  from "./pages/Category";


function App() {
  return (

  <HashRouter>
    <Routes>
      <Route path ='/login' element = {<LoginPage/>}/>
      <Route path = '/signup' element = {<Signup/>} />
      <Route path = '/' element = {<Chats/>}/>
      <Route path = '/kelas' element = {<Kelas/>} />
      <Route path = '/category' element = {<Category/>} />
    </Routes>
  </HashRouter>
      
  );
}

export default App;
