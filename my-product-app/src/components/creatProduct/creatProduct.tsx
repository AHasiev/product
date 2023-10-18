import React, { useState } from 'react';
import { ProductModel } from '../../data/product.model';
import axios from 'axios';


const productData: ProductModel = {
    title: '',
    image: 'https://i.pravatar.cc',
    price: 13.5,
    description: 'lorem ipsum set',
};

interface CreatProductProps {
    onCreat: (product: ProductModel) => void
}


export function CreatProduct({ onCreat }: CreatProductProps) {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
        productData.title = value
        const response = await axios.post<ProductModel>('https://fakestoreapi.com/products', productData)

        onCreat(response.data)
    };

    // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //   setValue(event.target.value)  
    // }


    return (
        <form onSubmit={submitHandler}>
            <input type="text"
                placeholder='Enter product title...'
                value={value}
                onChange={event => setValue(event.target.value)}
            />

            <p>{error}</p>

            <button type='submit'>
                Creat
            </button>

        </form>
    )
}