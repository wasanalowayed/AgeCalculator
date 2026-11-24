const btn = document.querySelector('#calculate');
const modal = document.querySelector('#modal');
const overlay = document.getElementById('overlay');
const result = document.getElementById('result');
const closeModalButton = document.querySelectorAll('[data-close-button]');

const now = new Date();
const currentYear = now.getFullYear();
// It start counting from 0 so add one
const currentMonth = now.getMonth() + 1;


btn.addEventListener('click', function() {

    let birthYear = document.getElementById('birth-year').value;
    let birthMonth = document.getElementById('birth-month').value;
    let ageYears = 0;
    let ageMonth = 0;

if(birthYear == '' || birthMonth == '') {
    //alert("Please fill all fields");
    document.getElementById('modal-comment').innerText = "Please fill out the fields with proper values.";
    openModal(modal);

    return;
}
else if (birthYear <= 0 || birthMonth < 1 || birthMonth > 12 ) {
document.querySelector('#modal .modal-body span').innerText = 
"Please insert proper values.";
openModal(modal);
return;}

else{

}
ageYears = currentYear - birthYear  ;
ageMonth = currentMonth - birthMonth;

if (ageMonth < 0) {
    ageMonth = (ageMonth + 12 ) ;
    ageYears = ageYears - 1;
}

result.innerText = "Your age is " + ageYears + " years and " + ageMonth + " months";

});

/*Close the modal event listener*/ 

closeModalButton.forEach(button=> {
    button.addEventListener('click', ()=>{
        closeModal(modal)
    })
})








/*Functions to open and close the modal */

function openModal (modal){
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal (modal){
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
