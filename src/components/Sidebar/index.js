// No olvidar de que no se usa class para en los componentes si no que utilizamos className. Tampoco olvidar cerrar las etiquetas simples con un "/" al final.
import React from 'react'
import Logo from './Logo'
import MenuTitles from './MenuTitles'

function SideBar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Logo />
                
                <hr className="sidebar-divider my-0" />
                
                <MenuTitles clase="nav-item active" icon="fas fa-fw fa-tachometer-alt" title=" Dashboard"/>
            
                <hr className="sidebar-divider" />
            
                <div className="sidebar-heading">Actions</div>
            
                <MenuTitles clase="nav-item" icon="fas fa-fw fa-plus" title=" Crear Producto" link="http://localhost:3030/productos/crear"/>

                <MenuTitles clase="nav-item" icon="fas fa-fw fa-chart-area" title=" Charts"/>

                <MenuTitles clase="nav-item" icon="fas fa-fw fa-table" title=" Tables"/>
        
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </>
    )
}

export default SideBar