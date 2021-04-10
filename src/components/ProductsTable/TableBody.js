import React from 'react'

function TableBody(props) {
    return (
        <>
            <tr>
                <td>{props.title}</td>
                <td>{props.description}</td>
                <td>{props.price}</td>
                <td>{props.category}</td>
            </tr> 
        </>
    )
}

export default TableBody