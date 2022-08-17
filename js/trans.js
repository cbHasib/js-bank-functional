let count = 0;


function transictionHistory(method, amount) {
    count++;

    // Date 
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  // Date




  const tableBody = document.getElementById("table-body");

  const tableRow = document.createElement("tr");
  
  tableRow.innerHTML = `
                      <td class="border border-slate-400 p-2 text-center font-semibold">${count}</td>
                      <td class="border border-slate-400 p-2">${method}</td>
                      <td class="border border-slate-400 p-2 text-center">${today}</td>
                      <td class="border border-slate-400 p-2 text-center font-medium text-green-800">$<span>${amount}</span></td>
  `;
  
  if(method === 'Deposit'){
      tableRow.classList.add("bg-green-100");
  }
  else{
      tableRow.classList.add("bg-red-100");
  }
  console.log(method.toLowerCase);
  
  tableBody.appendChild(tableRow);
}
