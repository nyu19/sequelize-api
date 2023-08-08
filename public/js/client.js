async function select(id){
    const res = await fetch(`/api/users/${id}`);
    const user = await res.json();
    $("#firstName").val(user.firstName);
    $("#lastName").val(user.lastName);
    $("#phoneNumber").val(user.phoneNumber);
    $("#email").val(user.email);
    $("#id").val(user.id);
    $("#info-form > ")
}

async function deleteContact(id){
    const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE'
    });
    console.log(res);
    updateContacts();
}

async function createNew(){
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phoneNumber").val("");
    $("#email").val("");
    $("#id").val("");

    $('#email').removeClass("is-invalid");
    $('#email').removeClass("is-valid");
    $('#firstName').removeClass("is-invalid");
    $('#firstName').removeClass("is-valid");
    $('#phoneNumber').removeClass("is-invalid");
    $('#phoneNumber').removeClass("is-valid");
}

async function updateContacts() {
    const res = await fetch("/api/users");
    const users = await res.json();
    $("#theList").html("");
    createNew()
    for (const user of users) {
        $("#theList").append(
            `<div class="hover-shadow contact-card border rounded border-1 border-gray mb-1 p-1">
                <div onclick="select(${user.id})" class="d-inline">
                    <img class="mx-1" src="/api/avatar?name=${user.firstName[0]}${user.lastName == '' ? "" : user.lastName[0]}">
                    ${user.firstName} ${user.lastName}
                </div>
                <button onclick="deleteContact(${user.id})" type="button" class="btn p-1"><i class="bi bi-x-lg"></i></button>
            </div>`
        )
    }
}

async function submitForm(event) {
    event.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const phoneNumber = $("#phoneNumber").val();
    const email = $("#email").val();
    const id = $("#id").val();

    if (firstName == "" || (email == "" && (phoneNumber == "" || phoneNumber.length != 10))){
        firstName == "" ? $("#firstName").addClass("is-invalid") : $("#firstName").addClass("is-valid")
        email == "" ? $("#email").addClass("is-invalid") : $("#email").addClass("is-valid")
        phoneNumber == "" || phoneNumber.length != 10 ? $("#phoneNumber").addClass("is-invalid") : $("#phoneNumber").addClass("is-valid")
        
        return 
    }

    const res = await fetch(`/api/users/${id}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email })
    });
    console.log(res);
    updateContacts();
    return false;
}

document.addEventListener("DOMContentLoaded", () => {
    updateContacts();
});