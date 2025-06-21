import React, { useState, useEffect } from 'react'; // Добавлены импорты хуков
import { useCart } from './hooks/useCart'; // Правильный путь
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import PhoneForm from './components/PhoneForm';

// Остальной код остается без изменений

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [phone, setPhone] = useState(() => {
    return localStorage.getItem('phone') || '';
  });

  // Сохраняем в localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('phone', phone);
  }, [phone]);

  const updateCart = (productId, quantity) => {
    setCart(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const handleOrder = () => {
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 11) {
      alert('Введите полный номер телефона!');
      return;
    }
    alert(`Заказ оформлен! Номер: ${phone}`);
    setCart({});
  };

  return (
    <div className="app">
      <h1>Интернет-магазин</h1>
      <ProductList cart={cart} updateCart={updateCart} />
      <CartSummary cart={cart} />
      <PhoneForm phone={phone} setPhone={setPhone} onSubmit={handleOrder} />
    </div>
  );
}

export default App;
