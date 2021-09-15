
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ListUser from './components/ListUser';

function App() {
  return (
   <>
   <BrowserRouter>
   <Route exact path="/" component={Login} />
   <Route exact path="/register" component={Register} />
   <Route exact path="/list" component={ListUser} />
   </BrowserRouter>
   </>
  );
}

export default App;
