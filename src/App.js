import './App.css';
import Mensaje from './Mensaje';
import Image from './image';

function App() {
  

  return (
    <div className="App">
       <Mensaje color = 'green' message = 'Mauricio' />
       <Mensaje color = 'blue'message = "I can't" />
       <Mensaje color = 'red' message = 'Move Move' />
       <Image />
    </div>
  );
}

export default App;
