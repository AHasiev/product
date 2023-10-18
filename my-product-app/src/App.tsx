import React, { useState } from 'react';
import './App.css';
import ProductListContainer from './components/product/list/product-list.container';
import CreateButton from './components/creatButton/creatButton';
import Modal from './components/modal/modal';
import { CreatProduct } from './components/creatProduct/creatProduct';
import { ProductModel } from './data/product.model';


function App() {

  

  const [isModalVisible, setModalVisible] = useState(false);

  const createHandler = (product: ProductModel) => {
    setModalVisible(false)
  }

  return (
    <>
      <ProductListContainer />
      <CreateButton onOpen={() => setModalVisible(true)}/>
      {isModalVisible && <Modal title='Creat new product' visible={() => setModalVisible(true)} onClose={() => setModalVisible(false) }>
        <CreatProduct onCreat={createHandler}/>
      </Modal>}
    </>
  );
}

export default App;
