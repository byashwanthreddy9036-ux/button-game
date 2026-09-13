const button = document.getElementById('Button')
const counter = document.getElementById('Count')
const winsDisplay = document.getElementById('Wins')
const bestDisplay = document.getElementById('Best')
const div = document.getElementById('div')

let count = 0
let wins = Number(localStorage.getItem('wins')) || 0
let best = localStorage.getItem('best') !== null ? Number(localStorage.getItem('best')) : null

counter.innerText = count
winsDisplay.innerText = wins
bestDisplay.innerText = best !== null ? best : '—'

const dodge = () => {
    const maxX = Math.max(window.innerWidth - 200, 40)
    const maxY = Math.max(window.innerHeight - 200, 40)
    const x = Math.floor(Math.random() * maxX)
    const y = Math.floor(Math.random() * maxY)

    button.style.left = ''
    button.style.right = ''
    button.style.top = ''
    button.style.bottom = ''

    if (x % 2 === 0) {
        button.style.left = x + 'px'
    } else {
        button.style.right = x + 'px'
    }
    if (y % 2 === 0) {
        button.style.top = y + 'px'
    } else {
        button.style.bottom = y + 'px'
    }
}

const win = (e) => {
    e.stopPropagation()

    if (best === null || count < best) {
        best = count
        localStorage.setItem('best', String(best))
        bestDisplay.innerText = best
    }

    wins++
    localStorage.setItem('wins', String(wins))
    winsDisplay.innerText = wins

    count = 0
    counter.innerText = count

    button.innerText = 'You Win!'
    button.removeEventListener('click', win)
    setTimeout(() => {
        button.innerText = 'Click me'
        button.addEventListener('click', win)
    }, 1500)
}

const missCounter = () => {
    count++
    counter.innerText = count
}

button.addEventListener('mouseenter', dodge)
button.addEventListener('mouseover', dodge)
button.addEventListener('touchstart', (e) => {
    e.preventDefault()
    dodge()
}, { passive: false })
button.addEventListener('click', win)
div.addEventListener('click', missCounter)
