import Cookies from 'js-cookie';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {

  const token = Cookies.get("token")

  return (
    <section className="App">

      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        {token && (<Link to={"/secrets"}>Secrets</Link>)}
      </nav>


      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default App;
