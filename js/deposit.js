document.getElementById('close-1').addEventListener('click', function(){
  document.getElementById('alert-1').classList.add('hidden');
})

document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */





  const newDepositAmount = getInputFieldValueById("deposit-field");

  if(isNaN(newDepositAmount) || newDepositAmount < 0 || typeof (newDepositAmount) !== 'number' || newDepositAmount === null || newDepositAmount == ''){
    // alert('Please enter valid amount');
    document.getElementById('alert-1').classList.remove('hidden');
    return;
  }
  else{
    document.getElementById('alert-1').classList.add('hidden');
  }


  /* 
    1. get previous deposit total by id
    */
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  // set deposit total value
  setTextElementValueById('deposit-total', newDepositTotal);

// get previous balance by using the function
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositAmount;

setTextElementValueById('balance-total', newBalanceTotal);



transictionHistory('Deposit', newDepositAmount);

});
