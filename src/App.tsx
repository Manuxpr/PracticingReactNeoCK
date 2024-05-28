import './App.css'
import ApiSearch from './components/ApiSearch'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import TaskList from './components/TaskList'
import ThemeSetter from './components/ThemeSetter'
import { Container, Box, Grid, Typography, CssBaseline } from '@mui/material';

function App() {
  return (
    <Container maxWidth='md'>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" component="h1" gutterBottom>
              Practicing React
            </Typography>
            <Greetings title="Saludo" message="Hola" />
            <Greetings title="Despedida" message="Adios" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
            <Counter />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
            <TaskList />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
            <ThemeSetter />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} border={1} borderRadius={2} borderColor="grey.300">
            <ApiSearch />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
