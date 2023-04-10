
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
let hasBlackJack = false
let isAlive = false
let cards = []
let sum = 0

document.getElementById("start-game-btn").addEventListener("click", startGame)

document.getElementById("new-card-btn").addEventListener("click", newCard)

function startGame() {
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    if (!isAlive || hasBlackJack) return

    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }

    return randomNumber
}

function renderGame() {
    let messageText
    
    if (sum <= 20) {
        messageText = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageText = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageText = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = messageText
    cardsEl.textContent = `Cards: ${cards.join(" ")}`
    sumEl.textContent = `Sum: ${sum}`
}
