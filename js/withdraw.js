document.getElementById('close-2').addEventListener('click', function(){
    document.getElementById('alert-2').classList.add('hidden');
  })
  


// previous withdraw
let preWithdaw  = localStorage.getItem("withdrawTotal");
!preWithdaw? localStorage.setItem('withdrawTotal', '0') : '';
preWithdaw = +preWithdaw;
setTextElementValueById('withdraw-total', preWithdaw);


/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');


    const previousBalanceTotal = getTextElementValueById('balance-total');


    if(isNaN(newWithdrawAmount) || newWithdrawAmount < 0 || typeof (newWithdrawAmount) !== 'number' || newWithdrawAmount === null || newWithdrawAmount == '' || newWithdrawAmount > previousBalanceTotal){
        // alert('Please enter valid amount');
        document.getElementById('alert-2').classList.remove('hidden');
        return;
      }
      else{
        document.getElementById('alert-2').classList.add('hidden');
      }



    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    localStorage.setItem('withdrawTotal', newWithdrawTotal);
    
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
    localStorage.setItem('totalBalance', newBalanceTotal);



    transictionHistory('Withdraw', newWithdrawAmount);
})