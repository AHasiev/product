import React, { FC } from 'react'
import { ProductModel } from '../../../data/product.model';
import ProductCardComponent from '../card/product-card.component';

interface ProductListProps {
    products: ProductModel[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {

    return (
        <div className='container' >
            {products.map(product => <ProductCardComponent key={product.id} {...product} />)}

        </div>

    )
}

export default ProductList;
