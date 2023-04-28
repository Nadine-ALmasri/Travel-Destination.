
import './App.css';
import DataJson from './data/db.json';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tours from './components/tours/Tours';
import {Routes,Route} from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import Header from './components/header/Header';
function App() {
  return (
    <div>
      <Header/>
<Routes>
<Route path="/" element={<Home data={DataJson}/>}></Route> 
       
        <Route path="/city/:id" element={<TourDetails/>}></Route>
 </Routes>
    

      </div>
      )
}
      
      export default App;