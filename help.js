function sumPaymentTotal(type) {
    let total = 0;
  
    for (let key in allPayments) {
      let payment = allPayments[key];
  
      total += Number(payment[type]);
    }
  
    return total;
  }
  
  // converts the bill and tip amount into a tip percent
  function calculateTipPercent(billAmt, tipAmt) {
    return Math.round(100 / (billAmt / tipAmt));
  }
  
  //  created  element from the value
  function appendTd(tr, value) {
    let newTd = document.createElement('td');
    newTd.innerText = value;
  
    tr.append(newTd);
  }
  
  // append delete button and click 
  function appendDeleteBtn(tr, type) {
    let newTd = document.createElement('td');
    newTd.className = 'deleteBtn';
    newTd.innerText = 'X';
  
    newTd.addEventListener('click', removeEle);
  
    tr.append(newTd);
  }
  
  function removeEle(evt) {
    let ele = evt.target.closest('tr');
  
    delete allServers[ele.id];
  
    ele.parentNode.removeChild(ele);
    updateServerTable();
  }