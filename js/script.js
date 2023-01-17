const burger = document.querySelector('.header__burger'),
      headerWrapper = document.querySelector('.header__popup'),
      headerMenu = document.querySelector('.header__menu-list').cloneNode(1),
      body = document.querySelector('body')

function headerWrapperMenu() {
    headerWrapper.appendChild(headerMenu)
}
headerWrapperMenu()

const burgerInit = () => {
    burger.classList.toggle('active')
    headerWrapper.classList.toggle('active')
    body.classList.toggle('lock')
} 

const burgerClose = () =>{
    burger.classList.remove('active')
    headerWrapper.classList.remove('active')
    body.classList.remove('lock')
}


burger.addEventListener('click', burgerInit)


const header = document.querySelector('.header')

//header scroll

let headerAnimate

const headerListener = () =>{
    let windowScrollY = window.scrollY
    windowScrollY >= 120 ? header.classList.add('active') : header.classList.remove('active')
    if(headerAnimate == -145) {
        header.style.transform = `translateY(${headerAnimate = 0}px)`
    }
}


const headerInit = () => {
    header.classList.remove('active')
}

//header scroll script

const headerListItem = document.querySelectorAll('.header__list-item[href*="#"]'),
      job = document.querySelector('.job'),
      jobContent = document.querySelector('.job__content'),
      jobClose = document.querySelector('.job__close')

jobClose.addEventListener('click', () =>{
    job.classList.remove('active')
    jobContent.classList.remove('active')
})


headerListItem.forEach(element => {
    if(element){
        element.addEventListener('click', function(e){
            e.preventDefault()
            headerListItemID = this.getAttribute('href')
            document.querySelector(headerListItemID).scrollIntoView({
                behavior : 'smooth', block : 'start'
            })
            job.classList.toggle('active')
            jobContent.classList.toggle('active')
            burgerClose()
            setTimeout(() => {
               header.style.transform = `translateY(${headerAnimate = -145}px)`
               job.style.backgroundColor = 'rgba(98, 99, 100, 0.7)'
            }, 500);
        })
    }
})

//Прослушка header

window.addEventListener('scroll', headerListener)

//slider 

//Константы 
const sliderLineImg = document.querySelector('.slider__line-img'),
      sliderImages = document.querySelectorAll('.slider__line-img img'),
      sliderBtnNext = document.querySelector('.next'),
      sllderBtnPrev = document.querySelector('.prev')

//Переменные
let sliderCount = 0,
    sliderWidth

//Функции 
const sliderInit = () =>{
    sliderWidth = document.querySelector('.slider__container-line').offsetWidth
    sliderRolls()
}

const sliderRolls = () =>{
    sliderLineImg.style.left = -sliderCount * sliderWidth + 'px'
}

const sliderInitNext = () =>{
    sliderInit()
    sliderCount++
    if (sliderCount >= sliderImages.length){ sliderCount = 0}
    sliderRolls()
}

const sliderInitPrev = () => {
    sliderInit()
    sliderCount--
    if (sliderCount < 0){ sliderCount = sliderImages.length -1}
    sliderRolls()
}


// Прослушивание
window.addEventListener('resize' ,sliderInit)

// иницилизация перелистывание вперед назад
sliderBtnNext.addEventListener('click', sliderInitNext)
sllderBtnPrev.addEventListener('click', sliderInitPrev)


