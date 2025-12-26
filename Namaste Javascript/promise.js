const cart = ['apple', 'banana', 'orange'];

createOrder(cart)
  .then(function (orderId) {
    console.log('Order ID received:', orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentConfirmation) {
    console.log('Payment Confirmation:', paymentConfirmation);
  })
  .catch(function (error) {
    console.error('Error occurred:', error.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!isCartValid(cart)) {
      const err = new Error('Cart is not valid');
      reject(err);
    }

    const orderId = '12345';
    setTimeout(() => resolve(orderId), 3000);
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const paymentConfirmation = `Payment successful for order ID: ${orderId}`;
      resolve(paymentConfirmation);
    }, 3000);
  });
}

function isCartValid(cart) {
  return cart && cart.length > 0;
}