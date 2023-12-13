function simulatePayment() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isSuccess = Math.random() < 0.8;
        isSuccess ? resolve('Payment Successful') : reject('Payment Failed');
      }, 2000);
    });
  }

  function updateUI(status) {
    let processingMessage = document.getElementById('processingMessage');
    let successMessage = document.getElementById('successMessage');
    let failureMessage = document.getElementById('failureMessage');

    processingMessage.style.display = 'none';
    successMessage.style.display = 'none';
    failureMessage.style.display = 'none';

    if (status === 'Payment Successful') {
      successMessage.style.display = 'block';
    } else {
      failureMessage.style.display = 'block';
    }
  }

  function processPayment() {
    let processingMessage = document.getElementById('processingMessage');
    processingMessage.style.display = 'block';

    simulatePayment()
      .then((status) => {
        updateUI(status);
      })
      .catch((status) => {
        updateUI(status);
      });
  }

  processPayment();
