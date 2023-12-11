const buttonRating = document.querySelectorAll(".rating-btn")
const btnSubmit = document.getElementById('buttonSubmit')
const text = document.getElementById('thanks-rating')


let ratingNumber;


buttonRating.forEach(btn => {
  btn.addEventListener('click', () => {
    
    if(btn.classList[1] == undefined) {
      console.log('e')
      for(let i = 0; i < buttonRating.length; i++) {
  
        buttonRating[i].classList.remove('selected');
      }
      btn.classList.add("selected");
      ratingNumber = parseFloat(btn.textContent);
    }
  })
});


btnSubmit.addEventListener('click', () => {
  if (ratingNumber > 0 && ratingNumber <= 5) {
    document.querySelector('.card-submit').classList.toggle('hide')

    console.log(document.querySelector('.card-submit').className);

    document.querySelector('.card-thanks').classList.toggle('hide')

    text.textContent = `You selected ${ratingNumber} out of 5`
  }
})

