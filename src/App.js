//App.js

//import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import { GreetingSyled } from './components/pure/greetingSyled';
import { TaskList } from './components/container/task_list';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
       {/*Componente de clase greeting.jsx */}
       {/*<Greeting name="Andres"/>*/}
       {/*Componente Funcion greetingF.jsx */}
       {/*<GreetingF name="Andres"/>*/}
       {/*Componente con estilos funcionales */}
       {/*<GreetingSyled name="Andres"/>*/}
       
      {/*</header>*/}
       <TaskList />
    </div>
  );
}

export default App;
