import React, { useEffect, useState } from 'react'
import ProductsTable from '.'
import TableBody from './TableBody'
import TableTitle from './TableTitle'


function Table() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
       fetch("http://localhost:3030/api/products/")
       .then(res => res.json())
       .then(data =>
        {
            /*console.log(data.data)*/
            setProductos(data.data)
        })
    }, [])
    console.log(productos)


    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <TableTitle />
                    </thead>
                    <tbody>
                        {productos.map(product => (
                            <TableBody title={product.name} description={product.description} price={product.price} category={product.category.name}/>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table