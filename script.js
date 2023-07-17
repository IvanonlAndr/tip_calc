let billInput = document.querySelector('#bill')
let peopleInput = document.querySelector('#numberPeople')
let tipSelects = document.querySelectorAll('.tip__select-button')
let customTip = document.querySelector('#custom')
let tipAmount = document.querySelector('#tipAmount')
let total = document.querySelector('#total')
let reset = document.querySelector('#reset')
let errorLabels = document.querySelectorAll('#error')
console.log(errorLabels[0])
for (let i = 0; i < tipSelects.length; i++) {
    tipSelects[i].addEventListener('click', function () {
        tipSelects.forEach((tipSelect) => {
            tipSelect.classList.remove('active')
        })
        tipSelects[i].classList.add('active')
    })
};
tipSelects[0].addEventListener('click', fivePrec)
tipSelects[1].addEventListener('click', tenPrec)
tipSelects[2].addEventListener('click', fifteenPrec)
tipSelects[3].addEventListener('click', twenFivePrec)
tipSelects[4].addEventListener('click', fiftyPrec)
customTip.addEventListener('input', customPrec)
reset.addEventListener('click',function(){
    location.reload()
})
function fivePrec() {
    tipAmount.textContent = `$${Math.floor((billInput.value / peopleInput.value) * 5) / 100}`
    total.textContent = `$${Math.floor((Number(billInput.value) + Number(billInput.value) * 5 / 100) / Number(peopleInput.value) * 100) / 100}`
}

function tenPrec() {
    tipAmount.textContent = `$${Math.floor((billInput.value / peopleInput.value) * 10) / 100}`
    total.textContent = `$${Math.floor((Number(billInput.value) + Number(billInput.value) * 10 / 100) / Number(peopleInput.value) * 100) / 100}`
}

function fifteenPrec() {
    tipAmount.textContent = `$${Math.floor((billInput.value / peopleInput.value) * 15) / 100}`
    total.textContent = `$${Math.floor((Number(billInput.value) + Number(billInput.value) * 15 / 100) / Number(peopleInput.value) * 100) / 100}`
}

function twenFivePrec() {
    tipAmount.textContent = `$${Math.floor((billInput.value / peopleInput.value) * 25) / 100}`
    total.textContent = `$${Math.floor((Number(billInput.value) + Number(billInput.value) * 25 / 100) / Number(peopleInput.value) * 100) / 100}`
}

function fiftyPrec() {
    tipAmount.textContent = `$${Math.floor((billInput.value / peopleInput.value) * 50) / 100}`
    total.textContent = `$${Math.floor((Number(billInput.value) + Number(billInput.value) * 50 / 100) / Number(peopleInput.value) * 100) / 100}`
}

function customPrec() {
    tipAmount.textContent = `$${Math.floor((billInput.value / peopleInput.value) * customTip.value) / 100}`
    total.textContent = `$${Math.floor((Number(billInput.value) + Number(billInput.value) * customTip.value / 100) / Number(peopleInput.value) * 100) / 100}`
}

if (billInput.value === '' || peopleInput.value === '') {
    tipAmount.textContent = '$0.00'
    total.textContent = '$0.00'
}

billInput.addEventListener('input', function(){
    if(billInput.value == 0){
        errorLabels[0].style.display = 'block'
        billInput.style.border = `2px solid #E17052`
    }
})
peopleInput.addEventListener('input', function(){
    if(peopleInput.value == 0){
        errorLabels[1].style.display = 'block'
        peopleInput.style.border = `2px solid #E17052`
    }
})