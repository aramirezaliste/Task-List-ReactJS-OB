//App.js

//import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/teoria-react/greeting';
//import GreetingF from './components/pure/teoria-react/greetingF';
//import { GreetingSyled } from './components/pure/teoria-react/greetingSyled';
//import { Father } from './components/pure/teoria-react/father';
import { TaskList } from './components/container/task_list';
import { RegisterFormik } from './components/pure/forms/registerFormikk';

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
      {/* Gestion de eventos */}
      {/* <Father/> */}
      {/*</header>*/}
      {/* <TaskList /> */}
      <RegisterFormik />
    </div>
  );
}

export default App;
