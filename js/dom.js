// reference selected for scroll operation
const navSection = document.getElementById('nav-section');
const headerBtnContainer = document.getElementById('header-btn-container');
// reference selected for calculation
/* **** Elements */
const cardButtonNoakhali = document.getElementById('noakhali-donation-btn');
const cardButtonFeni = document.getElementById('feni-donation-btn');
const cardButtonQuota = document.getElementById('quota-donation-btn');
const btnDonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history')
const historyText = document.getElementById('card-body');



// nav current total amouont in value by NUMBER
///* *****VALUES***** */
const navCurrentTotal = getTextValueById("nav-amount-total")




// scroll effect functions

scrollEffect(navSection, 'bg-[#F9F7F3]/80');
scrollEffect(headerBtnContainer, 'bg-[#B4F461]/20');


// get input value and insert in card and nav section
/* *****Noakhali card**** */

cardButtonNoakhali.addEventListener('click', function(event){
    event.preventDefault();
    const donationMade = getInputValueById("noakhali-input-donation");
    console.log(donationMade);
    if(!isNaN(donationMade) && donationMade > 0 && donationMade < navCurrentTotal ){
    const cardCurrentDonationTotal = getTextValueById("noakhali-donation-total");
    const cardDonationTotal = cardCalculation(cardCurrentDonationTotal, donationMade);
    const navGrandTotal = navCalculation(navCurrentTotal , donationMade);
    let presentTimeDate = new Date();
    let presentDate = presentTimeDate.toLocaleDateString('bn-BD'); 
    let presentTime = presentTimeDate.toLocaleTimeString('bn-BD');
    
    // showing values in DOM
    
        document.getElementById("noakhali-donation-total").innerText = cardDonationTotal;
        document.getElementById('nav-amount-total').innerText = navGrandTotal;
        historyText.innerHTML += `
        <h2 class="card-title"> ${donationMade} Taka donated for Flood at Noakhali, Bangladesh</h2>
                            <p class="bg-slate-100 p-2 rounded-xl ">Date: <span class="font-bold text-xl"> ${presentDate}</span> Time: <span class="font-semibold text-xl">${presentTime}</span></p>
        `
        document.getElementById('noakhali-input-donation').value = "";
    }   
        else{
        alert('please give valid positive numbers and no ZERO amount')
    }
  
})

/* ***********Feni************ */
cardButtonFeni.addEventListener('click', function(event){
    event.preventDefault();
    const donationMade = getInputValueById("feni-input-donation");
    console.log(donationMade);
    if(!isNaN(donationMade) && donationMade > 0 && donationMade < navCurrentTotal){
    const cardCurrentDonationTotal = getTextValueById("feni-donation-total");
    const cardDonationTotal = cardCalculation(cardCurrentDonationTotal, donationMade);
    const navGrandTotal = navCalculation(navCurrentTotal , donationMade);
    let presentTimeDate = new Date();
    let presentDate = presentTimeDate.toLocaleDateString('bn-BD'); 
    let presentTime = presentTimeDate.toLocaleTimeString('bn-BD');

   
    // showing values in DOM
    
        document.getElementById("feni-donation-total").innerText = cardDonationTotal;
        document.getElementById('nav-amount-total').innerText = navGrandTotal;
        historyText.innerHTML += `
        <h2 class="card-title"> ${donationMade} Taka donated to <em>URGENT</em> relief works in Feni, Bangladesh</h2>
       <p class="bg-slate-100 p-2 rounded-xl ">Date: <span class="font-bold text-xl"> ${presentDate}</span> Time: <span class="font-semibold text-xl">${presentTime}</span></p>
        `
        document.getElementById('feni-input-donation').value = "";
    }   
        else{
        alert('please give valid positive numbers and no ZERO amount')
    }
  
})

/* *********Quota******* */
cardButtonQuota.addEventListener('click', function(event){
    event.preventDefault();
    const donationMade = getInputValueById("quota-input-donation");
    console.log(donationMade);
    if(!isNaN(donationMade) && donationMade > 0 && donationMade < navCurrentTotal){
    const cardCurrentDonationTotal = getTextValueById("quota-donation-total");
    const cardDonationTotal = cardCalculation(cardCurrentDonationTotal, donationMade);
    const navGrandTotal = navCalculation(navCurrentTotal , donationMade);
    let presentTimeDate = new Date();
    let presentDate = presentTimeDate.toLocaleDateString('bn-BD'); 
    let presentTime = presentTimeDate.toLocaleTimeString('bn-BD');
    // showing values in DOM
    
        document.getElementById("quota-donation-total").innerText = cardDonationTotal;
        document.getElementById('nav-amount-total').innerText = navGrandTotal;
        historyText.innerHTML += `
        <h2 class="card-title"> ${donationMade} Taka donated Qouta movement injured person, 2024</h2>
        <p class="bg-slate-100 p-2 rounded-xl ">Date: <span class="font-bold text-xl"> ${presentDate}</span> Time: <span class="font-semibold text-xl">${presentTime}</span></p>
        `
        document.getElementById('quota-input-donation').value = '';
    }   
        else{
        alert('please give valid positive numbers and no ZERO amount')
    }
  
})

/* ******donation and history button */
btnDonation.addEventListener('click', function(){
    btnHistory.classList.remove('bg-[#B4F461]');
    btnDonation.classList.add('bg-[#B4F461]')
    document.getElementById("donation").classList.remove('hidden');
    document.getElementById("history").classList.add('hidden');
   
})
btnHistory.addEventListener('click', function(){
    btnHistory.classList.add('bg-[#B4F461]');
    btnDonation.classList.remove('bg-[#B4F461]')
    document.getElementById("donation").classList.add('hidden');
    document.getElementById("history").classList.remove('hidden');
})

function showElements(id){
    
    
    document.getElementById(id).classList.remove()

}

