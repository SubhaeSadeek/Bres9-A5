
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