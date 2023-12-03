var bttNav = document.querySelector('#bttNav')
var bttMenu = document.querySelector('#bttMenu')
var botõesHeader = document.querySelector('#botõesHeader')
var SeparadorHeader = document.querySelector('.PontoSeparador')
var barra1 = document.querySelector('#barra1')
var barra2 = document.querySelector('#barra2')

function BttMenu(){
    barra1.classList.toggle('barra1-1')
    barra1.classList.toggle('barra1-2')

    barra2.classList.toggle('barra2-1')
    barra2.classList.toggle('barra2-2')

    bttNav.style.backgroundColor = 'rgba(255, 255, 255, 0.082)'
    bttNav.style.backdropFilter = 'blur(10px)'
    bttNav.style.height = 'max-content'
    bttNav.style.width = '200px'
    bttNav.style.paddingBottom = '20px'
    bttMenu.style.left = '150px'
    

    botõesHeader.classList.toggle('botõesHeaderBarra1')
    botõesHeader.classList.toggle('botõesHeaderBarra2')

    bttMenu.removeEventListener('click', BttMenu)
    bttMenu.addEventListener('click', BttMenuRemove)
    function BttMenuRemove(){
        barra1.classList.toggle('barra1-1')
        barra1.classList.toggle('barra1-2')

        barra2.classList.toggle('barra2-1')
        barra2.classList.toggle('barra2-2')

        botõesHeader.classList.toggle('botõesHeaderBarra2')
        botõesHeader.classList.toggle('botõesHeaderBarra1')

        bttNav.removeAttribute('style')
        bttMenu.removeAttribute('style')
        bttMenu.removeEventListener('click', BttMenuRemove)
        bttMenu.addEventListener('click', BttMenu)
    }
}
bttMenu.addEventListener('click', BttMenu)