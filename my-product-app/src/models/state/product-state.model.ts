
interface ProductModel {
    id?: number;
    title: string;
    image: string;
    price: number;
    description: string
  }
  
  interface ProductStateModel {
    products: ProductModel[];
  }
  
  export default ProductStateModel;
  