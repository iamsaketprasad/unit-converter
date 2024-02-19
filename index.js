/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    const input = Number(inputEl.value)
    
    lengthEl.textContent = `${input} meters = ${(input * 3.281).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meters`
    
    volumeEl.textContent = `${input} liters = ${(input * 0.264).toFixed(3)} gallons | ${input} gallons = ${(input * 3.785).toFixed(3)} liters`
    
    massEl.textContent = `${input} kilos = ${(input * 2.204).toFixed(3)} pounds | ${input} pounds = ${(input / 2.204).toFixed(3)} kilos`
})
