import React, { memo, FC } from 'react';
import { ProductModel } from '../../../data/product.model';
import Description from '../../description/description';

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({ title, image, price, description }) => {
    return <div className='container' >
        <div className='product' >
            <div className="product__image">
                <img src={image} alt="" />
            </div>
            <div className='product__title'>
                <div>Заголовок {title}</div>
                {/* <div className="description">Описание: {description}</div> */}
                <Description text={description} />
                <div className="price">Цена: {price}</div>
            </div>
        </div>
    </div>;
};


export default memo(ProductCard);
