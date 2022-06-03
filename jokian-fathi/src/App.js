import { Route, Routes,HashRouter } from "react-router-dom";
import Signup from "./components/Signup";
import LoginPage from "./pages/LoginPage";
import Chats from "./pages/Chats";

function App() {
  return (

  <HashRouter>
    <Routes>
      <Route path ='/' element = {<LoginPage/>}/>
      <Route path = '/signup' element = {<Signup/>} />
      <Route path = '/chats' element = {<Chats/>}/>
    </Routes>
  </HashRouter>
      
  );
}

export default App;
