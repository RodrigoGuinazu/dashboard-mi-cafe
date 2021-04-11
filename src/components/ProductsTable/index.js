import React from 'react'
import Table from './Table'

function ProductsTable() {
    return (
        <>
            <a id="tabla-productos">
            <h1 className="h3 mb-2 text-gray-800">Productos en la Base de Datos</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <Table />
                </div>
            </div>
            </a>
        </>
    )
}

export default ProductsTable;