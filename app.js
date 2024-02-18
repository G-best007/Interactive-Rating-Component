const submit = document.querySelector('.submit-btn')
const btns = document.querySelectorAll('.btn')
const output = document.querySelector('.output')
const hero = document.querySelector('.hero')
const exit = document.querySelector('.thankyou')

submit.addEventListener('click', display)

// displaying the thank you state

function display() {
 
 hero.classList.add('show-box')
 
}

const newBtn = [...btns];

// getting the rating
newBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let number = e.currentTarget.getAttribute('data-num');
    output.textContent = number;

    // Remove background color from all buttons
    newBtn.forEach(function (btn) {
      btn.classList.remove('active'); 
    });

    // Add background color from all buttons
    btn.classList.toggle('active'); 

  
  });
});




// exit the thank you state

exit.addEventListener('click', function () {
  hero.classList.remove('show-box')
})

