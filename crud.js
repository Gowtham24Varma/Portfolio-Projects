var selectedRow=null;

function displayDetails(e){
event.preventDefault()
var formData=readForm();
if(selectedRow===null){
    insertNew(formData)
}else{
updateRecord(formData)
}
resetForm();
}
// retrieve the data
function readForm(){
    var formData={};
    formData["fullname"]=document.getElementById("fullname").value;
    formData["empcode"]=document.getElementById("empcode").value;
    formData["salary"]=document.getElementById("salary").value;
    formData["city"]=document.getElementById("city").value;
return formData;
}
// insert the data
function insertNew(data){
    var table=document.getElementById("display").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullname;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=data.empcode;
    var cell3=newRow.insertCell(2);
    cell3.innerHTML=data.salary;
    var cell4=newRow.insertCell(3);
    cell4.innerHTML=data.city;
    var cell5=newRow.insertCell(4);
    cell5.innerHTML=`<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}
// edit
function onEdit(td){
selectedRow=td.parentElement.parentElement;
document.getElementById('fullname').value=selectedRow.cells[0].innerHTML;
document.getElementById('empcode').value=selectedRow.cells[1].innerHTML;
document.getElementById('salary').value=selectedRow.cells[2].innerHTML;
document.getElementById('city').value=selectedRow.cells[3].innerHTML
}

function updateRecord(formData){
selectedRow.cells[0].innerHTML=formData.fullname;
selectedRow.cells[1].innerHTML=formData.empcode;
selectedRow.cells[2].innerHTML=formData.salary;
selectedRow.cells[3].innerHTML=formData.city;
}
// delete
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row=td.parentElement.parentElement
        document.getElementById('display').deleteRow(row.rowIndex)
    }
    resetForm();
}
// reset
function resetForm(){
    document.getElementById('fullname').value='';
    document.getElementById('empcode').value='';
    document.getElementById('salary').value='';
    document.getElementById('city').value='';
}