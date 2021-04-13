import React from 'react'

function MenuTitles(props) {
    return (
        <>
            <li className={props.clase}>
                <a className="nav-link" href={props.link}>
                    <a style={{textDecoration: 'none', color: 'black'}} href={props.link}>
                        <i className={props.icon}></i>
                        <span>{props.title}</span>
                    </a>
                </a>
            </li>    
        </>
    )
}

export default MenuTitles