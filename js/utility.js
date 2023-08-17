function getInputFieldById (inputFieldId) {
    const input = document.getElementById(inputFieldId);
    const inputString = input.value;
    const newInput = parseFloat(inputString);
    input.value = '';
    return newInput;
    
}


function getElementTextValueById (elementValueId){
    const textElement = document.getElementById(elementValueId);
    const textElementString = textElement.innerText;
    const newTextElement = parseFloat(textElementString);
    return newTextElement;
}

function setValue (valueElementId , value){
    const valueElementId1 = document.getElementById(valueElementId);
    valueElementId1.innerText = value;
}

