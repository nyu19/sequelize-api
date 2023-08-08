export {ValidateIncomingData}

function ValidateIncomingData(firstName, email, phoneNumber) {
    return !(firstName == "" || (email == "" && (phoneNumber == "" || phoneNumber.length != 10)));
}

