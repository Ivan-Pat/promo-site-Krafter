#### Запуск разработки 

##### 1. Запустить проект для разработки
```
npm start
```
##### 2. Собрать проект для продакшена 
```
npm run build
```
##### 3. Создание архива для продакшена 
```
npm run zip
```

#### Структура проекта 
```
    /style/
        /common/                        // Служебные стили проекта
            _basic.scss                 // Основные стили тела проекта для html, body и глобальные стили для тегов
        /pages/                         // Блоки и элементы страниц
        main.scss                       // Основной файл, который компилируется в style.css
```
##### Каждый блок или элемент имеет одноименный файл html, scss, svg. 
```
Например: 
    - promo-element.html
    - promo-elemnt.scss
    - promo-element.png
```
##### Библиотеки и плагины 
[Слайдер swiper](https://swiperjs.com)
[Castom-select](https://github.com/itchief/ui-components/tree/master/custom-select)
[Валидация форм](https://github.com/horprogs/Just-validate#readme)
[Маска телефона](https://github.com/RobinHerbots/Inputmask)
