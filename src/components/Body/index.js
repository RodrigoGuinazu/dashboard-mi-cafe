// No olvidar de que no se usa class para en los componentes si no que utilizamos className. Tampoco olvidar cerrar las etiquetas simples con un "/" al final.
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import ContainerBig from './ContainerBig'
import ContainerSmall from './ContainerSmall'

// VER COMO HACER PARA QUE EL CONTENIDO DE LOS CONTAINER BIG Y SMALL CAMBIE!

function Body() {
    const [productos, setProductos] = useState({count:"", categories: []})
    useEffect(() => {
       fetch("http://localhost:3030/api/products/")
       .then(res => res.json())
       .then(data =>{
            const categories = data.meta.countByCategory
            const count = data.meta.count
            setProductos({count:count, categories:categories})
        })
    }, [])

    const [usuarios, setUsuarios] = useState({total:""})
    useEffect(() => {
       fetch("http://localhost:3030/api/users/")
       .then(res => res.json())
       .then(data =>
        {
            /*console.log(data)*/
            const total = data.meta.total
            setUsuarios({total:total})
        })
    }, [])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
                <ContainerSmall title="Productos en Base de Datos" number={productos.count} icon="fas fa-clipboard-list fa-2x text-gray-300" color="card border-left-primary shadow h-100 py-2" colorText="text-xs font-weight-bold text-primary text-uppercase mb-1"/>
                <ContainerSmall title="Usuarios en Base de Datos" number={usuarios.total} icon="fas fa-user-check fa-2x text-gray-300" color="card border-left-warning shadow h-100 py-2" colorText="text-xs font-weight-bold text-warning text-uppercase mb-1"/>
                <ContainerSmall title="Categorías en Base de Datos" number="$546.456" icon="fas fa-dollar-sign fa-2x text-gray-300" color="card border-left-success shadow h-100 py-2" colorText="text-xs font-weight-bold text-success text-uppercase mb-1"/>
            </div>
            <div className="row">

                <div className="col-lg-6 mb-4">
                    <ContainerBig title="Last product in Data Dase">
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="/images/product_dummy.svg" alt="dummy" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                            <a target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </ContainerBig>
                </div>  
                
                <div className="col-lg-6 mb-4">
                    <ContainerBig title="Categorías de productos">
                        <div className="card-body">
                            <div className="row">
                                {productos.categories.map(category => (
                                    <CategoryCard link={category.link} title={category.title} count={category.count}/>
                                ))}              
                            </div>
                        </div>
                    </ContainerBig>       
                </div>
            </div>
        </>
    )
}

export default Body