import ProductList from './product-list.component';
import { useProducts } from '../../../products.hook';


const ProductListContainer = () => {

    const { products, addProduct } = useProducts();

    return (

        <div><ProductList products={products}/></div>
    )
}

export default ProductListContainer;