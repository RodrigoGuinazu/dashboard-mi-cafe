import React from 'react'

function TableBody(props) {
    return (
        <>
            <tr>
                <td><a href={props.link}>{props.title}</a></td>
                <td><a href={props.edit}>Editar</a></td>
                <td>{props.description}</td>
                <td>${props.price}</td>
                <td>{props.category}</td>
            </tr> 
        </>
    )
}

export default TableBody