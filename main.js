var mantras = [
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
]
var affirmations = [
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

var message = document.querySelector(".message")
var meditationImage = document.querySelector(".meditation")

var mantraButton = document.querySelector(".mantra-select")
var affButton = document.querySelector(".affirmation-select")
var messageButton = document.querySelector("#messageButton")
var clearButton = document.querySelector(".clear")

mantraButton.addEventListener('click', mantraClicked)
affButton.addEventListener('click', affClicked)
messageButton.addEventListener('click', showMessage)
clearButton.addEventListener('click', clearMessage)


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//messageButton.disable = true;

//xor
function affClicked() {
  messageButton.classList.remove("hidden")
  mantraButton.checked = false
  affButton.checked = true
  }

function mantraClicked() {
    messageButton.classList.remove("hidden")
    mantraButton.checked  = true
    affButton.checked = false
  }


function showMessage() {
  clearButton.classList.remove("hidden")
  messageButton.classList.add("hidden")

  if (!affButton.checked && !mantraButton.checked) {
    messageButton.classlist.add("hidden")
  }

  if (affButton.checked) {
   message.innerHTML = `<h4>${affirmations[getRandomIndex(affirmations)]}</h4>`
   console.log('AFF')
  } else {
    message.innerHTML = `<h4>${mantras[getRandomIndex(mantras)]}</h4>`
    console.log('MAN')
  }
}

function clearMessage() {
  clearButton.classList.add("hidden")
  message.innerHTML = "<img class=\"meditation\" src=\"assets/meditate.svg\" alt=\"figure meditating\">"
}
