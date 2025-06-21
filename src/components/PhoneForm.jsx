import React, { useState } from 'react'; // Удален дублирующийся импорт
import InputMask from 'react-input-mask';
import { FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Добавьте эту строку

// ... остальной код без изменений

function PhoneForm({ phone, setPhone, onSubmit }) {
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.length !== 11) {
      setError('Введите 11 цифр номера');
      return;
    }
    
    setError('');
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="phone-form">
      <div className={`input-group ${error ? 'has-error' : ''}`}>
        <FaPhone className="input-icon" />
        <InputMask
          mask="+7 (999) 999-99-99"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          className="phone-input"
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="btn order-btn">
        Оформить заказ
      </button>
    </form>
  );
}


PhoneForm.propTypes = {
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PhoneForm;