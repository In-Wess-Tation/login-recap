import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <section className="App">
      <Outlet />
    </section>
  );
}

export default App;
