var content = {
 mantras: [
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.'
],
 affirmations: [
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.'
]
}

var message = document.querySelector(".message")
var meditationImage = document.querySelector(".meditation")
var form = document.querySelector(".user-form")
var userMessage = document.querySelector(".add-affirmation-text")

var mantraButton = document.querySelector(".mantra-select")
var affButton = document.querySelector(".affirmation-select")
var messageButton = document.querySelector("#messageButton")
var clearButton = document.querySelector(".clear")
var formButton = document.querySelector(".formButton")
var addMessageButton = document.querySelector(".add-affirmation")

window.addEventListener('load', easeIn)
mantraButton.addEventListener('click', messageSelect)
affButton.addEventListener('click', messageSelect)
messageButton.addEventListener('click', showMessage)
clearButton.addEventListener('click', clearMessage)
formButton.addEventListener('click', showForm)
addMessageButton.addEventListener('click', displayUserMessage)

function easeIn() {
  console.log("Hello")
  document.body.style.backgroundColor= '#134d71';
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function messageSelect() {
  messageButton.classList.remove("hidden")
  formButton.classList.remove("hidden")
//if form is not already dispayed, display formButton
  }

function showMessage() {
  clearButton.classList.remove("hidden")
  messageButton.classList.add("hidden")
  formButton.classList.add("hidden")
  form.classList.add("hidden")

  if (!affButton.checked && !mantraButton.checked) {
    messageButton.classlist.add("hidden")
  }

  if (affButton.checked) {
    if (userMessage.value) {
      message.innerHTML = `<h4>${userMessage.value}</h4>`
    } else {
      message.innerHTML = `<h4>${content.affirmations[getRandomIndex(content.affirmations)]}</h4>`
      console.log('AFF')
    }
  } else {
    if (userMessage.value) {
      message.innerHTML = `<h4>${userMessage.value}</h4>`
    } else {
      message.innerHTML = `<h4>${content.mantras[getRandomIndex(content.mantras)]}</h4>`
      console.log('MAN')
    }
  }
  userMessage.value = null
}

function clearMessage() {
  clearButton.classList.add("hidden")
  message.innerHTML = "<img class=\"meditation\" src=\"assets/meditate.svg\" alt=\"figure meditating\">"
}

function showForm() {
  form.classList.remove("hidden")
  formButton.classList.add("hidden")
}

function addAffirmation() {
  if (!userAffButton.checked && !userMantraButton.checked) {
    messageButton.classlist.add("hidden")
  }
}

function displayUserMessage() {
  form.classList.add("hidden")
  clearButton.classList.remove("hidden")
  formButton.classList.remove("hidden")

  message.innerHTML = `<h4>${userMessage.value}</h4>`
}
