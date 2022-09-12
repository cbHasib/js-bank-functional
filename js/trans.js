let count = 0;
let countLocal = localStorage.getItem('count');
!countLocal? localStorage.setItem('count', 0) : count = countLocal;
let allTransectionData = [];

function transictionHistory(method, amount) {

  let allTransectionDataLocal = localStorage.getItem('allTransection');
  !allTransectionDataLocal? localStorage.setItem('allTransection', (JSON.stringify(allTransectionData)), 
  allTransectionData = JSON.stringify(allTransectionData)) : allTransectionData = allTransectionDataLocal;

  allTransectionData = JSON.parse(allTransectionData);
 


  count++;

  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  // Date


  const transection = {
    date: today,
    id: count,
    method: method,
    amount: amount,
  };

  allTransectionData.push(transection);
  const stringiFyTrans = JSON.stringify(allTransectionData);
  localStorage.setItem('allTransection', stringiFyTrans);
  localStorage.setItem('count', count);

  showTransection();
}

const showTransection = () => {
  const tableBody = document.getElementById("table-body");
  tableBody.textContent = '';

  let allTransectionDataLocal = localStorage.getItem('allTransection');
  allTransectionDataLocal = JSON.parse(allTransectionDataLocal);

  if(allTransectionDataLocal === null){
    return;
  }

  allTransectionDataLocal.forEach( transection => {
    const {date, id, amount, method} = transection;

  const tableRow = document.createElement("tr");

  let classAmount = "text-black";

  if (method === "Deposit") {
    tableRow.classList.add("bg-green-100");
    classAmount = "text-green-800";
  } else {
    tableRow.classList.add("bg-red-100");
    classAmount = "text-red-800";
  }
  tableRow.innerHTML = `<td class="border border-slate-400 p-2 text-center font-semibold">${id}</td>
                      <td class="border border-slate-400 p-2">${method}</td>
                      <td class="border border-slate-400 p-2 text-center">${date}</td>
                      <td class="border border-slate-400 p-2 text-center font-medium ${classAmount}">$<span>${amount}</span></td>`;
  tableBody.appendChild(tableRow);
  });
};


showTransection()