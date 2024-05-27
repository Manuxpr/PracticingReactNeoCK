import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import TaskList from './components/TaskList'
import ThemeSetter from './components/ThemeSetter'


function App() {

  return (
    <>
      <div id='greetings'>      
        <h1>Practicing React</h1>
        <Greetings title="Saludo" message="Hola" />
        <br/>
        <Greetings title="Despedida" message="Adios" />
      </div>

      <div id='counter'>      
        <Counter />
      </div>  
      <div id='taskList'>      
        <TaskList />
      </div>
      <div id='themeSetter'>      
        <ThemeSetter />
      </div>
    </>
     
  )
}

export default App
