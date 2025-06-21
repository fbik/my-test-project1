import React, { useState, useEffect } from 'react'; // Удален дублирующийся импорт
import PropTypes from 'prop-types';

// ... остальной код без изменений

function ProductCounter({ productId, initialQuantity, updateCart }) {
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [isActive, setIsActive] = useState(initialQuantity > 0);

  useEffect(() => {
    if (isActive) updateCart(productId, quantity);
  }, [quantity]);

  const handleChange = (value) => {
    const numValue = Math.max(1, parseInt(value) || 1);
    setQuantity(numValue);
  };

  return (
    <div className="product-counter">
      {!isActive ? (
        <button onClick={() => setIsActive(true)} className="buy-btn">
          Купить
        </button>
      ) : (
        <div className="quantity-controls">
          <button onClick={() => handleChange(quantity - 1)}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleChange(e.target.value)}
            min="1"
          />
          <button onClick={() => handleChange(quantity + 1)}>+</button>
        </div>
      )}
    </div>
  );
}

ProductCounter.propTypes = {
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  initialQuantity: PropTypes.number,
  updateCart: PropTypes.func.isRequired
};

ProductCounter.defaultProps = {
  initialQuantity: 0
};

export default ProductCounter;