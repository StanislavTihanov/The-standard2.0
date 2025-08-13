"use strict"
//------------------------------------------------------------------------Готовые блоки кода

//------------------------------------------------------------------------preloader
//document.body.onload = () => {
//  setTimeout(() => {
//    let preloader = document.getElementById('preloader');
//    if (!preloader.classList.contains('done')) {
//      preloader.classList.add('done');
//    }
//  }, 1000);
//}
//------------------------------------------------------------------------preloader

//------------------------------------------------------------------------таймер обратного отсчета
//const startDays = 2; // Количество дней
//const startHours = 5; // Количество часов
//const startMinutes = 10; // Количество минут
//const startSeconds = 0; // Количество секунд
//
//// Переводим все в секунды
//let time = startDays * 24 * 60 * 60 + startHours * 60 * 60 + startMinutes * 60 + startSeconds;
//
//const countdownElement = document.getElementById('countdown');
//
//function updateCountdown() {
//    const days = Math.floor(time / (24 * 60 * 60)); // Количество дней
//    const hours = Math.floor((time % (24 * 60 * 60)) / 3600); // Количество часов
//    const minutes = Math.floor((time % 3600) / 60); // Количество минут
//    const seconds = time % 60; // Количество секунд
//
//    // Форматируем время
//    countdownElement.innerText = `${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//
//    if (time > 0) {
//        time--;
//    } else {
//        clearInterval(timer);
//        countdownElement.innerText = "Время вышло!";
//    }
//}
//
//const timer = setInterval(updateCountdown, 1000);
//------------------------------------------------------------------------таймер обратного отсчета


//------------------------------------------------------------------------появление бекграунда у шапки при прокрутки вниз
//window.addEventListener('scroll', () => {
//  if(pageYOffset > 50) {
//    document.querySelector('.header').classList.add('header__bg');
//  } else {
//    document.querySelector('.header').classList.remove('header__bg');
//  }
//});
//------------------------------------------------------------------------появление бекграунда у шапки при прокрутки вниз


//------------------------------------------------------------------------search
//const searchButtons = document.querySelectorAll('.search__btn');
//const searchWindows = document.querySelectorAll('.search__window');
//
//searchButtons.forEach((searchBtn, index) => {
//  const searchWindow = searchWindows[index]; // Привязываем соответствующее окно к каждой кнопке
//
//  searchBtn.addEventListener("click", function (e) {
//    e.stopPropagation();
//    searchWindow.classList.toggle('_act'); // Открываем/закрываем конкретное окно поиска
//  });
//
//  document.addEventListener("click", function (e) {
//    if (!searchBtn.contains(e.target) && !searchWindow.contains(e.target)) {
//      searchWindow.classList.remove('_act'); // Закрываем окно, если клик вне кнопки или окна
//    }
//  });
//});
//------------------------------------------------------------------------search

//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.burger');
const menuBody= document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}
//------------------------------------------------------------------------закрытие меню при клике вне его
document.addEventListener ('click', (e) => {
  if (!burgerMenu.contains(e.target)) {
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  }
})
//------------------------------------------------------------------------закрытие меню при клике вне его

//------------------------------------------------------------------------Fancybox
//document.addEventListener("DOMContentLoaded", function () {
//  if (typeof Fancybox !== "undefined" && typeof Fancybox.bind === "function") {
//      Fancybox.bind("[data-fancybox]", {
//          // Кастомные опции
//      });
//  }
//});
//------------------------------------------------------------------------Fancybox

//------------------------------------------------------------------------Прокрутка при клике
//let buttons = document.querySelectorAll('.menu__link');
//
//buttons.forEach((elem)=>{
//  elem.addEventListener('click',()=>{
//    menuBody.classList.remove('_active');
//    burgerMenu.classList.remove('_active');
//  })
//})
//
//const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
//
//if (menuLinks.length > 0) {
//  menuLinks.forEach(menuLink => {
//    menuLink.addEventListener("click", onMenuLinkClick);
//  });
//  function onMenuLinkClick(e) {
//    const menuLink = e.target;
//    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//        const gotoBlock = document.querySelector(menuLink.dataset.goto);
//        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
//      
//        window.scrollTo({
//        top:gotoBlockValue,
//        behavior: "smooth"
//      });
//      e.preventDefault();
//    }
//  }
//}
//------------------------------------------------------------------------Прокрутка при клике

