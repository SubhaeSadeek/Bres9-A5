
// scroll effect funtion
function scrollEffect(elements, bgColor){

document.addEventListener('scroll', function(){
    if(window.scrollY > 75){

        elements.classList.add(bgColor);
    }
    else{
        elements.classList.remove(bgColor);
    }
})
}



// calculations

function cardCalculation(cardCurrentTotal, newDonation){
    const cardTotal = cardCurrentTotal + newDonation;
    return cardTotal
}

function navCalculation(grandCurrentTotal, newDonation){
    
    const navTotal =  grandCurrentTotal - newDonation;
    return navTotal 
}

// capturing values from gettingthe elements

function getInputValueById(id){
   const donationInputValue =  parseFloat(document.getElementById(id).value);
   return donationInputValue
   
}

function getTextValueById(id){
    const textItem = document.getElementById(id).innerText
    const textValue = parseFloat(textItem);
    return textValue
}