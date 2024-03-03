import './App.css';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/common/Header';


function App() {
  return (
    <Container fluid>
      <Header />
      <Outlet />
    </Container>

  );
}

export default App;