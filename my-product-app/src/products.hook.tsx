import { useEffect, useState } from "react";
import { ProductModel } from "./data/product.model";
import { fetchProductsApi, loadProducts } from "./services/product-api.service";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "./store/product/product.selectors";

export const useProducts = () => {
    const [product, setProduct] = useState<ProductModel[]>([]);
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);

    function addProduct(product: ProductModel) {
        setProduct(prev =>[product, ...prev] )
    }

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        //@ts-ignore
         dispatch(loadProducts())
    }, [dispatch]);
   
    return {products, addProduct}

  
}