//------------------------------------------------------------------------Слайдер
//const mainSlider = document.querySelector('.main-slider');
//if (mainSlider) {
//  new Swiper(mainSlider, {
//    direction: 'horizontal',
//    loop: true,
//    slidesPerView: 3,
//    spaceBetween: 20,
//    speed: 1000,
//    autoHeight: false,
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
//    pagination: {
//      el: '.swiper-pagination',
//      clickable: true,
//    },
//    breakpoints: {
//      320: {
//        slidesPerView: 1,
//      },
//      640: {
//        slidesPerView: 2,
//      },
//      980: {
//        slidesPerView: 3,
//      }
//    }
//  });
//}
//------------------------------------------------------------------------Слайдер


//-----------------------------------------------------------------------сортировка по атрибутам

//class FilterGallery {
//  
//  constructor() {
//    // Находим элементы меню и контейнер с постами
//    this.filterMenuList = document.querySelectorAll('.filtermenu__list li');
//    this.container = document.querySelector('.filtermenu__container');
//    this.posts = Array.from(this.container.querySelectorAll('.post'));  // Собираем все посты один раз в массив
//    
//    this.updateMenu('all');
//    this.filterMenuList.forEach(item => item.addEventListener('click', (event) => this.onClickFilterMenu(event)));
//  }
//
//  onClickFilterMenu(event) {
//    const target = event.target.closest('li');  // Используем closest чтобы найти li
//    const targetFilter = target.getAttribute('data-filter');
//
//    this.updateMenu(targetFilter);
//    this.updateGallery(targetFilter);
//  }
//
//  updateMenu(targetFilter) {
//    this.filterMenuList.forEach(item => item.classList.remove('active_'));
//    const activeItem = Array.from(this.filterMenuList).find(item => item.getAttribute('data-filter') === targetFilter);
//    if (activeItem) activeItem.classList.add('active_');
//  }
//
//  updateGallery(targetFilter) {
//    // Оптимизация через фильтрацию всех постов разом
//    const postsToShow = targetFilter === 'all'
//      ? this.posts
//      : this.posts.filter(post => post.classList.contains(targetFilter));
//    
//    const postsToHide = this.posts.filter(post => !postsToShow.includes(post));
//
//    // Анимация скрытия и показа
//    this.container.style.opacity = 0;
//    setTimeout(() => {
//      postsToHide.forEach(post => post.style.display = 'none');
//      postsToShow.forEach(post => post.style.display = '');
//      this.container.style.opacity = 1;
//    }, 300);
//  }
//}
//const filterGallery = new FilterGallery();


//-----------------------------------------------------------------------сортировка по атрибутам

//------------------------------------------------------------------------select выпадающий список
//document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
//  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
//  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
//  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
//  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
//
//  // Функция для закрытия текущего дропдауна
//  function closeCurrentDropdown() {
//    dropDownList.classList.remove('dropdown__list--active');
//    dropDownBtn.classList.remove('dropdown__button--active');
//  }
//
//  // Открыть/закрыть текущий дропдаун
//  dropDownBtn.addEventListener('click', function (e) {
//    e.stopPropagation(); // Остановить всплытие события
//    e.preventDefault(); // Предотвращаем отправку формы
//    const isActive = dropDownList.classList.contains('dropdown__list--active');
//
//    // Закрываем все дропдауны перед открытием текущего
//    document.querySelectorAll('.dropdown__list--active').forEach(function(activeList) {
//      activeList.classList.remove('dropdown__list--active');
//    });
//    document.querySelectorAll('.dropdown__button--active').forEach(function(activeButton) {
//      activeButton.classList.remove('dropdown__button--active');
//    });
//
//    // Если текущий дропдаун не был активным, открываем его
//    if (!isActive) {
//      dropDownList.classList.add('dropdown__list--active');
//      dropDownBtn.classList.add('dropdown__button--active');
//    }
//  });
//
//  // Выбор элемента списка
//  dropDownListItems.forEach(function (listItem) {
//    listItem.addEventListener('click', function (e) {
//      e.stopPropagation(); // Остановить всплытие события
//      e.preventDefault(); // Предотвращаем отправку формы
//      dropDownBtn.innerText = this.innerText;
//      dropDownBtn.focus();
//      dropDownInput.value = this.dataset.value;
//      closeCurrentDropdown(); // Закрываем текущий дропдаун после выбора
//    });
//  });
//
//  // Закрытие при клике снаружи
//  document.addEventListener('click', function (e) {
//    if (!dropDownWrapper.contains(e.target)) {
//      closeCurrentDropdown(); // Закрываем только текущий дропдаун
//    }
//  });
//
//  // Закрытие при нажатии Tab или Escape
//  document.addEventListener('keydown', function (e) {
//    if (e.key === 'Tab' || e.key === 'Escape') {
//      closeCurrentDropdown(); // Закрываем только текущий дропдаун
//    }
//  });
//});
//
//// Инициализация кнопки после загрузки
//function initMyButton() {
//  const myButton = document.getElementById('myButton');
//  
//  if (myButton && myButton.style.display !== 'none') {
//    myButton.addEventListener('click', function(event) {
//      event.preventDefault();
//    });
//  }
//}
//window.onload = initMyButton;

