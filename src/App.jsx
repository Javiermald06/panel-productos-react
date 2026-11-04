import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ConsultarPage from "./pages/ConsultarPage";
import InsertarPage from "./pages/InsertarPage";
import ModificarPage from "./pages/ModificarPage";
import EditarProductoPage from "./pages/EditarProductoPage";
function App() {
return (
<Routes>
  <Route element={<Layout />}>
    <Route index element={<Navigate to="/consultar" replace />} />
    <Route path="consultar" element={<ConsultarPage />} />
    <Route path="insertar" element={<InsertarPage />} />
    <Route path="modificar" element={<ModificarPage />} />
    <Route path="modificar/:id" element={<EditarProductoPage />} />
    <Route path="*" element={<Navigate to="/consultar" replace />} />
  </Route>
</Routes>
  );
}














/*
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductoCard from './components/ProductoCard'

function App() { 
  const productos = [
    /*
    {
      id: 1,
      nombre: "Laptop",
      precio: 1900,
      stock: 10,
    },

    {
      id: 2,
      nombre: "Mouse",
      precio: 50,
      stock: 10,
    },

    {
      id: 3,
      nombre: "RAM DDR5 😭",
      precio: 120,
      stock: 5,
    },

    {
      id: 4,
      nombre: "Monitor",
      precio: 600,
      stock: 8,
    },
  ];

  return (
    <main>
      <h1>Lista de productos</h1>
      {productos.length === 0 &&(
        <p>No hay productos registrados.</p>
      )}
      
      <table border="1">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Nivel de Stock</th>
          </tr>
        </thead>

        <tbody>
        {productos.map((producto)=>(
          <tr key={producto.id}>
            <td>{producto.nombre}</td> 
            <td>S/ {producto.precio}</td>
            <td>{producto.stock}</td>
            <td>
              {producto.stock > 0 ? "Disponible" : "Agotado"}
            </td>
            <td>
              {producto.stock <= 5 ? "Stock Bajo " : "Stock suficiente"}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
}
*/
export default App;
