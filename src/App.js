import SortVisualizer from './sortVisualizer/sortVisualizer';
import SortDetails from './sortDetails';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="#">Visualize Sort Algo!</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#sort-description-container">Detail</Nav.Link>
          </Nav> */}
          </Container>
      </Navbar>
      <SortVisualizer></SortVisualizer>
      <SortDetails></SortDetails>
    </div>
  );
}

export default App;
