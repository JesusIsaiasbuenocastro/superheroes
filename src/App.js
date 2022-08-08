import Heroes from './components/heroes';

import LayOut from './components/layout';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Heroe from './components/heroe';

function App() {
  return(
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<LayOut/>}>
        <Route index element= {<Heroes/>} />
       
      </Route>
      <Route path='heroe/:heroeId' element={<LayOut/>}>
        <Route index element= {<Heroe/>} />
       
      </Route>
  </Routes>

</BrowserRouter>);
}

export default App;
