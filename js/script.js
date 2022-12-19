const burger = document.querySelector('.header__burger'),
      headerWrapper = document.querySelector('.header__popup'),
      headerMenu = document.querySelector('.header__menu-list').cloneNode(1),
      body = document.querySelector('body'),
      header = document.querySelector('.header')

function headerWrapperMenu() {
    headerWrapper.appendChild(headerMenu)
}
headerWrapperMenu()



const headerListener = () =>{
    let windowScrollY = window.scrollY
    windowScrollY >= 120 ? header.classList.add('active') : header.classList.remove('active')
    console.log(windowScrollY)
}

window.addEventListener('scroll', headerListener)


burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    headerWrapper.classList.toggle('active')
    body.classList.toggle('lock')
})
