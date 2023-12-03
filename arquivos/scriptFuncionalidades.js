var áreaAtuaçãoSection = document.querySelector('#AtuaçãoNoDireito')
var bttAtuação = document.querySelector('#bttAreaAtuação')

var SeçãoWho = document.querySelector('#MasterQuemSomos')
var bttWho = document.querySelector('#BttWho')

var SeçãoCrew = document.querySelector('#equipe')
var bttCrew = document.querySelector('#bttCrew')

var SeçãoContact = document.querySelector('#ContatoSeção')
var bttContact = document.querySelector('#bttContact')

var bttTop = document.querySelector('#BttReturn')
var topo = document.querySelector('#ImgLogoEmpresa')

function ToAtuação(){
    let SectionRect = áreaAtuaçãoSection.getBoundingClientRect()
    let centerY = SectionRect.top + SectionRect.height / 2 - window.innerHeight / 2
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttAtuação.addEventListener('click', ToAtuação)

function ToWho(){
    let SectionRect = SeçãoWho.getBoundingClientRect()
    let centerY = SectionRect.top + SectionRect.height / 2 - window.innerHeight / 2
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttWho.addEventListener('click', ToWho)

function ToCrew(){
    let SectionRect = SeçãoCrew.getBoundingClientRect()
    let centerY = SectionRect.top + SectionRect.height / 2 - window.innerHeight / 2
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttCrew.addEventListener('click', ToCrew)

function ToContact(){
    let SectionRect = SeçãoContact.getBoundingClientRect()
    let centerY = SectionRect.top + SectionRect.height / 2 - window.innerHeight / 2
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttContact.addEventListener('click', ToContact)

function ToTop(){
    let SectionRect = topo.getBoundingClientRect()
    let centerY = SectionRect.top + SectionRect.height / 2 - window.innerHeight / 2
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttTop.addEventListener('click', ToTop)