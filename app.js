const btnRate = document.querySelectorAll(".button-rate")
const btnSub = document.querySelector('#buttonSubmit')
const body = document.getElementById('body')


// Buttons Rate 

let getNum = "0"

let getNumber = (e) => {
  let num = e.target.innerText
  return getNum = num
}



const btnColor = (e) => {
  btnRate.forEach(btn => {
    btn.className = "p-4 rounded-full button-rate"
  })

    let focus = "p-4 rounded-full button-rate btn-focus"
    return e.target.className = focus
}

btnRate.forEach(btn => {

  btn.addEventListener("click", getNumber)
  btn.addEventListener('click', btnColor)
  
});


// Button submit

let addCard = () => {
  let numSub = `<span>${getNum}</span>`;

  const html = `<section class="w-4/5 max-w-sm">
<div class="card card-tanks flex flex-col p-4 rounded-xl items-center">
  <div class="flex justify-center my-5 ">
    <img  src="./images/illustration-thank-you.svg" alt="Tank you img">
  </div>
 
  <span class="card-selection my-4 rounded-full w-fit px-3 py-1.5">You selected ${numSub} out of 5</span>

  <h1 class="card-header py-3 text-xl font-bold">Thank you!</h1>
  <p class="card-text text-[15px] py-2"> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
</div>
</section>`;

  body.innerHTML = html
}

btnSub.addEventListener("click", addCard)