//------------------------------------------------------------------------select выпадающий список


//------------------------------------------------------------------------popup
//const popupLinks = document.querySelectorAll('.popup-link');
//const body = document.querySelector('body');
//const lockPadding = document.querySelectorAll(".lock-padding");
//
//
//let unlock = true;
//
//const timeout = 800;
//
//if (popupLinks.length > 0) {
//  for (let index = 0; index < popupLinks.length; index++) {
//    const popupLink = popupLinks[index];
//    popupLink.addEventListener("click", function (e) {
//      const popupName = popupLink.getAttribute('href').replace('#', '');
//      const currentPopup = document.getElementById(popupName);
//      popupOpen(currentPopup);
//      e.preventDefault();
//    });
//  }
//}
//
//const popupCloseIcon = document.querySelectorAll('.close-popup');
//if (popupCloseIcon.length > 0) {
//  for (let index = 0; index < popupCloseIcon.length; index++) {
//    const el = popupCloseIcon[index];
//    el.addEventListener('click', function (e) {
//      popupClose(el.closest('.popup'));
//      e.preventDefault();
//    })
//  }
//}
//
//function popupOpen(currentPopup) {
//  if (currentPopup && unlock) {
//    const popupActive = document.querySelector('.popup.open');
//    if (popupActive) {
//      popupClose(popupActive, false);
//    } else {
//      bodyLock();
//    }
//    currentPopup.classList.add('open');
//    currentPopup.addEventListener("click", function (e) {
//      if (!e.target.closest('.popup__content')) {
//        popupClose(e.target.closest('.popup'));
//      }
//    });
//  }
//}
//
//function popupClose(popupActive, doUnlock = true) {
//  if (unlock) {
//    popupActive.classList.remove('open');
//    if (doUnlock) {
//      bodyUnlock();
//    }
//  }
//}
//
//function bodyLock() {
//  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//  if (lockPadding.length > 0) {
//    for (let index = 0; index < lockPadding.length; index++) {
//      const el = lockPadding[index];
//      el.style.paddingRight = lockPaddingValue;
//    }
//  }
//  body.style.paddingRight = lockPaddingValue;
//  body.classList.add('lock');
//
//  unlock = false;
//  setTimeout(function () {
//    unlock = true;
//  }, timeout);
//}
//
//function bodyUnlock () {
//  setTimeout(function () {
//    if(lockPadding.length > 0) {
//      for (let index = 0; index < lockPadding.length; index++) {
//        const el = lockPadding[index];
//        el.style.paddingRight = '0px';
//      }
//  }
//    body.style.paddingRight = '0px';
//    body.classList.remove('lock');
//  }, timeout);
//  unlock = false;
//  setTimeout(function () {
//    unlock = true;
//  }, timeout);
//}
//
//document.addEventListener('keydown', function (e) {
//  if (e.which === 27) {
//    const popupActive = document.querySelector('.popup.open');
//    popupClose(popupActive);
//  }
//});
//------------------------------------------------------------------------popup


