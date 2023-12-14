// Function to simulate payment with a given amount
function simulatePayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let balance = 10000;
      let isSuccess = amount <= balance;
      isSuccess ? resolve('Payment Successful') : reject('Payment Failed');
    }, 2000);
  });
}

// Function to update UI based on payment status
function updateUI(status) {
  let processingMessage = document.getElementById('processingMessage');
  let successMessage = document.getElementById('successMessage');
  let failureMessage = document.getElementById('failureMessage');
  let balanceContainer = document.getElementById('balanceContainer');
  let processingImageContainer = document.getElementById('processingImageContainer');

  // Hide all content inside the balanceContainer except the processing image during processing
  balanceContainer.style.display = 'none';
  processingImageContainer.style.display = 'none';
  successMessage.style.display = 'none';
  failureMessage.style.display = 'none';

  if (status === 'Payment Successful') {
    successMessage.style.display = 'block';
  } 
  else {
    failureMessage.style.display = 'block';
  }
}

// Function to process payment
function processPayment() {
  let paymentAmountInput = document.getElementById('paymentAmount');
  let amount = parseInt(paymentAmountInput.value);
  let processButton = document.getElementById('processButton');

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  // Disable the process button during processing
  processButton.disabled = true;

  let processingMessage = document.getElementById('processingMessage');
  balanceContainer.style.display = 'none';
  processingMessage.style.display = 'block';

  simulatePayment(amount)
    .then((status) => {
      updateUI(status);
    })
    .catch((status) => {
      updateUI(status);
    })
    .finally(() => {
      // Enable the process button after processing is complete
      processButton.disabled = false;
    });
}
