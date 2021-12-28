const GameSelect = document.getElementById("GameSelect");
const BugDescription = document.getElementById("bug-description");
const GameSelectErrorContainer = document.getElementById("gameselect-error-container");
const BugDescriptionErrorContainer = document.getElementById("bug-description-error-container");

function validateReportBugForm(){

    let allFieldsValid = true;

    let gameSelectionValid = validateGame(GameSelect.value);
    if(gameSelectionValid != validationError.Valid){
        allFieldsValid = false;
        Unhide(GameSelectErrorContainer);
        switch(gameSelectionValid){
            case validationError.NoSelectionError:
                document.getElementById("gameselect-error").innerHTML = "Please select a game.";
                break;
        }
    }else{
        Hide(GameSelectErrorContainer);
    }

    let BugDescriptionValid = validateBugDescription(BugDescription.value);
    if(BugDescriptionValid != validationError.Valid){
        allFieldsValid = false;
        Unhide(BugDescriptionErrorContainer);
        UpdateErrorMessage(document.getElementById("bug-description-error"), BugDescriptionValid);
    }else{
        Hide(BugDescriptionErrorContainer);
    }

    return allFieldsValid;

}

function validateGame(selected_value){

    if(selected_value === "no-game"){
        return validationError.NoSelectionError;
    }else{
        return validationError.Valid;
    }

}

function validateBugDescription(text){

    if(text === ""){
        return validationError.EmptyTextError;
    }else{
        return validationError.Valid;
    }

}