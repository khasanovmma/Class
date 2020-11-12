// {} - literal obj
// new - global obj
// new Date

// class - ES6 

class Human {
  constructor(obj) {
    this.name = 'odamzod'
    this.qoli = obj.qoli
    this.oyogi = obj.oyogi
    this.yurak = obj.yurak == undefined ? true : obj.yurak
  }
}


// vorislik - extends
class Man extends Human {
  constructor(obj) {
    super(obj)
    this.gender = 'e'
    this.hair = obj.hair
  }
}

class Woman extends Human {
  constructor(obj) {
    super(obj)
    this.gender = 'a'
    this.hair = obj.hair
  }
}

const odam = new Human({
  qoli: 2,
  oyogi: 2,
  yurak: '3ta kamerali'
})

const erkak = new Man({
  qoli: 2,
  oyogi: 2,
  hair: 'short'
})

const ayol = new Woman({
  qoli: 2,
  oyogi: 2,
  hair: 'long'
})


// console.table(odam)
// console.table( erkak)
// console.table( ayol)

const navigation = document.querySelector('.header__nav')

class Scroll {
  constructor(set) {
    console.log(set);
    if (typeof set.el == 'string') {
      this.el = document.querySelector(set.el)
    } else if (set.el instanceof HTMLElement) {
      this.el = set.el
    }
    this.top = (set.top < 0) ? this.el.clientHeight : set.top;
    console.log(this.top);
    this.unit = set.unit
    this.el.style.top = this.scrollUnit() + 'px'
    this.el.style.position = 'fixed'
    window.addEventListener('scroll', () => this.scroll())
    window.addEventListener('resize', () => this.scroll())
  }
  scroll() {
    this.measure = this.scrollUnit()
    // pageYOffset - tepadan scrollgacha bo'lgan masofa
    if (this.measure - pageYOffset > 0) {
      this.el.style.top = `${this.measure - pageYOffset}px`
    } else {
      this.el.style.top = 0
    }
  }
  scrollUnit() {
    if (this.unit == 'px') {
      return this.top
    } else if (this.unit == '%' || this.unit == undefined) {
      return window.innerHeight / 100 * this.top - this.el.clientHeight
    }
  }
}

const obj = new Scroll({
  el: '.header__nav',
  top: 100,
  unit: '%'
})


function randomNum() {
  return Math.floor(Math.random() * 500 + 1);
}

class Runner {
  constructor(hover) {
    this.ele = document.querySelector(hover.ele)
    this.ele.addEventListener('mouseover', () => {
      this.ele.style.margin = `${randomNum()}px ${randomNum()}px ${randomNum()}px ${randomNum()}px`
    })
    
    this.linkMenu = document.querySelector(hover.linkMenu)
    this.linkMenu.style = ` height: 100vh;
                            width: 50%; `

    this.openBtn = document.querySelector(hover.openBtn)
    this.closeBtn = document.querySelector(hover.closeBtn)

    this.openBtn.addEventListener('click', () => {
        this.linkMenu.classList.add('active')
    })
    this.closeBtn.addEventListener('click', () => {
      this.linkMenu.classList.remove('active')
  })
  }
}

const content = new Runner({
  ele: '.header__content',
  linkMenu: '.header__menu',
  openBtn: ".btn-open",
  closeBtn: ".btn-close"
})

