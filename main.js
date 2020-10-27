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
// 'I am in the process of becoming the best version of myself.',
// 'I have the freedom & power to create the life I desire.',
// 'I choose to be kind to myself and love myself unconditionally.',
// 'My possibilities are endless.',
// 'I am worthy of my dreams.',
// 'I am enough.',
// 'I deserve to be healthy and feel good.',
// 'I am full of energy and vitality and my mind is calm and peaceful.',
// 'Every day I am getting healthier and stronger.',
// 'I honor my body by trusting the signals that it sends me.',
// 'I manifest perfect health by making smart choices.'
],
}
var favoriteMessages = []
var seenAffirmations = []
var seenMantras = []

var message = document.querySelector(".message")
var meditationImage = document.querySelector(".meditation")
var form = document.querySelector(".user-form")
var userMessage = document.querySelector(".user-form")
var favorites = document.querySelector(".favorites")

var mantraButton = document.querySelector(".mantra-select")
var affButton = document.querySelector(".affirmation-select")
var messageButton = document.querySelector(".receive-message-button")
var clearButton = document.querySelector(".clear")
var formButton = document.querySelector(".form-button")
var favoriteButton = document.querySelector(".favorite-button")

window.addEventListener('load', restoreFavorites)
mantraButton.addEventListener('click', messageSelect)
affButton.addEventListener('click', messageSelect)
messageButton.addEventListener('click', showMessage)
formButton.addEventListener('click', showForm)
clearButton.addEventListener('click', clearMessage)
favoriteButton.addEventListener('click', addFavorite)

function reveal(element) {
  element.classList.remove("hidden")
}

function hide(element) {
  element.classList.add("hidden")
}

function messageSelect() {
  reveal(messageButton)
  reveal(formButton)
  if (!form.classList.contains("hidden")) {
    hide(formButton)
  }
}

function showForm() {
  reveal(form)
  hide(formButton)
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function verifySelection() {
  if (!affButton.checked && !mantraButton.checked) {
    hide(messageButton)
  }
}

function displayCurrent(input, array, seenArray) {
  if (!input) {
    var index = getRandomIndex(array)
    input = array[index]
    if (array.length) {
      seenArray.push(array.splice(index, 1))
    } else {
      array = seenArray
      seenArray = []
      input = "You're out of affirmations, you will now see repeats!"
    }
  }

  message.innerHTML = `<h4>${input}</h4>`
}

function showMessage() {
  reveal(clearButton)
  reveal(favoriteButton)
  hide(messageButton)
  hide(formButton)
  hide(form)
  hide(meditationImage)

  verifySelection()

  if (affButton.checked) {
    if (userMessage.value) {
      displayCurrent(userMessage.value)
      content.affirmations.push(userMessage.value)
    } else {
      displayCurrent(userMessage.value, content.affirmations, seenAffirmations)
    }
  } else {
    if (userMessage.value) {
      displayCurrent(userMessage.value)
      content.mantras.push(userMessage.value)
    } else {
      displayCurrent(userMessage.value, content.mantras, seenMantras)
    }
  }
  userMessage.value = null
}

function clearMessage() {
  hide(clearButton)
  hide(favoriteButton)
  message.innerHTML = ''
  reveal(meditationImage)
}

function displayFavorites() {
  reveal(favorites)
  favorites.innerHTML = '<h3>Favorites</h3>'
  for(var i = 0; i < favoriteMessages.length; i++) {
    favorites.innerHTML += `<h4>${favoriteMessages[i]}</h4>`
  }
}

function addFavorite() {
  reveal(favorites)
  var currentMessage = document.querySelector("h4").innerText
  favoriteMessages.push(currentMessage)
  localStorage.setItem('localFavoriteMessages', JSON.stringify(favoriteMessages))
  displayFavorites()
  clearMessage()
}

function restoreFavorites() {
  favoriteMessages = localStorage.getItem('localFavoriteMessages') ? JSON.parse(localStorage.getItem('localFavoriteMessages')) : []
  if (favoriteMessages.length) {
    displayFavorites()
  }
}
