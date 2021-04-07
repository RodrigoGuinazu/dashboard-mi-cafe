// No olvidar de que no se usa class para en los componentes si no que utilizamos className. Tampoco olvidar cerrar las etiquetas simples con un "/" al final.
import React from 'react'

function Footer() {
    return (
        <>
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <p class="copyright">Copyright © 2021  <span class="tipografia"> Mí Café </span>  S.R.L.</p>
                    </div>
                </div>
            </footer>              
        </>
    )
}

export default Footer;