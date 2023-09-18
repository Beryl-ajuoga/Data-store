function validateForm(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    if(name == ""){
        alert("Name is required");
        return false
    }

    if(age == ""){
        alert("Age is required");
        return false;

    }else if(age < 1){
        alert("Age must be above zero");
        return false
    }

    if(address==""){
        alert("Address is required")
        return false;
    }

    if(email == ""){
        alert("Email is required");
        return false;
    } else if(!email.includes("@")){
        alert("invalid email address");
        return false
    }
    return true;

    }

    function showData(){
        let peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
        }else{ 
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        let html = "";
        peopleList.forEach(function (element, index){
            html += "<tr>";
            html += "<td>" + element.name + "</td>";
            html += "<td>" + element.age + "</td>";
            html += "<td>" + element.address + "</td>";
            html += "<td>" + element.email + "</td>";
            html += <td><button onClick ="deleteData('+index+')" 
            class = "btn btn-danger" >Delete</button><button onClick = "updateData('+index+')"class = "btn btn-danger">Delete</button>
            </td>
            
        })
    }
    




