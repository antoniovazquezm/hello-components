import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { ListaSuper } from './components/ListaSuper'
import { Login } from './Login'

const PRODUCTOS = [
  { nombre: "Leche", precio: 1.20 },
  { nombre: "Pan", precio: 0.80 },
  { nombre: "Huevos", precio: 2.50 },
  { nombre: "Manzanas", precio: 3.00 },
  { nombre: "Arroz", precio: 1.50 },
  { nombre: "Azúcar", precio: 0.90 },
  { nombre: "Sal", precio: 0.30 },
  { nombre: "Aceite", precio: 2.80 },
  { nombre: "Pollo", precio: 5.00 },
  { nombre: "Pasta", precio: 1.00 }
];


function App() {
  const [count, setCount] = useState(0)
  const[Lista_super, setListaSuper] = useState(false)
  const[sesion, setSesion] = useState(false)

  const login = () => {
    setSesion(prev => !prev);
    setListaSuper(false);
  };

  return (
    <>
    <Header title={"Mi primer componente =)"} color={"Green"} />
    {sesion ?
      <div>
      <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
      </div>
        

        <button onClick={() => setListaSuper(!Lista_super)}>
          {Lista_super ? "Ocultar lista" : "Mostrar lista"}
        </button>


        {Lista_super ?
          <ListaSuper productos={PRODUCTOS}/>
          : <p>:P</p>
          
          
        }
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <button onClick={login}>
            {"Salir"}
          </button>
      </div>
      :
      <div>
        <Login/>
        <button onClick={login}>
            {"Iniciar sesión"}
        </button>
      </div>

    }
    
      
    </>
  )
}

export default App
