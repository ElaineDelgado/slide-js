const slides = document.querySelectorAll("[data-js='carousel__item']")
const buttonNext = document.querySelector("[data-js='carousel__button--next']")
const buttonPrev = document.querySelector("[data-js='carousel__button--prev']")

let currentSlideIndex = 0
const lastSlideIndex = slides.length - 1

const manipulateSlideClasses = (correctSlideIndex) => {
  slides.forEach((image) => image.classList.remove('carousel__item--visible'))
  slides[correctSlideIndex].classList.add('carousel__item--visible')
}

const showNextSlide = () => {
  const correctSlideIndex =
    currentSlideIndex === lastSlideIndex
      ? (currentSlideIndex = 0)
      : ++currentSlideIndex

  manipulateSlideClasses(correctSlideIndex)
}

const showPreviusSlide = () => {
  const correctSlideIndex =
    currentSlideIndex === 0
      ? (currentSlideIndex = lastSlideIndex)
      : --currentSlideIndex

  manipulateSlideClasses(correctSlideIndex)
}


buttonNext.addEventListener('click', showNextSlide)
buttonPrev.addEventListener('click', showPreviusSlide)
setInterval(showNextSlide, 3500)
