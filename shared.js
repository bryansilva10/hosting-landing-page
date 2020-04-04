let backdrop = document.querySelector(".backdrop");
let selectPlanButtons = document.querySelectorAll(".plan button");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

//loop to attach event listener
for (let i = 0; i < selectPlanButtons.length; i++) {
    //event listeners to show modal and backdrop when any of the three buttons are clicked
    selectPlanButtons[i].addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

//event listener to hide backdrop and modal when either the backdrop or NO button are clicked
backdrop.addEventListener('click', () => {
    //hide when backdrop is clicked
    // mobileNav.style.display = "none";
    mobileNav.classList.remove('open');
    closeModal();
});

//event listener to hide backdrop and modal when either the backdrop or NO button are clicked
if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

//function to close/hide modal
function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');
}

//event listener for hamburguer menu
toggleButton.addEventListener('click', () => {
    //show mobile nav when clicked
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})
