// create variable to hold db connection
let db;
// establish connection to indexDB
const request = indexedDB.open('budget-tracker', 1);
// event will fire when database changes
request.onupgradeneeded = function(e) {
  db = e.target.result;
  db.createObjectStore('new_transaction', { autoIncrement: true });
}

// onsuccess upload the transaction
request.onsuccess = function(e) {
  db = e.target.result;
  if(navigator.onLine) {
    uploadTransaction();
  }
}

// handling error
request.onerror = function(e) {
  console.log(e.target.errorCode);
}

// handling the submit when no internet connection
const saveRecord = (record) => {
  // opening a transaction with databse
  const transaction = db.transaction(['new_transaction'], 'readwrite');
  // access the objectStore
  const transactionObjectStore = transaction.objectStore('new_transaction');
  console.log(record);
  // add the record to the store
  transactionObjectStore.add(record);
}

// function to upload the transaction
const uploadTransaction = () => {
  // opening a transaction with databse
  const transaction = db.transaction(['new_transaction'], 'readwrite');
  // access the objectStore
  const transactionObjectStore = transaction.objectStore('new_transaction');
  // get all transaction
  const getAllTransactions = transactionObjectStore.getAll();
  // once sucessfull post the transactions to database
  getAllTransactions.onsuccess = () => {
    if(getAllTransactions.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAllTransactions.result),
        headers: {
          Accept: 'application/json, text/SecurityPolicyViolationEvent, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(transactionData => {
        if(transactionData.message) {
          throw new Error(transactionData);
        }
        // opening a transaction with databse
        const transaction = db.transaction(['new_transaction'], 'readwrite');
        // access the objectStore
        const transactionObjectStore = transaction.objectStore('new_transaction');
        // clear all posted items
        transactionObjectStore.clear();
        alert('All saved transactions have been successfully submitted to database!')
      })
      .catch(err => console.log(err));
    }
  }
}

// eventlistener to check if the app is online
window.addEventListener('online', uploadTransaction);
