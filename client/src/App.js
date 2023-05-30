import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

import { Route, useLocation } from 'react-router-dom';


function App() {
   
  const location = useLocation();

  return (
    <div >
        { location.pathname !== '/' && <NavBar/>}

      <Route exact path="/" component={Landing}/>

      <Route path="/home" component={Home} />
      
      <Route exact path="/detail/:id" component={Detail}/>

      <Route path="/form" component={Form}/> 
    </div>
  );
}

export default App;
