import { useState } from 'react';
import ProductCounter from './ProductCounter';
import React from 'react';

const products = [
  { id: 1, name: 'Смартфон', price: 25000 },
  { id: 2, name: 'Ноутбук', price: 65000 },
  { id: 3, name: 'Наушники', price: 5000 }
];

export default function ProductList({ cart, updateCart }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Цена: {product.price} ₽</p>
          <ProductCounter 
            productId={product.id}
            initialQuantity={cart[product.id] || 0}
            updateCart={updateCart}
          />
        </div>
      ))}
    </div>
  );
}