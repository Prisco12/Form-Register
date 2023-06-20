document.getElementById("registrationForm")
    .addEventListener("submit", function(event){
        event.preventDefault()

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let tableRow = document.createElement("tr");
    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");

    nameCell.textContent = name
    emailCell.textContent = email

    tableRow.appendChild(nameCell)
    tableRow.appendChild(emailCell)

    document.getElementById("registrationTable").getElementsByTagName("tbody")[0].appendChild(tableRow)

    })