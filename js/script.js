const burger = document.querySelector('.header__burger'),
      headerWrapper = document.querySelector('.header__popup'),
      headerMenu = document.querySelector('.header__menu-list').cloneNode(1),
      body = document.querySelector('body')

function headerWrapperMenu() {
    headerWrapper.appendChild(headerMenu)
}
headerWrapperMenu()



burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    headerWrapper.classList.toggle('active')
    body.classList.toggle('lock')
})



const header = document.querySelector('.header')

//header script

const headerListener = () =>{
    let windowScrollY = window.scrollY
    windowScrollY >= 120 ? header.classList.add('active') : header.classList.remove('active')
//    console.log(windowScrollY)
}

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

// иницилизация перелистование вперед назад
sliderBtnNext.addEventListener('click', sliderInitNext)
sllderBtnPrev.addEventListener('click', sliderInitPrev)


