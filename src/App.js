
import './App.css';
// import Container from 'react-bootstrap/Container';
import Header from './components/common/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>

  );
}

export default App;
