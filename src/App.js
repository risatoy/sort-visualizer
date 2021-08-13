import SortVisualizer from './sortVisualizer/sortVisualizer';
import './App.css';
import { Navbar, Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Visualize Sort Algo!</Navbar.Brand>
        </Container>
      </Navbar>
      <SortVisualizer></SortVisualizer>
    </div>
  );
}

export default App;
