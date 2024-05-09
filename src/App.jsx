import React, { useState } from 'react';
import FormProduct from './components/FormProduct/FormProduct';

function App() {
  // Estados para manejar los valores del producto
  const [producto, setProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');

  // Estado para manejar el array de productos, sin inicialización desde localStorage
  const [productos, setProductos] = useState([]);

  // Estado para gestionar si se está editando un producto y cuál es el índice del producto que se edita
  const [editando, setEditando] = useState(false);
  const [indiceEditando, setIndiceEditando] = useState(null);

  // Función para agregar o actualizar un producto en la lista
  const agregarProducto = () => {
    const nuevoProducto = { nombre: producto, descripcion, stock: parseInt(stock) };
    if (editando) {
      const productosActualizados = [...productos];
      productosActualizados[indiceEditando] = nuevoProducto;
      setProductos(productosActualizados);
    } else {
      setProductos([...productos, nuevoProducto]);
    }

    // Reseteo de los campos después de agregar o editar un producto
    setProducto('');
    setDescripcion('');
    setStock('');
    setEditando(false);
    setIndiceEditando(null);
  };

  // Función para cargar los datos del producto en los campos de formulario para su edición
  const editarProducto = (index) => {
    setProducto(productos[index].nombre);
    setDescripcion(productos[index].descripcion);
    setStock(productos[index].stock);
    setEditando(true);
    setIndiceEditando(index);
  };

  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
  };

  // Renderizado del componente FormProduct con props necesarios para su funcionamiento
  return (
    <FormProduct
      producto={producto}
      setProducto={setProducto}
      descripcion={descripcion}
      setDescripcion={setDescripcion}
      stock={stock}
      setStock={setStock}
      productos={productos}
      agregarProducto={agregarProducto}
      editarProducto={editarProducto}
      eliminarProducto={eliminarProducto}
      editando={editando}
    />
  );
}

export default App;
