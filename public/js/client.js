async function select(id){
    const res = await fetch(`/api/users/${id}`);
    const user = await res.json();
    $("#firstName").val(user.firstName);
    $("#lastName").val(user.lastName);
    $("#phoneNumber").val(user.phoneNumber);
    $("#email").val(user.email);
    $("#id").val(user.id);
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
}

async function updateContacts() {
    const res = await fetch("/api/users");
    const users = await res.json();
    $("#theList").html("");
    for (const user of users) {
        $("#theList").append(
            `<div class="contact-card border rounded border-2 border-gray p-1">
                <div onclick="select(${user.id})" class="d-inline">
                    <img src="...">
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