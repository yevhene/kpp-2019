# Крос-платформне програмування (весна 2019)

## Викладач
Шемет Євген Олександрович [yevhene@vntu.edu.ua](mailto:yevhene@vntu.edu.ua)

## Посилання
Звіти до лабораторних подаються через [сайт](http://learn.pomaranchi.com).

[Налаштування proxy у ВНТУ](/docs/proxy.md).

[Література](/docs/literature.md)

## Розділ 1: Термінал (shell)

### Лабораторнi
- [Лабораторна 0: Реєстрація в системі](labs/00-registration.md)
- [Лабораторна 1: Консольна аплікація](labs/01-terminal.md)
- [Лабораторна 2: Серверна аплікація](labs/02-server.md)
- [Лабораторна 3: Браузерна аплікація](labs/03-browser.md)

#### Лекція 1: Вступ
- Теми:
  - Мова JavaScript;
  - Історія;
  - Особливості.
- [Слайди](/slides/01-intro/)
- [Конспект](/posts/01-intro.md)

#### Лекція 2: Основи JavaScript
- Теми:
  - Вирази, оператори, змінні;
  - Масиви, об'єкти;
  - Умови, цикли;
  - Функції.
- [Слайди](/slides/02-basics/)
- [Конспект](/posts/02-basics.md)

#### Лекція 3: Основи Node.js
- Теми:
  - Основи `node.js`;
  - Менеджер пакетів `npm`;
  - Маніфест аплікації `package.json`.
- [Слайди](/slides/03-node/)
- [Конспект](/posts/03-node.md)

#### Лекція 4: Область визначення (scope)
- Теми:
  - Область визначення;
  - Декларація змінних (var, let, const);
  - Вспливання змінних (hoisting).
- [Слайди](/slides/04-scope/)
- Конспект

#### Лекція 5: Функції
- Теми:
  - Функції;
  - Параметри і аргументи;
  - Функції вищого порядку (map, reduce);
  - Зворотні виклики (callbacks). Замикання.
- [Слайди](/slides/05-functions/)
- Конспект

#### Лекція 6: Об'єкти
- Теми:
  - Об'єкти;
  - Властивості;
  - this.
- [Слайди](/slides/06-objects/)
- Конспект

#### Практика: Контроль версій
- Теми:
  - Системи контролю версій;
  - Git (init, commit);
  - Галудження (branch, checkout, reset, merge, rebase).
- [Слайди](/slides/s3-git/)

#### Лекція 7: Типи
- Теми:
  - Типи, typeof;
  - Приведення типів.
- [Слайди](/slides/07-types/)
- Конспект

#### Лекція 8: Протоколи та стандарти Web
- Теми:
  - WWW;
  - URI (URL/URN);
  - HTTP (request, response, method, header).
- [Слайди](/slides/08-web/)

#### Лекція 9: express.js
- Теми:
  - Роутинг;
  - Шаблонізатори;
  - Ресурси.
- [Слайди](/slides/09-express/)

#### Лекція 10: HTML Форми
- Теми:
  - form;
  - input/textarea/select;
  - Валідація.
- [Слайди](/slides/10-forms)

#### Лекція 11: Прототипи і Конструктори
- Теми:
  - prototype;
  - class.
- [Слайди](/slides/11-oop/)
- Конспект

#### Лекція 12: Обіцянки
- Теми:
  - Promise;
  - Ланцюжки;
  - Групування.
- [Слайди](/slides/12-promises)

#### Лекція 13: Збереження даних
- Теми:
  - Бази даних (CAP);
  - Документна база MongoDB;
  - Драйвер доступу (mongo, mongoose).
- [Слайди](/slides/13-mongo)

#### Лекція 14: Тестування
- Теми:
  - Тестування (mocha, chai);
  - Контроль якості коду (eslint);
  - Моніторинг в реальному часі.
- [Слайди](/slides/14-testing)

#### Лекція 15: Асинхронність (Генератори)
- Теми:
  - Ітератори;
  - Генератори.
- [Слайди](/slides/15-generators)

#### Лекція 16: Асинхронність
- Теми:
  - Асинхронні функції;
  - Асинхронні ітератори;
  - koa.js.
- [Слайди](/slides/16-async)

#### Практика: Розгортування
- Теми:
  - Хмарні сервіси (Heroku);
  - Системи керування мікросервісами (foreman, pm2).
- [Слайди](/slides/s7-deploy)

#### Лекція 17: Браузерні технології
- Теми:
  - HTML, DOM;
  - CSS, селектори;
  - Bootstrap.
- [Слайди](/slides/17-browser)

#### Лекція 18 JavaScript HTML5 API
- Теми:
  - Інтеграція JavaScript із браузером;
  - HTML5 APIs (geolocation, canvas, history).
- [Слайди](/slides/18-html5)

#### Лекція 19: jQuery
- Теми:
  - Пошук;
  - Маніпуляція;
  - Анімація.
- [Слайди](/slides/19-jquery)

#### Лекція 20: API
- Теми:
  - API (Види, формати);
  - REST;
  - GraphQL.
- [Слайди](/slides/20-api)

#### Лекція 21: AJAX
- Теми:
  - Історія;
  - Інструменти (jQuery.ajax, fetch);
  - Автентифікація;
  - CORS.
- [Слайди](/slides/21-ajax)

#### Лекція 22: Websocket
- Теми:
  - Websocket протокол
  - Підтримка на сервері та у браузері
- [Слайди](/slides/22-websockets)

#### Лекція 23: Apache Cordova
- Теми:
  - Apache Cordova
- [Слайди](/slides/23-cordova)

#### Лекція 24: Electron
- Теми:
  - Electron
- [Слайди](/slides/24-electron)

#### Лекція 25: Hello React
- Теми:
  - React
  - create-react-app
- [Слайди](/slides/25-react)
- [Демо (код)](https://github.com/yevhene/kpp-2019/tree/master/demo/react-hello-world)

#### Лекція 26: React
- Теми:
  - React
  - JSX
- [Слайди](/slides/26-react)

#### Лекція 27: Архітектура Fiber
- Теми:
  - Fiber
- [Слайди](/slides/27-fiber)
- [Демо (код)](https://github.com/yevhene/kpp-2019/tree/master/demo/react-fiber)

#### Лекція 28: Управління станом
- Теми:
  - Flux;
  - Redux;
  - Побічні ефекти (Redux Thunk).
- [Слайди](/slides/28-redux)
- [Демо (код)](https://github.com/yevhene/kpp-2018/tree/master/demo/redux)

#### Лекція 29: React Native
- Теми:
  - React Native
  - Expo
- [Слайди](/slides/29-react-native)
- [Демо](https://github.com/yevhene/kpp-2018/tree/master/demo/react-native-hello-world)

#### Лекція 30: React Native Navigation
- Теми:
  - React Native Navigation
- [Слайди](/slides/30-react-native-navigation)
- [Демо](https://github.com/yevhene/kpp-2018/tree/master/demo/react-native-navigation)

#### Лекція 31: ECMAScript
- Теми:
  - Стандарт ECMAScript;
  - Історія;
  - Нововведення.
Стандарт. Історія.
- [Слайди](/slides/31-ecma)
