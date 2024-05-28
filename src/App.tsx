import './App.css'
import ApiSearch from './components/ApiSearch'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import TaskList from './components/TaskList'
import ThemeSetter from './components/ThemeSetter'
import { Container, Box, Grid } from '@mui/material';

function App() {
  return (
    <Container maxWidth='md'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box id='greetings'>      
            <h1>Practicing React</h1>
            <Greetings title="Saludo" message="Hola" />
            <br/>
            <Greetings title="Despedida" message="Adios" />
          </Box>
        </Grid>

        <Grid item xs={15} md={6}>
          <Box id='counter'>      
            <Counter />
          </Box>  
        </Grid>
        <Grid item xs={15} md={6}>
          <Box id='taskList'>      
            <TaskList />
          </Box>
        </Grid>
        <Grid item xs={15} md={6}>
          <Box id='themeSetter'>      
            <ThemeSetter />
          </Box>
        </Grid>

        <Grid item xs={15} md={6}>
          <Box id='apiSearch'>
            <ApiSearch />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App