//------------------------------------------------------------------------Animation
//const animItems = document.querySelectorAll('._anim-items');
//if (animItems.length > 0) {
//  window.addEventListener('scroll', animOnScroll);
//  function animOnScroll() {
//    for (let index = 0; index < animItems.length; index++) {
//        const animItem = animItems[index];
//        const animItemHeight = animItem.offsetHeight;
//        const animItemOffset = offset(animItem).top;
//        const animStart = 5;
//
//        let animItemPoint = window.innerHeight - animItemHeight / animStart;
//
//        if (animItemHeight > window.innerHeight) {
//          animItemPoint = window.innerHeight - window.innerHeight / animStart;
//        }
//
//        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//          animItem.classList.add('_action');
//        } else {
//          animItem.classList.remove('_action');
//        }
//    }
//  }
//  function offset(el) {
//    const rect = el.getBoundingClientRect(),
//    scrollLeft  = window.pageXOffset || document.documentElement.scrollLeft,
//    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    return {top: rect.top + scrollTop, left: rect.left + screenLeft}
//  }
//  animOnScroll();
//}
//------------------------------------------------------------------------Animation

//------------------------------------------------------------------------Обработка формы
//document.addEventListener('DOMContentLoaded', function () {
//  const forms = document.querySelectorAll('form'); // Получаем все формы на странице
//
//  forms.forEach((form) => {
//      const phoneInputs = document.querySelectorAll('._number');
//    
//      phoneInputs.forEach((phoneInput) => {
//        const mask = IMask(phoneInput, { mask: '+7 (000) 000-00-00' });
//    
//        phoneInput.addEventListener('focus', () => {
//          if (!phoneInput.value) {
//            mask.value = '+7() ';
//          }
//        });
//    
//        phoneInput.addEventListener('blur', () => {
//          if (mask.unmaskedValue.length < 2) {
//            mask.value = '';
//          }
//        });
//      });
//
//    form.addEventListener('submit', formSend);
//
//    async function formSend(e) {
//      e.preventDefault();
//
//      let error = formValidate(form);
//      let formData = new FormData(form);
//
//      const formImage = form.querySelector('#formImage');
//      if (formImage && formImage.files[0]) {
//        formData.append('image', formImage.files[0]);
//      }
//
//      if (error === 0) {
//        form.classList.add('_sending');
//        let response = await fetch('send.php', {
//          method: 'POST',
//          body: formData
//        });
//
//      if (response.ok) {
//        let result = await response.json();
//        
//        // Закрытие формы (например, скрытие через класс)
//        form.style.display = 'none';
//        
//        // Добавляем сообщение об успешной отправке
//        const successMessage = document.createElement('div');
//        successMessage.classList.add('success-message'); // Добавляем класс для стилизации
//        successMessage.textContent = 'Форма успешно отправлена! Спасибо за ваш отклик.';
//        form.parentElement.appendChild(successMessage); // Добавляем сообщение в контейнер формы
//        
//        const formPreview = form.querySelector('#formPreview');
//        if (formPreview) {
//          formPreview.innerHTML = '';
//        }
//        form.reset();
//        form.classList.remove('_sending');
//      } else {
//        showErrorMessage('Ошибка при отправке формы');
//        form.classList.remove('_sending');
//      }
//      }
//    }
//
//    function formValidate(form) {
//      let error = 0;
//      let formReq = form.querySelectorAll('._req');
//
//      formReq.forEach((input) => {
//        formRemoveError(input);
//
//        if (input.classList.contains('_email')) {
//          if (!emailTest(input)) { // проверка на корректность email
//            formAddError(input);
//            error++;
//          }
//        } else if (input.classList.contains('_number')) {
//          if (!phoneTest(input)) { // проверка на корректность телефона
//            formAddError(input);
//            error++;
//          }
//        } else if (input.getAttribute('type') === "checkbox" && input.checked === false) {
//          formAddError(input);
//          error++;
//        } else {
//          if (input.value === '') {
//            formAddError(input);
//            error++;
//          }
//        }
//      });
//      return error;
//    }
//
//    function formAddError(input) {
//      input.parentElement.classList.add('_error');
//      input.classList.add('_error');
//    
//      // Ищем элемент с классом form__error внутри контейнера родителя
//      const errorSpan = input.parentElement.querySelector('.form__error');
//      if (errorSpan) {
//        errorSpan.classList.add('view'); // Добавляем класс view
//      }
//    }
//    
//    function formRemoveError(input) {
//      input.parentElement.classList.remove('_error');
//      input.classList.remove('_error');
//    
//      // Ищем элемент с классом form__error внутри контейнера родителя
//      const errorSpan = input.parentElement.querySelector('.form__error');
//      if (errorSpan) {
//        errorSpan.classList.remove('view'); // Удаляем класс view
//      }
//    }
//    
//    // проверка email
//    function emailTest(input) {
//      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(input.value);
//    }
//
//    // проверка телефона
//    function phoneTest(input) {
//      return /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(input.value);
//    }
//
//    // Работа с изображением
//    const formImage = form.querySelector('#formImage');
//    const formPreview = form.querySelector('#formPreview');
//
//    if (formImage) {
//      formImage.addEventListener('change', () => {
//        uploadFile(formImage.files[0]);
//      });
//
//      function uploadFile(file) {
//        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
//          showErrorMessage('Только изображения');
//          formImage.value = '';
//          return;
//        }
//        if (file.size > 2 * 1024 * 1024) {
//          showErrorMessage('Файл должен быть менее 2 МБ');
//          return;
//        }
//        let reader = new FileReader();
//        reader.onload = function (e) {
//          if (formPreview) {
//            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
//          }
//        };
//        reader.onerror = function (e) {
//          showErrorMessage('Ошибка загрузки изображения');
//        };
//        reader.readAsDataURL(file);
//      }
//    }
//  });
//});
////------------------------------------------------------------------------Обработка форм
//------------------------------------------------------------------------Убераем весячие предлоги
document.addEventListener("DOMContentLoaded", function () {
  const prepositions = [" в", " с", " на", " по", " о", " к", " у", " и", " за", " из", " от", "для", "над"];

  function replacePrepositions(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replace(
        new RegExp(`(${prepositions.join("|")}) `, "gi"),
        "$1\u00A0" // \u00A0 — неразрывный пробел
      );
    } else {
      for (let child of node.childNodes) {
        replacePrepositions(child);
      }
    }
  }

  replacePrepositions(document.body);
});
//------------------------------------------------------------------------Убераем весячие предлоги
//------------------------------------------------------------------------Tabs
//const tabsButton = document.querySelectorAll('.tabs-button');
//const tabsContent = document.querySelectorAll('.tabs__content');
//
//tabsButton.forEach((tab, index) => {
//  tab.addEventListener('click', () => {
//    tabsButton.forEach(tab => {tab.classList.remove('active-tab')});
//    tab.classList.add('active-tab');
//    
//    tabsContent.forEach(content => {content.classList.remove('active-tab')})
//    tabsContent[index].classList.add('active-tab');
//  });
//});
//------------------------------------------------------------------------Tabs

