function validateForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    if (name == "") {
        alert("Name is required");
        return false;
    }

    if (age == "") {
        alert("Age is required");
        return false;
    } else if (age < 1) {
        alert("Age must be above zero");
        return false;
    }

    if (address == "") {
        alert("Address is required");
        return false;
    }

    if (email == "") {
        alert("Email is required");
        return false;
    } else if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }
    return true;
}

function showData() {
    let peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    let html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button>';
        html += '<button onclick="editData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", showData);

function AddData() {
    if (validateForm() == true) {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;

        let peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
        peopleList.push({
            name: name,
            age: age,
            address: address,
            email: email,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
    }
}

function deleteData(index) {
    let peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

function editData(index) {
    let peopleList = JSON.parse(localStorage.getItem("peopleList"));
    let person = peopleList[index];

    document.getElementById("name").value = person.name;
    document.getElementById("age").value = person.age;
    document.getElementById("address").value = person.address;
    document.getElementById("email").value = person.email;

    document.getElementById("editIndex").value = index;

    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
}

function updateData() {
    let index = document.getElementById("editIndex").value;
    let peopleList = JSON.parse(localStorage.getItem("peopleList"));

    if (validateForm() === true) {
        peopleList[index].name = document.getElementById("name").value;
        peopleList[index].age = document.getElementById("age").value;
        peopleList[index].address = document.getElementById("address").value;
        peopleList[index].email = document.getElementById("email").value;

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
        document.getElementById("editIndex").value = "";

        document.getElementById("submit").style.display = "block";
        document.getElementById("update").style.display = "none";
    }
}

document.getElementById("update").addEventListener("click", updateData);
