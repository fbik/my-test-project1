import React from 'react'; // Добавьте эту строку
import PropTypes from 'prop-types';

function CartSummary({ cart }) {
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="cart-summary">
      <h2>Корзина</h2>
      <p>Товаров: {totalItems}</p>
    </div>
  );
}

CartSummary.propTypes = {
  cart: PropTypes.object.isRequired
};

export default CartSummary;