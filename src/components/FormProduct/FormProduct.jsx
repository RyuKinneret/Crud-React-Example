import React from 'react';
import './FormProduct.css';

function FormProduct({
  producto, setProducto, descripcion, setDescripcion, stock, setStock,
  productos, agregarProducto, editarProducto, eliminarProducto, editando
}) {
  return (
    <>
      <h1>Formulario de Producto</h1>
      <div className='formWrapped'>
        <label htmlFor="producto">Producto</label>
        <input
          id="producto"
          type="text"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />
        <label htmlFor="descripcion">Descripción</label>
        <input
          id="descripcion"
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label htmlFor="stock">Stock</label>
        <input
          id="stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <button className="button button-registrar" onClick={agregarProducto}>
          {editando ? 'Actualizar' : 'Registrar'}
        </button>
      </div>

      <div className='tableWrapped'>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod, index) => (
              <tr key={index}>
                <td>{prod.nombre}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.stock}</td>
                <td>
                  <button className="button editar" onClick={() => editarProducto(index)}>Editar</button>
                  <button className="button eliminar" onClick={() => eliminarProducto(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormProduct;
