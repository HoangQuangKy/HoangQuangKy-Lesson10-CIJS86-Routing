import React from 'react'
import { NavLink } from 'react-router-dom'
function Invoices() {
    const Product = Array.from({ length: 10 })
    return (
        <>
            <div>
                Hello World form Invoices
            </div>
            {Product.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3>Invoice số {index + 1}</h3>
                        <button style={{ backgroundColor: `green` }}>
                            <NavLink to={`${index + 1}`}>Thanh toán</NavLink>
                        </button>

                    </div>
                )
            })}
        </>
    )
}

export default Invoices
