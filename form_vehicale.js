let row = 1;

function displayDetails(){
    let vihecal = document.getElementById ('Vehicale').value;
    let engineCapac = document.getElementById ('Engine').value;
    let color = document.getElementById ('Color').value;
    let wheel =document.getElementById ('Wheels').value;
    if(!vihecal || !engineCapac || !color || !wheel){
        alert('not good');
        return
    }
    let dispaly1 = document.getElementById('display');
    let newRow = dispaly1.insertRow(row);
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = vihecal;
    cell2.innerHTML = engineCapac;
    cell3.innerHTML = color;
    cell4.innerHTML = wheel;

    row++;

}