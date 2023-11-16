let size = prompt('What do you want the size to be?')

let dimension = 512

const grid = document.querySelector('.grid')
grid.setAttribute('style', `width: ${dimension}px; height: ${dimension}px;`)

for (let i=0; i < parseInt(size)**2; i++) {
    const currdiv = document.createElement('div')
    currdiv.setAttribute('style', `height: ${dimension/parseInt(size)}px; width: ${dimension/parseInt(size)}px;`)
    grid.appendChild(currdiv)
}

grid.addEventListener('mouseover', function(e) {
    e.target.style.background = 'white'
})