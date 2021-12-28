const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit");

const FirstNameErrorContainer = document.getElementById("first-name-error-container")
const LastNameErrorContainer = document.getElementById("last-name-error-container");
const EmailErrorContainer = document.getElementById("email-error-container");
const MessageErrorContainer = document.getElementById("message-error-container");

let validationError = {

    Valid: -1,

    EmptyTextError: 0,
    InvalidTextError: 1,
    InvalidEmailError: 2,

    EmptyMessageError: 3,
    NoSelectionError: 4

};

let EmptyTextErrorMessage = "This required text field is currently empty"
let InvalidTextErrorMessage = "This text field contains invalid characters (Only accepts letters)";

let InvalidEmailErrorMessage = "Email is not formatted correctly";
let EmptyMessageErrorMessage = "Didnt you want to tell us something? :D";

let NoSelectionErrorMessage = "Please make a selection";

function validateForm(){
    
    let allFieldsValid = true;

    //First name
    let firstNameValid = validateName(firstNameInput.value);
    if(firstNameValid != validationError.Valid){
        Unhide(FirstNameErrorContainer);
        allFieldsValid = false;
        switch(firstNameValid){
            case validationError.EmptyTextError:
                document.getElementById("first-name-error").innerHTML = EmptyTextErrorMessage;
                break;
            case validationError.InvalidTextError:
                document.getElementById("first-name-error").innerHTML = InvalidTextErrorMessage
                break;
        }
    }else{
        Hide(FirstNameErrorContainer);
    }

    //Last Name
    let lastNameValid = validateName(lastNameInput.value);
    if(lastNameValid != validationError.Valid){
        allFieldsValid = false;
        Unhide(LastNameErrorContainer);
        UpdateErrorMessage(document.getElementById("last-name-error"), lastNameValid);
    }else{
        Hide(LastNameErrorContainer);
    }

    //Validate email
    let emailValid = validateEmail(emailInput.value);
    if(emailValid != validationError.Valid){
        allFieldsValid = false;
        Unhide(EmailErrorContainer);
        UpdateErrorMessage(document.getElementById("email-error"), emailValid);
    }else{
        Hide(EmailErrorContainer);
    }

    //Validate message
    let messageValid = validateMessage(messageInput.value);
    if(messageValid != validationError.Valid){
        allFieldsValid = false;
        Unhide(MessageErrorContainer);
        UpdateErrorMessage(document.getElementById("message-error"), messageValid);
    }else{
        Hide(MessageErrorContainer);
    }

    return allFieldsValid;

}

function validateName(text){

    if(text == ""){
        return validationError.EmptyTextError;
    }else if(! /^[A-Za-z\s]*$/.test(text)){
        return validationError.InvalidTextError;
    }else{
        return validationError.Valid;
    }

}

function validateEmail(text){
    if(text == ""){
        return validationError.EmptyTextError;
    }else if(!text.includes("@")){
        return validationError.InvalidEmailError;
    }else{
        return validationError.Valid;
    }
}

function validateMessage(text){
    if(text == ""){
        return validationError.EmptyMessageError;
    }else{
        return validationError.Valid;
    }
}

function UpdateErrorMessage(element, error){
    switch(error){
        case validationError.EmptyTextError:
            element.innerHTML = EmptyTextErrorMessage;
            break;
        case validationError.InvalidTextError:
            element.innerHTML = InvalidTextErrorMessage
            break;
        case validationError.InvalidEmailError:
            element.innerHTML = InvalidEmailErrorMessage;
            break;
        case validationError.EmptyMessageError:
            element.innerHTML = EmptyMessageErrorMessage;
            break;
        case validationError.NoSelectionError:
            element.innerHTML = NoSelectionErrorMessage;
            break;
    }
}

function Hide(element){
    element.classList.add("Hidden");
}

function Unhide(element){
    element.classList.remove("Hidden");
}