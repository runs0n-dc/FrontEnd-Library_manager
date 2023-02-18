let records = [];
let ID =1;

var table = document.getElementById("myTable");

function addRecord(){
    //getting values from the input
    bookname = document.getElementById("bookName").value;
    issuedto = document.getElementById("issuedTo").value;

    //getting date and time
    var date = new Date();
	var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear() ;
    var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    var currentStatus = "Not Returned";
    
    //inserting object in the array
    let newrecord ={id:ID,book_name:bookname,issued_to:issuedto,issued_time:current_date+" at "+current_time,status:currentStatus};
    
    records.push(newrecord);
    
    //creating Row
    var row = table.insertRow(ID);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    
    // inserting Row
    cell1.innerHTML = ID;
    cell2.innerHTML = newrecord.book_name;
    cell3.innerHTML = newrecord.issued_to;
    cell4.innerHTML = newrecord.issued_time;
    cell5.style.color = "red";
    cell5.innerHTML = newrecord.status ;
    
    //Button for Changing Status
    var newButton = document.createElement("button");
    newButton.className="btn1";
    newButton.innerText="click";
    
    //function for changing status
    newButton.onclick = function () {
        cell5.style.color = "green";
        cell5.innerHTML="Returned";
        newrecord.status = "Returned";
      };
    cell5.appendChild(newButton);
    
    // console.log(records);
    
    //clearing the input fields
    document.getElementById("bookName").value="";
    document.getElementById("issuedTo").value="";

    //incrementing the Id
    ID++;

    

}

