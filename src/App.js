
import './App.css';
import DataJson from './data/db.json';
import Home from './components/home/Home';
function App() {
  return (
    <div>

<Home data={DataJson}/>

      </div>
      )
}
      
      export default App;