import React, { useState } from 'react';
import '../creatButton/creatButton.css';

interface CreateButtonProps {
  onOpen: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({ onOpen }) => {

    // const handleCreateClick = () => {
    //     // Обработка нажатия кнопки создания
    //     console.log('Create button clicked');
    //   };

    
      


  return (
    <button className="create-button" onClick={onOpen}>
      +
    </button>
  );
};

export default CreateButton;
