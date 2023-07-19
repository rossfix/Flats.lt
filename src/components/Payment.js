import React, { useState } from 'react';

const PaymentForm = () => {
  const [orderId, setOrderId] = useState('');

  const handlePayment = async () => {
    try {
      // Replace with your actual API endpoint for creating payment orders
      const response = await fetch('https://api.example.com/payments/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 11.0, // Replace with the actual payment amount
          currency: 'EUR', // Replace with the desired currency
          // Add any additional order data as needed
        }),
      });

      const data = await response.json();

      // Set the order ID for later use
      setOrderId(data.orderId);

      // Redirect the user to the Paysera payment page
      window.location.href = data.redirectUrl;
    } catch (error) {
      console.error('Error creating payment order:', error);
    }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <button onClick={handlePayment}>Make Payment</button>
      {orderId && <p>Order ID: {orderId}</p>}
    </div>
  );
};

export default PaymentForm;