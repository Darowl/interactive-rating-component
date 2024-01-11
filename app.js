const buttonRating = Array.from(document.getElementById("rating-buttons").children);
const buttonSubmit = document.getElementById('rating-submit');
const text = document.getElementById('submit-thanks');
let ratingNumber = 0;

document.querySelector('#rating-form').addEventListener('submit', e => e.preventDefault())

buttonRating.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.className == '') {
      for(let i = 0; i < buttonRating.length; i++) {
        buttonRating[i].className = '';
        
      }
      btn.className = 'selected';
      ratingNumber = parseFloat(btn.textContent);
    }
  })
});

const submitNumber = (number) => {return 'vd'}

buttonSubmit.addEventListener('click', () => {
  if (ratingNumber > 0 && ratingNumber <= 5) {
    document.querySelector('.container-rating').classList.toggle('hide')
    document.querySelector('.container-submit').classList.toggle('hide')
    text.textContent = `You selected ${ratingNumber} out of 5`
  }
})




