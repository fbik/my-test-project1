import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [phone, setPhone] = useState(() => {
    return localStorage.getItem('phone') || '';
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('phone', phone);
  }, [phone]);

  return { cart, phone, setPhone, setCart };
}