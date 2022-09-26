import './App.css';
import Addtask from './components/AddTask';
import Listtask from './components/ListTask';
function App() {
  return (
    <div className="App">
   
  <h3>to do app</h3> 
      <Addtask />
      <Listtask />
  
  </div>
  );
}

export default App;