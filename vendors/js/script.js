import './vendors/js/swiper.min.js'

let swiperMain = new Swiper(".main-swiper__container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

let swiperReview = new Swiper(".review__swiper-container", {
  cssMode: true,
  navigation: {
    nextEl: ".review__swiper-button-next",
    prevEl: ".review__swiper-button-prev",
  },
  scrollbar: {
    el: ".review__swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 23,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 23,
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1870: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  slidesPerView: 4,
  spaceBetween: 30,
  mousewheel: true,
  keyboard: true,
});


let menuBtn = document.querySelector('.header__navbar-sidebar-btn');
let sidebarNav = document.querySelector('.sidebar-nav')

menuBtn.onclick = function () {
  menuBtn.classList.toggle("menu__active");
  sidebarNav.classList.toggle("sidebar__active");
}


const rangeSlider = document.getElementById('matchmaking__progressbar');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [20, 80],
    padding: [4, 0],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }
  });
}


let stageProgress = document.querySelector('.stage-list__bg')
let stage1 = document.querySelector('.stage-list__item1')
let stage2 = document.querySelector('.stage-list__item2')
let stage3 = document.querySelector('.stage-list__item3')

function stageBg() {
  if (stageProgress) {
    if (stage1.classList.contains('active')) {
      stageProgress.style.width = '38.5%'
    }
    if (stage2.classList.contains('active')) {
      stageProgress.style.width = '71.5%';
      // stage2.style.transform = 'none';
    }
    if (stage3.classList.contains('active')) {
      stageProgress.style.width = '110%';
      // stage2.style.transform = 'none';
    }
  }
}

stageBg()


document.querySelectorAll('.faq__item-ask').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    if (parent.classList.contains('faq__item-active')) {
      parent.classList.remove('faq__item-active');
    } else {
      document
        .querySelectorAll('faq__item')
        .forEach((child) => child.classList.remove('faq__item-active'))

      parent.classList.add('faq__item-active')
    }
  })
)


customSelect('.select__form');

customSelect('.matchmaking__progress-current-select');

customSelect('.account__progress-current-select');



const minScrollbarSkill = document.getElementById('matchmaking__min-scrollbar-skill');
const minScrollbarSkillMob = document.getElementById('matchmaking__min-scrollbar-skill-mobile');

if (minScrollbarSkill) {
  noUiSlider.create(minScrollbarSkill, {
    start: [0, 70],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    pips: {
      mode: 'range',
      density: 5,
    }
  });
}


if (minScrollbarSkillMob) {
  noUiSlider.create(minScrollbarSkillMob, {
    start: [0, 70],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    pips: {
      mode: 'range',
      density: 5,
    }
  });
}



const minScrollbarExper = document.getElementById('matchmaking__min-scrollbar-experience');
const minScrollbarExperMob = document.getElementById('matchmaking__min-scrollbar-experience-mobile');

if (minScrollbarExper) {
  noUiSlider.create(minScrollbarExper, {
    start: [0, 70],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    pips: {
      mode: 'range',
      density: 5,
    }
  });
}
if (minScrollbarExperMob) {
  noUiSlider.create(minScrollbarExperMob, {
    start: [0, 70],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    pips: {
      mode: 'range',
      density: 5,
    }
  });
}


let matchClass = document.querySelectorAll('.matchmaking__card3-class-label');

matchClass.forEach.call(matchClass, function (el) {
  el.addEventListener('click', function (e) {
    if (!this.classList.contains('active')) {
      Array.from(matchClass).forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
    } else {
      this.classList.remove('active');
    }
  })
});


let matchType = document.querySelectorAll('.matchmaking__card3-type-label');

matchType.forEach.call(matchType, function (type) {
  type.addEventListener('click', function (t) {
    if (!this.classList.contains('active')) {
      Array.from(matchType).forEach(itemType => {
        itemType.classList.remove('active');
      });
      this.classList.add('active');
    } else {
      this.classList.remove('active');
    }
  })
});



let swiperTankLine = new Swiper(".swiperTankLine", {
  spaceBetween: 50,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerColumn: 1
    },
    750: {
      slidesPerView: 4,
      spaceBetween: 21,
    },
    1870: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
let swiperTank = new Swiper(".swiperTank", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiperTankLine,
  },
});


let reviewsTab = document.querySelectorAll('.tab__item-reviews');

reviewsTab.forEach.call(reviewsTab, function (type) {
  type.addEventListener('click', function (t) {
    if (!this.classList.contains('active')) {
      Array.from(reviewsTab).forEach(itemType => {
        itemType.classList.remove('active');
      });
      this.classList.add('active');
    } else {
      this.classList.remove('active');
    }
  })
});


let reviewsPag = document.querySelectorAll('.reviews__pag-item');

reviewsPag.forEach.call(reviewsPag, function (type) {
  type.addEventListener('click', function (t) {
    if (!this.classList.contains('active')) {
      Array.from(reviewsPag).forEach(itemType => {
        itemType.classList.remove('active');
      });
      this.classList.add('active');
    } else {
      this.classList.remove('active');
    }
  })
});

let accountTab = document.querySelectorAll('.tab__item-account');

accountTab.forEach.call(accountTab, function (type) {
  type.addEventListener('click', function (t) {
    if (!this.classList.contains('active')) {
      Array.from(accountTab).forEach(itemType => {
        itemType.classList.remove('active');
      });
      this.classList.add('active');
    } else {
      this.classList.remove('active');
    }
  })
});