const submit = document.querySelector("#submit");
const landing = document.querySelector(".wrapper")
const final = document.querySelector(".thanks_wrapper")
let count = 0;

submit.addEventListener("click", () => {
    if(count > 0){
        landing.classList.add("none");
        final.classList.remove("none");
    }
});

const rate = document.querySelectorAll(".rate");
const userRate = document.querySelector("#userrate");

rate.forEach((rate, idx) => {
    rate.addEventListener("click", ()=> {

      document.querySelector("button.rate:nth-child(1)").classList.remove("active");
      document.querySelector("button.rate:nth-child(2)").classList.remove("active");
      document.querySelector("button.rate:nth-child(3)").classList.remove("active");
      document.querySelector("button.rate:nth-child(4)").classList.remove("active");
      document.querySelector("button.rate:nth-child(5)").classList.remove("active");
        userRate.innerText = 0
        rate.classList.add("active");
        rate.classList.remove("hov");
        count += 1
        userRate.innerText = (`${idx + 1}`);
        // document.querySelector(".rating").style.pointerEvents="none";
        
    })
});

