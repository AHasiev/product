import axios, { AxiosResponse } from "axios";
import { ProductModel } from "../data/product.model";
import { PRODUCTS_URL } from "../constants/api.constants";
import { AppDispatch } from "../store/store";
import { setProductsAction } from "../store/product/product.slice";

export const fetchProductsApi = (): Promise<AxiosResponse<ProductModel[]>> => {
  return axios.get<ProductModel[]>(PRODUCTS_URL); // Указываем тип данных здесь
};

export const loadProducts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetchProductsApi();
    const products = response.data;

    dispatch(setProductsAction(products));
  } catch (error) {
    console.error("Error loading products:", error);
    return error;
  }
};

