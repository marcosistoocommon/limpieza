import logo from './logo.svg';
import './App.css';
import { getLastMonday } from './assets/currentweek.js';

function App() {
  const fecha = new Date();
  const lastMonday = getLastMonday(fecha.toString());
  const limp = new Date(lastMonday);
  return (
    <div class="text-center">
      <h1>Turno de limpieza</h1>
      <h2>Toca limpiar la semana del: {limp.toLocaleDateString()}</h2>      
    </div>
  );
}

export default App;