//------------------------------------------------------------------------Аккардион
//document.querySelectorAll('.accordion__title').forEach(title => {
//  title.addEventListener('click', () => {
//    const contentId = title.getAttribute('data-a');
//    const content = document.querySelector(`[data-a-content="${contentId}"]`);
//    const isOpen = content.classList.contains('active');
//    
//    // Закрываем все аккордеоны
//    document.querySelectorAll('.accordion__content').forEach(item => {
//      item.classList.remove('active');
//      item.previousElementSibling.querySelector('span').textContent = '';
//    });
//    
//    // Открываем текущий, если он был закрыт
//    if (!isOpen) {
//      content.classList.add('active');
//      title.querySelector('span').textContent = '-';
//    }
//  });
//});
//------------------------------------------------------------------------Аккардион
//------------------------------------------------------------------------Переключение языков
// Конфигурация поддерживаемых языков
//const languages = {
//  en: {
//    name: "EN",
//    file: "en.json"  // Файл с переводами для английского
//  },
//  ru: {
//    name: "RU",
//    file: "ru.json"  // Файл с переводами для русского
//  }
//};
//
//// Получаем необходимые элементы DOM
//const languageBtn = document.getElementById('language-btn');        // Кнопка переключения языка
//const currentLanguage = document.getElementById('current-language'); // Текущий язык
//const languageDropdown = document.getElementById('language-dropdown'); // Выпадающий список
//const arrow = document.querySelector('.language__arrow');           // Стрелка для индикации
//
//// Текущий язык и загруженные переводы
//let currentLang = 'ru';  // По умолчанию русский
//let translations = {};   // Здесь будут храниться все переводы
//
//// 1. Инициализация приложения
//async function init() {
//  // Определяем предпочтительный язык пользователя
//  currentLang = getPreferredLanguage();
//  
//  // Загружаем переводы для выбранного языка
//  await loadTranslations(currentLang);
//  
//  // Обновляем интерфейс согласно переводам
//  updateUI();
//  
//  // Создаем выпадающий список с доступными языками
//  createLanguageDropdown();
//  
//  // Настраиваем обработчики событий
//  setupEventListeners();
//}
//
//// 2. Определение предпочтительного языка
//function getPreferredLanguage() {
//  // Проверяем сохраненный в localStorage выбор
//  const savedLang = localStorage.getItem('lang');
//  if (savedLang && languages[savedLang]) return savedLang;
//  
//  // Если сохраненного выбора нет - используем русский по умолчанию
//  return 'ru';
//}
//
//// 3. Загрузка переводов из JSON-файла
//async function loadTranslations(lang) {
//  try {
//    const response = await fetch(`translations/${languages[lang].file}`);
//    if (!response.ok) throw new Error('Файл переводов не найден');
//    translations = await response.json();
//  } catch (error) {
//    console.error('Ошибка загрузки переводов:', error);
//    // Запасные варианты переводов на случай ошибки
//    translations = {
//      welcome: lang === 'en' ? "Welcome" : "Добро пожаловать",
//      description: lang === 'en' ? "This is a demo text." : "Это демонстрационный текст."
//    };
//  }
//}
//
//// 4. Обновление интерфейса согласно текущему языку
//function updateUI() {
//  // Устанавливаем атрибут lang для всего документа
//  document.documentElement.lang = currentLang;
//  
//  // Обновляем текст на кнопке переключения языка
//  currentLanguage.textContent = languages[currentLang].name;
//  
//  // Обходим все элементы с атрибутом data-i18n
//  document.querySelectorAll('[data-i18n]').forEach(el => {
//    const key = el.getAttribute('data-i18n');
//    
//    // Для обычных элементов с текстом
//    if (translations[key]) {
//      el.innerHTML = translations[key];  // Используем innerHTML для сохранения HTML-разметки
//    }
//    
//    // Для ссылок (обновляем атрибут href)
//    const hrefKey = `${key}-href`;
//    if (translations[hrefKey] && el.tagName === 'A') {
//      el.href = translations[hrefKey];
//    }
//  });
//}
//
//// 5. Создание выпадающего списка языков
//function createLanguageDropdown() {
//  languageDropdown.innerHTML = '';  // Очищаем список
//  
//  // Добавляем все языки кроме текущего
//  Object.entries(languages).forEach(([code, lang]) => {
//    if (code === currentLang) return;
//    
//    const option = document.createElement('div');
//    option.className = 'language-option';
//    option.textContent = lang.name;
//    
//    // Обработчик клика по варианту языка
//    option.addEventListener('click', () => switchLanguage(code));
//    languageDropdown.appendChild(option);
//  });
//}
//
//// 6. Переключение языка
//async function switchLanguage(newLang) {
//  currentLang = newLang;
//  // Сохраняем выбор в localStorage
//  localStorage.setItem('lang', currentLang);
//  // Загружаем новые переводы
//  await loadTranslations(currentLang);
//  // Обновляем интерфейс
//  updateUI();
//  // Перестраиваем выпадающий список
//  createLanguageDropdown();
//  // Закрываем выпадающее меню
//  closeDropdown();
//}
//
//// 7. Управление выпадающим меню
//function toggleDropdown() {
//  // Переключаем видимость меню
//  languageDropdown.classList.toggle('_show');
//  // Анимируем стрелку
//  arrow.classList.toggle('up');
//}
//
//function closeDropdown() {
//  // Скрываем меню
//  languageDropdown.classList.remove('_show');
//  // Возвращаем стрелку в исходное положение
//  arrow.classList.remove('up');
//}
//
//// 8. Настройка обработчиков событий
//function setupEventListeners() {
//  // Клик по кнопке переключения языка
//  languageBtn.addEventListener('click', toggleDropdown);
//  
//  // Клик в любом месте документа
//  document.addEventListener('click', (e) => {
//    // Если клик был не по кнопке - закрываем меню
//    if (!languageBtn.contains(e.target)) {
//      closeDropdown();
//    }
//  });
//}
//
//// Запускаем приложение
//init();
//------------------------------------------------------------------------Переключение языков