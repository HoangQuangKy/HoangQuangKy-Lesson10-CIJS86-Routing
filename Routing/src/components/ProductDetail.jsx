import React from 'react'
import { useParams } from 'react-router-dom'
function ProductDetail() {
    const { productid } = useParams()
    return (
        <div>
            Đây là sản phẩm {productid}
        </div>
    )
}

export default ProductDetail
