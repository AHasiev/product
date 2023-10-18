import React, { useState, useMemo, useCallback, FC } from 'react'

interface DescriptionProps {

  text: string
  maxLength?: number,
};

const Description: FC<DescriptionProps>  = ({ text, maxLength = 150 }) => {
  
  const [showDetails, setShowDetails] = useState(false);

  const truncatedText = useMemo(() => {
    if (text.length > maxLength && !showDetails) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }, [text, maxLength, showDetails]);

  const toggleDetails = useCallback(() => {
    setShowDetails((prev) => !prev);
  }, []);

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      )}
    </div>
  );
};

export default Description;
